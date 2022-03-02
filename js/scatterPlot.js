import * as d3 from "d3";
import { xAxis, yAxis } from "./axis.js";
import drawCircles from "./circle.js";
import { domainExtent, scaleMap } from "./utils.js";

const drawScatterPlot = ({
  svg,
  xAxisG,
  yAxisG,
  data,
  colorScale,
  xScale,
  yScale,
  xRange,
  yRange,
  config,
}) => {
  const { groupBy, x, y } = config;
  const zoomedFuncs = [];

  if (groupBy.isGroupBy) {
    const groupByKeySet = new Set(data.map((d) => d[groupBy.key]));
    const groupByKeyOrder = Array.from(groupByKeySet);
    const datas = groupByKeyOrder.map((key) =>
      data.filter((d) => d[groupBy.key] === key)
    );
    groupBy.sameXScale && xAxisG.call(xAxis, xScale, config);
    groupBy.sameYScale && yAxisG.call(yAxis, yScale, config);

    const xScales = [];
    const yScales = [];
    datas.forEach((data, i) => {
      if (!groupBy.sameXScale) {
        const xDomain = domainExtent(d3.extent(data, (d) => d[x.key]));
        xScale = scaleMap[x.scaleType]().domain(xDomain).range(xRange);
        xScales.push(xScale);
      }
      if (!groupBy.sameYScale) {
        const yDomain = domainExtent(d3.extent(data, (d) => d[y.key]));
        yScale = scaleMap[y.scaleType]().domain(yDomain).range(yRange);
        yScales.push(scaleMap[y.scaleType]().domain(yDomain).range(yRange));
      }
      const circlesG = svg.append("g").attr("id", `circles-g-${i}`);
      circlesG.call(drawCircles, data, config, xScale, yScale, colorScale);

      zoomedFuncs.push(({ transform, newXScale, newYScale }) => {
        const _newXScale = groupBy.sameXScale
          ? newXScale
          : transform.rescaleX(xScales[i]);
        const _newYScale = groupBy.sameYScale
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
      x.zoom && groupBy.sameXScale && xAxisG.call(xAxis, newXScale, config);
      y.zoom && groupBy.sameYScale && yAxisG.call(yAxis, newYScale, config);
      zoomedFuncs.forEach((zoomedFunc) =>
        zoomedFunc({ transform, newXScale, newYScale })
      );
    };
    const zoom = d3.zoom().scaleExtent([0.5, 32]).on("zoom", zoomed);
    (x.zoom || y.zoom) && svg.call(zoom).call(zoom.transform, d3.zoomIdentity);
  } else {
    xAxisG.call(xAxis, xScale, config);
    yAxisG.call(yAxis, yScale, config);
    const circlesG = svg.append("g").attr("id", `circles-g`);
    circlesG.call(drawCircles, data, config, xScale, yScale, colorScale);

    const zoomed = ({ transform }) => {
      const newXScale = transform.rescaleX(xScale);
      const newYScale = transform.rescaleY(yScale);
      x.zoom && xAxisG.call(xAxis, newXScale, config);
      y.zoom && yAxisG.call(yAxis, newYScale, config);
      circlesG.call(
        drawCircles,
        data,
        config,
        x.zoom ? newXScale : xScale,
        y.zoom ? newYScale : yScale,
        colorScale
      );
    };
    const zoom = d3.zoom().scaleExtent([0.5, 32]).on("zoom", zoomed);
    (x.zoom || y.zoom) && svg.call(zoom).call(zoom.transform, d3.zoomIdentity);
  }
};

export default drawScatterPlot;
