import * as d3 from "d3";
import { xAxis, yAxis } from "./axis.js";
import drawCircles from "./circle.js";

const scaleMap = {
  linear: d3.scaleLinear,
  log: d3.scaleLog,
};

const domainExtent = (domain) => {
  const ext = (domain[1] - domain[0]) * 0.06;
  return [domain[0] - ext, domain[1] + ext];
};

const zillizBI = ({ chartType, domSelector, data, config }) => {
  const svg = d3.select(domSelector).append("svg").attr("id", "chart-svg");
  const { width, height, background, border, padding, x, y } = config;
  svg
    .attr("width", width)
    .attr("height", height)
    .style("background", background)
    .style("border", border);

  const xDomain = domainExtent(d3.extent(data, (d) => d[x.key]));
  const xRange = [padding[3] + x.inset, width - padding[1] - x.inset];
  const xAxisG = svg.append("g").attr("id", "x-axis-g");
  let xScale = scaleMap[x.scaleType]().domain(xDomain).range(xRange);

  xAxisG.call(xAxis, xScale, config);

  const yDomain = domainExtent(d3.extent(data, (d) => d[y.key]));
  const yRange = [height - padding[2] - y.inset, padding[0] + y.inset];
  const yAxisG = svg.append("g").attr("id", "y-axis-g");
  let yScale = scaleMap[y.scaleType]().domain(yDomain).range(yRange);

  yAxisG.call(yAxis, yScale, config);

  if (chartType === "scatter_plot") {
    const circlesG = svg.append("g").attr("id", "circles-g");
    drawCircles({ circlesG, data, config, xScale, yScale });
    const zoomed = ({ transform }) => {
      const newXScale = transform.rescaleX(xScale);
      const newYScale = transform.rescaleY(yScale);
      drawCircles({
        circlesG,
        data,
        config,
        xScale: x.zoom ? newXScale : xScale,
        yScale: y.zoom ? newYScale : yScale,
      });
      x.zoom && xAxisG.call(xAxis, newXScale, config);
      y.zoom && yAxisG.call(yAxis, newYScale, config);
    };
    const zoom = d3
      .zoom()
      .scaleExtent([0.5, 32])
      .extent([
        [padding[3], padding[0]],
        [width - padding[1], height - padding[2]],
      ])
      .on("zoom", zoomed);
    (x.zoom || y.zoom) && svg.call(zoom).call(zoom.transform, d3.zoomIdentity);
  }
};

export default zillizBI;
