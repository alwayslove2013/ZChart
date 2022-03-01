import * as d3 from "d3";

const drawTitle = (titleG, config) => {
  const { width, height, padding, title } = config;
  titleG
    .append("text")
    .attr("x", width / 2)
    .attr("y", padding[0] / 2 + title.fontSize / 2)
    .attr("text-anchor", "middle")
    .attr("font-size", title.fontSize)
    .attr("font-weight", title.fontWeight)
    .attr("fill", title.fontColor)
    .text(title.text);
};

export default drawTitle;
