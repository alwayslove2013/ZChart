import { xAxis, yAxis } from "./axis.js";

const drawBarChart = ({
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
}) => {
  xScale.paddingInner(0.3).paddingOuter(0.5);
  xAxisG.call(xAxis, xScale, config);
  yAxisG.call(yAxis, yScale, config);

  const { bar, groupBy, x, y, tooltip } = config;

  const {
    isColorMapping = false,
    color = "#888",
    withLabels,
    label: _label = "()=>{}",
    labelFontSize,
  } = bar;
  const label = eval(_label);
  const colorMap = isColorMapping ? colorScale : () => color;

  const barG = barsG.selectAll("g").data(data).join("g");

  if (groupBy.isGroupBy) {
    const groupByKeyOrder = Array.from(
      new Set(data.map((d) => d[groupBy.key]))
    );
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
      .attr("height", (d) => yScale(0) - yScale(d[y.key]))
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
      .attr("height", (d) => yScale(0) - yScale(d[y.key]))
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

  barG.style("cursor", "pointer").on("mousemove", showTooltip);

  barG.on("mouseout", closeTooltip);
};

export default drawBarChart;
