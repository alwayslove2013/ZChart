import ZChart from "./js/index.js";
import barChartConfig from "./barChartConfig.js";
import scatterPlotConfig from "./scatterPlotConfig.js";
import * as d3 from "d3";

window.addEventListener("DOMContentLoaded", async () => {
  const dataFile = "./data/data.json";
  const data = await fetch(dataFile).then((res) => res.json());
  const csvFile = "./data/test.csv";
  const data1 = await d3.csv(csvFile);
  console.log(data1);

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
