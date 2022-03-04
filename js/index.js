import * as d3 from "d3";
import drawTitle from "./title.js";
import drawScatterPlot from "./scatterPlot.js";
import drawBarChart from "./barChart.js";
import drawLegend from "./legend.js";
import drawTooltip from "./tooltip.js";
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

  // compute Scale - X, Y, Color
  const colorScale = d3.scaleOrdinal().range(colors);

  // console.log(d3)

  const xDomain =
    x.scaleType === "bin" || x.scaleType === "ordinal"
      ? data.map((d) => d[x.key])
      : domainExtent(d3.extent(data, (d) => +d[x.key]));
  const xRange = [padding[3] + x.inset, width - padding[1] - x.inset];
  let xScale = scaleMap[x.scaleType]().domain(xDomain).range(xRange);

  const yDomain = y.fromZero
    ? domainExtent([0, d3.max(data, (d) => +d[y.key])])
    : domainExtent(d3.extent(data, (d) => +d[y.key]));
  const yRange = [height - padding[2] - y.inset, padding[0] + y.inset];
  let yScale = scaleMap[y.scaleType]().domain(yDomain).range(yRange);

  const clipId = `chart-clip-${Math.floor(Math.random() * 999999999)}`;
  const clip = `url(#${clipId})`;
  svg
    // .append("defs")
    .append("clipPath")
    .attr("id", clipId)
    .append("rect")
    .attr("x", padding[3] - x.inset)
    .attr("y", padding[0])
    .attr("width", width - padding[1] - padding[3] + x.inset * 2)
    .attr("height", height - padding[0] - padding[2]);

  // title
  const titleG = svg.append("g").attr("id", "title-g");
  titleG.call(drawTitle, config);

  // init axis - g
  const xAxisG = svg.append("g").attr("id", "x-axis-g");
  const yAxisG = svg.append("g").attr("id", "y-axis-g");

  // drawItems - the main part
  const circlesPlotG = svg.append("g").attr("id", "circles-plot-g");
  const barsG = svg.append("g").attr("id", "bars-g");
  const legendsG = svg.append("g").attr("id", "legends-g");
  const tooltipG = svg
    .append("g")
    .attr("id", "tooltip-g")
    .style("pointer-events", "none")
    .attr("opacity", 0);
  const { showTooltip, closeTooltip } = drawTooltip({
    tooltipG,
    config,
    colorScale,
  });

  if (chartType === "scatter_plot") {
    drawScatterPlot({
      svg,
      circlesPlotG,
      xAxisG,
      yAxisG,
      data,
      xScale,
      yScale,
      colorScale,
      xRange,
      yRange,
      config,
      showTooltip,
      closeTooltip,
      clip,
    });
  }
  if (chartType === "barchart") {
    drawBarChart({
      barsG,
      xAxisG,
      yAxisG,
      data,
      xScale,
      yScale,
      colorScale,
      config,
      showTooltip,
      closeTooltip,
      clip,
    });
  }

  // legend
  legendsG.attr(
    "transform",
    `translate(${width - padding[1] * 0.85},${padding[0]})`
  );
  if (groupBy.isGroupBy) {
    drawLegend({ chartType, legendsG, data, colorScale, config, svg });
  }
};

export default ZChart;
