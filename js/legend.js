import * as d3 from "d3";

const drawLegend = ({ chartType, legendsG, data, colorScale, config, svg }) => {
  const { groupBy, circle } = config;
  const {
    legendHeight = 30,
    legendIconWidth = 40,
    legendFontSize = 16,
    legendLabel: _legendLabel = "(v)=>v",
  } = groupBy;

  const groupByKeyList = Array.from(new Set(data.map((d) => d[groupBy.key])));
  const legendG = legendsG
    .selectAll("g")
    .data(groupByKeyList)
    .join("g")
    .attr("transform", (_, i) => `translate(0,${i * legendHeight})`);
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

  legendG.style("cursor", "pointer").on("click", function (_, d) {
    const items = svg.selectAll(`.group-${d}`);
    const legend = d3.select(this);
    const status = legend.classed("zchart-legend-hide");
    items.classed("zchart-items-hide", !status);
    legend.classed("zchart-legend-hide", !status);
  });
};

export default drawLegend;
