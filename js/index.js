import * as d3 from "d3";
import { xAxis, yAxis } from "./axis.js";
import drawCircles from "./circle.js";
import drawTitle from "./title.js";

const scaleMap = {
  linear: d3.scaleLinear,
  log: d3.scaleLog,
};

const domainExtent = (domain) => {
  const ext = (domain[1] - domain[0]) * 0.06;
  return [domain[0] - ext, domain[1] + ext];
};

const colors = d3.schemeTableau10;

const zillizBI = ({ chartType, domSelector, data, config }) => {
  const svg = d3.select(domSelector).append("svg").attr("id", "chart-svg");
  const {
    width,
    height,
    background,
    border,
    padding,
    x,
    y,
    group = {},
  } = config;
  svg
    .attr("width", width)
    .attr("height", height)
    .style("background", background)
    .style("border", border);

  const titleG = svg.append("g").attr("id", "title-g");
  titleG.call(drawTitle, config);

  const colorScale = d3.scaleOrdinal().range(colors);

  let xDomain = domainExtent(d3.extent(data, (d) => d[x.key]));
  let xRange = [padding[3] + x.inset, width - padding[1] - x.inset];
  let xScale = scaleMap[x.scaleType]().domain(xDomain).range(xRange);

  let xAxisG = svg.append("g").attr("id", "x-axis-g");

  let yDomain = domainExtent(d3.extent(data, (d) => d[y.key]));
  let yRange = [height - padding[2] - y.inset, padding[0] + y.inset];
  let yScale = scaleMap[y.scaleType]().domain(yDomain).range(yRange);

  let yAxisG = svg.append("g").attr("id", "y-axis-g");

  const zoomedFuncs = [];

  if (group.hasGroup) {
    const groupKeySet = new Set(data.map((d) => d[group.key]));
    const groupKeyOrder = Array.from(groupKeySet);
    const datas = groupKeyOrder.map((key) =>
      data.filter((d) => d[group.key] === key)
    );
    group.sameXScale && xAxisG.call(xAxis, xScale, config);
    group.sameYScale && yAxisG.call(yAxis, yScale, config);

    const xScales = [];
    const yScales = [];
    datas.forEach((data, i) => {
      if (!group.sameXScale) {
        xDomain = domainExtent(d3.extent(data, (d) => d[x.key]));
        xScale = scaleMap[x.scaleType]().domain(xDomain).range(xRange);
        xScales.push(xScale);
      }
      if (!group.sameYScale) {
        yDomain = domainExtent(d3.extent(data, (d) => d[y.key]));
        yScale = scaleMap[y.scaleType]().domain(yDomain).range(yRange);
        yScales.push(scaleMap[y.scaleType]().domain(yDomain).range(yRange));
      }
      const circlesG = svg.append("g").attr("id", `circles-g-${i}`);
      circlesG.call(drawCircles, data, config, xScale, yScale, colorScale);

      zoomedFuncs.push(({ transform, newXScale, newYScale }) => {
        const _newXScale = group.sameXScale
          ? newXScale
          : transform.rescaleX(xScales[i]);
        const _newYScale = group.sameYScale
          ? newYScale
          : transform.rescaleY(yScales[i]);
        circlesG.call(
          drawCircles,
          data,
          config,
          x.zoom ? _newXScale : xScales[i] || xScale,
          y.zoom ? _newYScale : yScales[i] || yScale,
          colorScale
        );
      });
    });

    const zoomed = ({ transform }) => {
      const newXScale = transform.rescaleX(xScale);
      const newYScale = transform.rescaleY(yScale);
      x.zoom && group.sameXScale && xAxisG.call(xAxis, newXScale, config);
      y.zoom && group.sameYScale && yAxisG.call(yAxis, newYScale, config);
      zoomedFuncs.forEach((zoomedFunc) =>
        zoomedFunc({ transform, newXScale, newYScale })
      );
    };
    const zoom = d3.zoom().scaleExtent([0.5, 32]).on("zoom", zoomed);
    (x.zoom || y.zoom) && svg.call(zoom).call(zoom.transform, d3.zoomIdentity);
  } else {
  }
};

export default zillizBI;
