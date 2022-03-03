import * as d3 from "d3";
import drawTitle from "./title.js";
import drawScatterPlot from "./scatterPlot.js";
import drawBarChart from "./barChart.js";
import { domainExtent, scaleMap, colors } from "./utils.js";

const ZChart = ({ chartType, domSelector, data: _data, config }) => {
  let {
    width = 800,
    height = 600,
    background = null,
    border = null,
    padding = [50, 25, 35, 35],
    dataProcessing = {},
    x = {},
    y = {},
    circle = {},
    groupBy = {},
  } = config;

  // data
  let data = _data;
  if (dataProcessing.needSort) {
    data = d3.sort(data, (d) => d[dataProcessing.sort]);
    if (dataProcessing.sortReverse) {
      data = data.reverse();
    }
  }
  if (dataProcessing.needFixed) {
    const { fixedKey, fixedNum } = dataProcessing;
    data.forEach((d) => {
      d[fixedKey] = (+d[fixedKey]).toFixed(fixedNum);
    });
  }

  // init svg
  const svg = d3.select(domSelector).append("svg").attr("id", "chart-svg");
  svg
    .attr("width", width)
    .attr("height", height)
    .style("background", background)
    .style("border", border);

  // draw title
  const titleG = svg.append("g").attr("id", "title-g");
  titleG.call(drawTitle, config);

  // compute Scale - X, Y, Color
  const colorScale = d3.scaleOrdinal().range(colors);

  const xDomain =
    x.scaleType === "bin"
      ? data.map((d) => d[x.key])
      : domainExtent(d3.extent(data, (d) => +d[x.key]));
  const xRange = [padding[3] + x.inset, width - padding[1] - x.inset];
  let xScale = scaleMap[x.scaleType]().domain(xDomain).range(xRange);

  const yDomain = y.fromZero
    ? domainExtent([0, d3.max(data, (d) => +d[y.key])])
    : domainExtent(d3.extent(data, (d) => +d[y.key]));
  const yRange = [height - padding[2] - y.inset, padding[0] + y.inset];
  let yScale = scaleMap[y.scaleType]().domain(yDomain).range(yRange);

  // init axis - g
  const xAxisG = svg.append("g").attr("id", "x-axis-g");
  const yAxisG = svg.append("g").attr("id", "y-axis-g");

  if (chartType === "scatter_plot") {
    drawScatterPlot({
      svg,
      xAxisG,
      yAxisG,
      data,
      xScale,
      yScale,
      colorScale,
      xRange,
      yRange,
      config,
    });
  }
  if (chartType === "barchart") {
    drawBarChart({
      svg,
      xAxisG,
      yAxisG,
      data,
      xScale,
      yScale,
      colorScale,
      config,
    });
  }

  // legend
  if (groupBy.isGroupBy) {
    const {
      legendHeight = 30,
      legendIconWidth = 40,
      legendFontSize = 16,
      legendLabel: _legendLabel = "(v)=>v",
    } = groupBy;
    const legendsG = svg
      .append("g")
      .attr("id", "legends-g")
      .attr(
        "transform",
        `translate(${width - padding[1] * 0.85},${padding[0]})`
      );

    const groupByKeyList = Array.from(new Set(data.map((d) => d[groupBy.key])));
    const legendG = legendsG
      .selectAll("g")
      .data(groupByKeyList)
      .join("g")
      .attr("transform", (d, i) => `translate(0,${i * legendHeight})`);
    if (chartType === "scatter_plot") {
      if (circle.withLinks) {
        legendG
          .append("path")
          .attr("d", `M0,${legendHeight / 2}h${legendIconWidth}`)
          .attr("fill", "none")
          .attr("stroke", (d) => colorScale(d))
          .attr("stroke-width", circle.linkWidth)
          .attr("stroke-linecap", "round");
      }
      legendG
        .append("circle")
        .attr("cx", legendIconWidth / 2)
        .attr("cy", legendHeight / 2)
        .attr("r", circle.r)
        .attr("fill", (d) => colorScale(d))
        .attr("stroke", circle.strokeColor)
        .attr("stroke-width", circle.strokeWidth);
    }
    if (chartType === "barchart") {
      legendG
        .append("rect")
        .attr("x", 0)
        .attr("y", legendHeight * 0.25)
        .attr("width", legendIconWidth)
        .attr("height", legendHeight * 0.5)
        .attr("fill", (d) => colorScale(d));
    }

    const legendLabel = eval(_legendLabel);
    legendG
      .append("text")
      .attr("x", legendIconWidth + 6)
      .attr("y", legendHeight / 2 + legendFontSize * 0.35)
      .attr("font-size", legendFontSize)
      .attr("fill", (d) => colorScale(d))
      .text((d) => legendLabel(d));
  }
};

export default ZChart;
