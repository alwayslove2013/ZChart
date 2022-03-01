import * as d3 from "d3";

const linkMap = {
  curve: d3.curveCatmullRom.alpha(0.5),
  linear: d3.curveLinear,
};

const drawCircles = (circlesG, data, config, xScale, yScale, colorScale) => {
  circlesG.selectAll("*").remove();
  const { circle, x, y, tooltip = false } = config;
  const positions = data.map((item) => [
    xScale(item[x.key]),
    yScale(item[y.key]),
  ]);

  const {
    withLinks = false,
    linkWidth = 2,
    linkColor = "#ccc",
    linkType = "curve",
    isLinkColorMapping = false,
  } = circle;
  if (withLinks) {
    const link = d3
      .line()
      .curve(linkMap[linkType])
      .x((d) => d[0])
      .y((d) => d[1]);
    circlesG
      .append("g")
      .attr("id", "circles-links")
      .append("path")
      .attr("fill", "none")
      .attr(
        "stroke",
        isLinkColorMapping ? colorScale(data[0][linkColor]) : linkColor
      )
      .attr("stroke-width", linkWidth)
      .attr("d", link(positions));
  }

  const circleG = circlesG
    .append("g")
    .attr("id", "circles-nodes")
    .selectAll("g")
    .data(data)
    .join("g")
    .attr("transform", (_, i) => `translate(${positions[i]})`);

  const {
    circleColor = "#e6550d",
    r = 5,
    strokeColor = "",
    strokeWidth = 1,
    isCircleColorMapping = false,
  } = circle;
  const circleColorMap = isCircleColorMapping ? colorScale : () => circleColor;
  circleG
    .append("circle")
    .attr("fill", (item) => circleColorMap(item[circleColor]))
    .attr("r", r)
    .attr("stroke", strokeColor)
    .attr("stroke-width", strokeWidth);

  const { withLabels = false, label = () => "", labelFontSize = 14 } = circle;
  if (withLabels) {
    circleG
      .append("text")
      .text((item) => label(item))
      .attr("font-size", labelFontSize)
      .attr("fill", (item) => circleColorMap(item[circleColor]))
      .attr("text-anchor", "middle")
      .attr("y", -r - 4);
  }

  if (tooltip.hasTooltip) {
    const tooltipG = circlesG
      .append("g", "tooltip-g")
      .style("pointer-events", "none")
      .attr("opacity", 0);
    circleG.style("cursor", "pointer").on("mouseover", (e, d) => {
      tooltipG.attr("opacity", 1);
      tooltipG.attr(
        "transform",
        `translate(${xScale(d[x.key])},${yScale(d[y.key])})`
      );
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
