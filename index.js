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
    padding: [60, 40, 50, 65],
    title: {
      text: "Recall - Latency",
      fontSize: 24,
      fontWeight: 600,
      fontColor: "#222",
    },
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
      scaleType: "linear",
      tickType: "bottom",
      tickFontSize: 14,
      tickColor: "#666",
      label: "Recall Rate",
      labelFontSize: 16,
      labelWeight: 600,
      labelColor: "#444",
      inset: 8,
      zoom: true,
    },
    y: {
      key: "search_rps",
      scaleType: "linear",
      tickType: "left",
      tickFontSize: 12,
      tickColor: "#666",
      label: "Latency / s",
      labelFontSize: 16,
      labelWeight: 600,
      labelColor: "#444",
      inset: 6,
      zoom: false,
    },
    // groupBy: "",
  };
  zillizBI({ chartType, domSelector, data, config });
});
