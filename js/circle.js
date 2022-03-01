import * as d3 from "d3";

const colors = d3.schemeTableau10;
const drawCircles = (circlesG, data, config, xScale, yScale) => {
  circlesG.selectAll("*").remove();
  const { circle, x, y, tooltip = false } = config;
  const positions = data.map((item) => [
    xScale(item[x.key]),
    yScale(item[y.key]),
  ]);

  const { withLinks = false, linkWidth = 2, linkColor = "#ccc" } = circle;
  if (withLinks) {
    const links = positions
      .map((d, i) => {
        if (i === 0) return null;
        return [...positions[i - 1], ...positions[i]];
      })
      .filter((a) => a);
    circlesG
      .append("g")
      .attr("id", "circles-links")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("x1", (d) => d[0])
      .attr("y1", (d) => d[1])
      .attr("x2", (d) => d[2])
      .attr("y2", (d) => d[3])
      .attr("stroke", linkColor)
      .attr("stroke-width", linkWidth)
      .attr("stroke-linecap", "round");
  }

  const circleG = circlesG
    .append("g")
    .attr("id", "circles-nodes")
    .selectAll("g")
    .data(data)
    .join("g")
    .attr("transform", (_, i) => `translate(${positions[i]})`);

  const { color, r = 5, strokeColor = "", strokeWidth = 1 } = circle;
  const isColorMapping = !!(color && color in data[0]);
  if (!isColorMapping) {
    circleG
      .append("circle")
      .attr("fill", color || "#666")
      .attr("r", r);
  } else {
    const colorMap = d3
      .scaleOrdinal()
      .domain(data.map((d) => d[circle.color]))
      .range(colors);

    circleG
      .append("circle")
      .attr("fill", (item) => colorMap(item[color]))
      .attr("r", r)
      .attr("stroke", strokeColor)
      .attr("stroke-width", strokeWidth);

    const { withLabels = false, label = () => "", labelFontSize = 14 } = circle;
    if (withLabels) {
      circleG
        .append("text")
        .text((item) => label(item))
        .attr("font-size", labelFontSize)
        .attr("fill", (item) => colorMap(item[color]))
        .attr("text-anchor", "middle")
        .attr("y", -r - 4);
    }
  }

  if (tooltip) {
    const tooltipG = circlesG
      .append("g", "tooltip-g")
      .style("pointer-events", "none")
      .attr("opacity", 0);
    circleG.on("mouseover", (e, d) => {
      tooltipG.attr("opacity", 1);
      tooltipG.attr(
        "transform",
        `translate(${xScale(d[x.key])},${yScale(d[y.key])})`
      );
      const pointer = d3.pointer(e);
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
    circleG.on("mouseout", (e, d) => {
      tooltipG.attr("opacity", 0);
    });
  }
};

export default drawCircles;
