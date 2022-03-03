import * as d3 from "d3";

const linkMap = {
  curve: d3.curveCatmullRom.alpha(0.5),
  linear: d3.curveLinear,
};

const drawCircles = (
  circlesG,
  data,
  config,
  xScale,
  yScale,
  colorScale,
  showTooltip,
  closeTooltip
) => {
  circlesG.selectAll("*").remove();
  const { circle, x, y } = config;
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

  const {
    withLabels = false,
    label: _label = "()=>{}",
    labelFontSize = 14,
  } = circle;
  const label = eval(_label);
  if (withLabels) {
    circleG
      .append("text")
      .text((item) => label(item))
      .attr("font-size", labelFontSize)
      .attr("fill", (item) => circleColorMap(item[circleColor]))
      .attr("text-anchor", "middle")
      .attr("y", -r - 4);
  }

  circleG.style("cursor", "pointer").on("mousemove", showTooltip);
  circleG.on("mouseout", closeTooltip);
};

export default drawCircles;
