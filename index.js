import zillizBI from "./js/index.js";

window.addEventListener("DOMContentLoaded", async () => {
  const domSelector = "#container";
  // const dom = document.querySelector(domSelector);
  const dataFile = "./data/scatterPlot.json";
  const chartType = "scatter_plot";
  const data = await fetch(dataFile).then((res) => res.json());
  const config = {
    width: 1000,
    height: 620,
    // background: "rgba(0,0,0,0.1)",
    border: "1px solid #999",
    padding: [100, 40, 50, 65],
    circle: {
      r: 5,
      // strokeColor: '#666',
      // strokeWidth: 1,
      color: "ef",
      withLabels: true,
      label: (item) => `ef=${item.ef}`,
      labelFontSize: 14,
      withLinks: true,
      linkWidth: 25,
      linkColor: "#ccc",
    },
    x: {
      key: "acc",
      scalType: "linear",
      tickType: "bottom",
      tickFontSize: 14,
      tickColor: "#666",
      label: "Recall Rate",
      labelFontSize: 16,
      labelWeight: 600,
      labelColor: "#444",
    },
    y: {
      key: "search_rps",
      scalType: "linear",
      tickType: "left",
      tickFontSize: 14,
      tickColor: "#666",
      label: "Latency / s",
      labelFontSize: 16,
      labelWeight: 600,
      labelColor: "#444",
    },
    // groupBy: "",
  };
  zillizBI({ chartType, domSelector, data, config });
});
