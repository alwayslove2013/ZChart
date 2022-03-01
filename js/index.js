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
    group = false,
  } = config;
  svg
    .attr("width", width)
    .attr("height", height)
    .style("background", background)
    .style("border", border);

  const titleG = svg.append("g").attr("id", "title-g");
  titleG.call(drawTitle, config);

  const zoomedFuncs = [];

  if (!!group) {
    const groupKeySet = new Set(data.map((d) => d[group.key]));
    const groupKeyOrder = Array.from(groupKeySet);
    const datas = groupKeyOrder.map((key) =>
      data.filter((d) => d[group.key] === key)
    );

    let xDomain = domainExtent(d3.extent(data, (d) => d[x.key]));
    let xRange = [padding[3] + x.inset, width - padding[1] - x.inset];
    let xScale = scaleMap[x.scaleType]().domain(xDomain).range(xRange);

    let xAxisG = svg.append("g").attr("id", "x-axis-g");
    group.sameXScale && xAxisG.call(xAxis, xScale, config);

    let yDomain = domainExtent(d3.extent(data, (d) => d[y.key]));
    let yRange = [height - padding[2] - y.inset, padding[0] + y.inset];
    let yScale = scaleMap[y.scaleType]().domain(yDomain).range(yRange);

    let yAxisG = svg.append("g").attr("id", "y-axis-g");
    group.sameYScale && yAxisG.call(yAxis, yScale, config);

    datas.forEach((data, i) => {
      if (!group.sameXScale) {
        xDomain = domainExtent(d3.extent(data, (d) => d[x.key]));
        xScale = scaleMap[x.scaleType]().domain(xDomain).range(xRange);
      }
      if (!group.sameYScale) {
        yDomain = domainExtent(d3.extent(data, (d) => d[y.key]));
        yScale = scaleMap[y.scaleType]().domain(yDomain).range(yRange);
      }
      const circlesG = svg.append("g").attr("id", `circles-g-${i}`);
      console.log("???", data[0].acc, xScale(data[0].acc));
      circlesG.call(drawCircles, data, config, xScale, yScale);

      zoomedFuncs.push(({ transform, newXScale, newYScale }) => {
        console.log("??????", data[0].acc, xScale(data[0].acc));
        const _newXScale = group.sameXScale
          ? newXScale
          : transform.rescaleX(xScale);
        const _newYScale = group.sameYScale
          ? newYScale
          : transform.rescaleY(yScale);
        circlesG.call(
          drawCircles,
          data,
          config,
          x.zoom ? _newXScale : xScale,
          y.zoom ? _newYScale : yScale
        );
      });
    });

    const zoomed = ({ transform }) => {
      console.log('...')
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
  }
};

export default zillizBI;
