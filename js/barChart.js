import { xAxis, yAxis } from "./axis.js";

const drawBarChart = ({
  svg,
  xAxisG,
  yAxisG,
  data,
  xScale,
  yScale,
  colorScale,
  config,
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

  const barsG = svg.append("g").attr("id", "bars-g");
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

  if (tooltip.hasTooltip) {
    const tooltipG = barsG
      .append("g", "tooltip-g")
      .style("pointer-events", "none")
      .attr("opacity", 0);
    barG.style("cursor", "pointer").on("mousemove", (e, d) => {
      tooltipG.attr("opacity", 1);
      const { layerX: __x, layerY: __y } = e;

      tooltipG.attr("transform", `translate(${__x},${__y})`);
      const path = tooltipG
        .selectAll("path")
        .data([,])
        .join("path")
        .attr("fill", "white")
        .attr("stroke", "#666");
      const text = tooltipG
        .selectAll("text")
        .data([,])
        .join("text")
        .attr("font-size", tooltip.fontSize)
        .attr("font-weight", tooltip.fontWeight)
        .attr("fill", tooltip.fontColor)
        .call((text) =>
          text
            .selectAll("tspan")
            .data(tooltip.content)
            .join("tspan")
            .attr("x", 0)
            .attr("y", (_, i) => `${i * 1.5}em`)
            .text((key) => `${key}: ${d[key]}`)
        );
      const { y: _y, width: w, height: h } = text.node().getBBox();
      text.attr("transform", `translate(${-w / 2},${15 - _y})`);
      path.attr(
        "d",
        `M${-w / 2 - 10},5H-5l5,-5l5,5H${w / 2 + 10}v${h + 20}h-${w + 20}z`
      );
    });

    barG.on("mouseout", () => {
      tooltipG.attr("opacity", 0);
    });
  }
};

export default drawBarChart;
