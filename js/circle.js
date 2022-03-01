import * as d3 from "d3";

const colors = d3.schemeTableau10;
const drawCircles = (circlesG, data, config, xScale, yScale) => {
  circlesG.selectAll("*").remove();
  const { circle, x, y } = config;
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
    // circlesG
    //   .append("g")
    //   .attr("id", "circles-links")
    //   .selectAll("path")
    //   .data(links)
    //   .join("path")
    //   .attr("d", (d) => `M${d[0]},${d[1]}L${d[2]},${d[3]}`)
    //   .attr("stroke", linkColor)
    //   .attr("strokeWidth", linkWidth)
    //   .attr("fill", "none");
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
      .attr("strokeWidth", linkWidth);
  }

  const circleG = circlesG
    .append("g")
    .attr("id", "circles-nodes")
    .selectAll("g")
    .data(data)
    .join("g")
    .attr("transform", (_, i) => `translate(${positions[i]})`);

  const { color, r = 5, strokeColor = "", strokeWidth = 1 } = circle;
  const isColorMapping = !!(color && data[0][color]);
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
};

export default drawCircles;
