import * as d3 from "d3";
import { xAxis, yAxis } from "./axis.js";
import drawCircles from "./circle.js";
import drawTitle from "./title.js";

const scaleMap = {
  linear: d3.scaleLinear,
  log: d3.scaleLog,
  bin: d3.scaleBand,
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
    groupBy = {},
  } = config;
  svg
    .attr("width", width)
    .attr("height", height)
    .style("background", background)
    .style("border", border);

  const titleG = svg.append("g").attr("id", "title-g");
  titleG.call(drawTitle, config);

  const colorScale = d3.scaleOrdinal().range(colors);

  const xDomain =
    x.scaleType === "bin"
      ? data.map((d) => d[x.key])
      : domainExtent(d3.extent(data, (d) => d[x.key]));
  const xRange = [padding[3] + x.inset, width - padding[1] - x.inset];
  let xScale = scaleMap[x.scaleType]().domain(xDomain).range(xRange);

  const xAxisG = svg.append("g").attr("id", "x-axis-g");

  const yDomain = y.fromZero
    ? [0, d3.max(data, (d) => d[y.key])]
    : domainExtent(d3.extent(data, (d) => d[y.key]));
  const yRange = [height - padding[2] - y.inset, padding[0] + y.inset];
  let yScale = scaleMap[y.scaleType]().domain(yDomain).range(yRange);

  const yAxisG = svg.append("g").attr("id", "y-axis-g");

  if (chartType === "scatter_plot") {
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
      (x.zoom || y.zoom) &&
        svg.call(zoom).call(zoom.transform, d3.zoomIdentity);
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
      (x.zoom || y.zoom) &&
        svg.call(zoom).call(zoom.transform, d3.zoomIdentity);
    }
  }
  if (chartType === "bar") {
    xScale.paddingInner(0.3).paddingOuter(0.5);
    xAxisG.call(xAxis, xScale, config);
    yAxisG.call(yAxis, yScale, config);

    const { bar } = config;
    const {
      isColorMapping = false,
      color = "#888",
      withLabels,
      label,
      labelFontSize,
    } = bar;
    const colorMap = isColorMapping ? colorScale : () => color;

    const barsG = svg.append("g").attr("id", "bars-g");
    const barG = barsG.selectAll("g").data(data).join("g");

    if (groupBy.isGroupBy) {
      const groupByKeyOrder = Array.from(
        new Set(data.map((d) => d[groupBy.key]))
      );
      console.log("groupByKeyOrder", groupByKeyOrder);
      const innerPadding = 0.1;
      const innerBarStep = xScale.bandwidth() / groupByKeyOrder.length;
      const innerBarWidth = innerBarStep * (1 - innerPadding);
      // console.log(innerBarStep, innerBarWidth)
      const innerBias = (d) =>
        (groupByKeyOrder.indexOf(d[groupBy.key]) + innerPadding) * innerBarStep;
      barG
        .append("rect")
        .attr("x", (d) => xScale(d[x.key]) + innerBias(d))
        .attr("y", (d) => yScale(d[y.key]))
        .attr("width", innerBarWidth)
        .attr("height", (d) => height - padding[2] - y.inset - yScale(d[y.key]))
        .attr("fill", (d) => colorMap(d[color]));
      withLabels &&
        barG
          .append("text")
          .attr("x", (d) => xScale(d[x.key]) + innerBarWidth / 2 + innerBias(d))
          .attr("y", (d) => yScale(d[y.key]) - 5)
          .attr("text-anchor", "middle")
          .text((d) => label(d))
          .attr("font-size", labelFontSize)
          .attr("fill", (d) => colorMap(d[color]));
    } else {
      barG
        .append("rect")
        .attr("x", (d) => xScale(d[x.key]))
        .attr("y", (d) => yScale(d[y.key]))
        .attr("width", xScale.bandwidth())
        .attr("height", (d) => height - padding[2] - y.inset - yScale(d[y.key]))
        .attr("fill", (d) => colorMap(d[color]));
      withLabels &&
        barG
          .append("text")
          .attr("x", (d) => xScale(d[x.key]) + xScale.bandwidth() / 2)
          .attr("y", (d) => yScale(d[y.key]) - 5)
          .attr("text-anchor", "middle")
          .text((d) => label(d))
          .attr("font-size", labelFontSize)
          .attr("fill", (d) => colorMap(d[color]));
    }
  }
};

export default zillizBI;
