import * as d3 from "d3";
const tickMap = {
  bottom: d3.axisBottom,
  top: d3.axisTop,
  left: d3.axisLeft,
  right: d3.axisRight,
};

export const xAxis = (g, scale, config) => {
  g.selectAll("*").remove();
  const { width, height, padding, x } = config;
  g.attr(
    "transform",
    x.tickType === "bottom"
      ? `translate(0,${height - padding[2]})`
      : `translate(0,${padding[0]})`
  )
    .call(tickMap[x.tickType](scale))
    .call((g) => g.select(".domain").remove())
    .call((g) =>
      g
        .selectAll(".tick text")
        .attr("font-size", x.tickFontSize)
        .attr("fill", x.tickColor)
    )
    .call((g) =>
      g
        .append("text")
        .attr("x", (width - padding[1] - padding[3]) / 2 + padding[3])
        // .attr("x", width - 12)
        .attr("y", x.tickType === "bottom" ? padding[2] - 8 : -24)
        .attr("fill", x.labelColor)
        .attr("text-anchor", "middle")
        .style("font-size", x.labelFontSize)
        .style("font-weight", x.labelWeight)
        .text(x.label)
    );
  if (x.scaleType === "bin") {
    g.call((g) => g.selectAll(".tick line").remove());
  } else {
    g.call((g) =>
      g
        .selectAll(".tick line")
        .attr("y1", 0)
        .attr(
          "y2",
          (x.tickType === "bottom" ? 1 : -1) *
            (padding[0] + padding[2] - height)
        )
        .attr("stroke-opacity", 0.1)
    );
  }
};

export const yAxis = (g, scale, config) => {
  g.selectAll("*").remove();
  const { width, height, padding, y } = config;
  g.attr(
    "transform",
    y.tickType === "left"
      ? `translate(${padding[3]},0)`
      : `translate(${width - padding[1]},0)`
  )
    .call(tickMap[y.tickType](scale))
    .call((g) => g.select(".domain").remove())
    .call((g) =>
      g
        .selectAll(".tick line")
        .attr("x1", 0)
        .attr(
          "x2",
          (y.tickType === "left" ? 1 : -1) * (width - padding[1] - padding[3])
        )
        .attr("stroke-opacity", 0.1)
    )
    .call((g) =>
      g
        .selectAll(".tick text")
        .attr("font-size", y.tickFontSize)
        .attr("fill", y.tickColor)
    )
    .call((g) => {
      const labelX = y.tickType === "left" ? -padding[3] + 20 : padding[1] - 20;
      const labelY = (height - padding[0] - padding[2]) / 2 + padding[0];
      const rotate = y.tickType === "left" ? 270 : 90;
      g.append("text")
        .attr("x", 0)
        .attr("y", 0)
        .attr("transform", `translate(${labelX},${labelY}) rotate(${rotate})`)
        // .style("transform-origin", "center")
        .attr("fill", y.labelColor)
        .attr("text-anchor", "middle")
        .style("font-size", y.labelFontSize)
        .style("font-weight", y.labelWeight)
        .text(y.label);
    });
};

const scaleMap = {
  linear: d3.scaleLinear,
  log: d3.scaleLog,
};

export const drawXAxis = ({ svg, data, config }) => {
  const { width, height, padding, inset = 8 } = config;

  let {
    tickType = "bottom",
    scaleType = "linear",
    key,
    tickFontSize = 12,
    tickColor = "#555",
    label = "",
    labelColor = "#333",
    labelFontSize = 14,
    labelWeight = 600,
  } = config.x;

  const domain = d3.extent(data, (d) => d[key]);
  const domainRange = domain[1] - domain[0];
  domain[0] -= domainRange * 0.05;
  domain[1] += domainRange * 0.05;

  const xScale = scaleMap[scaleType]()
    .domain(domain)
    .range([padding[3] + inset, width - padding[1] - inset]);

  const xAxis = tickMap[tickType](xScale);

  const xAxisG = svg
    .append("g")
    .attr("id", "x-axis-g")
    .attr(
      "transform",
      tickType === "bottom"
        ? `translate(0,${height - padding[2]})`
        : `translate(0,${padding[0]})`
    );
  xAxis(xAxisG);
  xAxisG.select(".domain").remove();
  xAxisG
    .selectAll(".tick line")
    // .clone()
    .attr("y1", 0)
    .attr(
      "y2",
      (tickType === "bottom" ? 1 : -1) * (padding[0] + padding[2] - height)
    )
    .attr("stroke-opacity", 0.1);
  xAxisG
    .selectAll(".tick text")
    .attr("font-size", tickFontSize)
    .attr("fill", tickColor);
  xAxisG
    .append("text")
    .attr("x", (width - padding[1] - padding[3]) / 2 + padding[3])
    // .attr("x", width - 12)
    .attr("y", tickType === "bottom" ? padding[2] - 8 : -24)
    .attr("fill", labelColor)
    .attr("text-anchor", "middle")
    .style("font-size", labelFontSize)
    .style("font-weight", labelWeight)
    .text(label);

  return xScale;
};

export const drawYAxis = ({ svg, data, config }) => {
  const { width, height, padding, inset = 6 } = config;

  let {
    tickType = "left",
    scaleType = "linear",
    key,
    tickFontSize = 12,
    tickColor = "#555",
    label = "",
    labelColor = "#333",
    labelFontSize = 14,
    labelWeight = 600,
  } = config.y;

  const domain = d3.extent(data, (d) => d[key]);
  const domainRange = domain[1] - domain[0];
  domain[0] -= domainRange * 0.05;
  domain[1] += domainRange * 0.05;

  const yScale = scaleMap[scaleType]()
    .domain(domain)
    .range([height - padding[2] - inset, padding[0] + inset]);

  const yAxis = tickMap[tickType](yScale);

  const yAxisG = svg
    .append("g")
    .attr("id", "y-axis-g")
    .attr(
      "transform",
      tickType === "left"
        ? `translate(${padding[3]},0)`
        : `translate(${width - padding[1]},0)`
    );
  yAxis(yAxisG);
  yAxisG.select(".domain").remove();
  yAxisG
    .selectAll(".tick text")
    .attr("font-size", tickFontSize)
    .attr("fill", tickColor);
  yAxisG
    .selectAll(".tick line")
    // .clone()
    .attr("x1", 0)
    .attr(
      "x2",
      (tickType === "left" ? 1 : -1) * (width - padding[1] - padding[3])
    )
    .attr("stroke-opacity", 0.1);

  yAxisG
    .append("text")
    .attr("x", 0)
    .attr("y", 0)
    .attr("transform", `translate(${labelX},${labelY}) rotate(${rotate})`)
    // .style("transform-origin", "center")
    .attr("fill", labelColor)
    .attr("text-anchor", "middle")
    .style("font-size", labelFontSize)
    .style("font-weight", labelWeight)
    .text(label);

  return yScale;
};
