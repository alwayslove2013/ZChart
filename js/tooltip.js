import * as d3 from "d3";
const drawTooltip = ({ tooltipG, config }) => {
  const { height, tooltip } = config;
  let showTooltip = () => {};
  let closeTooltip = () => {};
  if (tooltip.hasTooltip) {
    showTooltip = (e, d) => {
      tooltipG.attr("opacity", 1);
      const { layerX: __x, layerY: __y } = e;
      // console.log(e);
      // console.log(d3.mouse(e));

      const path = tooltipG
        .selectAll("path")
        .data([,])
        .join("path")
        .attr("fill", "#ffffff40")
        .attr("stroke", "#666")
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

      let tooltipX = __x;
      let tooltipY = __y;
      if (tooltipY > height * 0.65) {
        tooltipY -= h + 30;
      } else {
        tooltipY += 10;
      }
      tooltipG.attr("transform", `translate(${tooltipX},${tooltipY})`);
      text.attr("transform", `translate(${-w / 2},${15 - _y})`);
      path.attr(
        "d",
        `M${-w / 2 - 10},5 H${w / 2 + 10} v${h + 20} h-${w + 20}z`
        // `M${-w / 2 - 10},5 H-5 l5,-5 l5,5 H${w / 2 + 10} v${h + 20} h-${w + 20}z`
      );
    };
    closeTooltip = () => {
      tooltipG.attr("opacity", 0);
    };
  }
  return { showTooltip, closeTooltip };
};

export default drawTooltip;
