import ZChart from "./js/index.js";
import barChartConfig from "./barChartConfig.js";
import scatterPlotConfig from "./scatterPlotConfig.js";

window.addEventListener("DOMContentLoaded", async () => {
  const domSelector = "#container";
  // const dom = document.querySelector(domSelector);
  const dataFile = "./data/data.json";
  const data = await fetch(dataFile).then((res) => res.json());

  ZChart({
    chartType: "scatter_plot",
    domSelector: "#container-1",
    data,
    config: scatterPlotConfig,
  });
  ZChart({
    chartType: "barchart",
    domSelector: "#container-2",
    data,
    config: barChartConfig,
  });
});
