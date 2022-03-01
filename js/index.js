import * as d3 from "d3";
import { drawXAxis, drawYAxis } from "./axis.js";
import drawCircles from "./circle.js";

const zillizBI = ({ chartType, domSelector, data, config }) => {
  const svg = d3.select(domSelector).append("svg");
  const { width, height, background, border } = config;
  svg
    .attr("width", width)
    .attr("height", height)
    .style("background", background)
    .style("border", border);

  const xScale = drawXAxis({
    svg,
    data,
    config,
  });
  const yScale = drawYAxis({
    svg,
    data,
    config,
  });

  if (chartType === "scatter_plot") {
    drawCircles({ svg, data, config, xScale, yScale });
  }
};

export default zillizBI;
