import * as d3 from "d3";

export const domainExtent = (domain) => {
  const ext = (domain[1] - domain[0]) * 0.06;
  return domain[0] === 0
    ? [domain[0], domain[1] + ext]
    : [domain[0] - ext, domain[1] + ext];
};

export const scaleMap = {
  linear: d3.scaleLinear,
  log: d3.scaleLog,
  bin: d3.scaleBand,
};

export const colors = d3.schemeTableau10;
