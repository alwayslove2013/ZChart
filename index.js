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
    tooltip: {
      content: ["group_id", "acc", "search_rps", "ef"],
      fontSize: 16,
      fontWeight: 500,
      fontColor: "#43a2ca",
    },
    title: {
      text: "Recall - Latency",
      fontSize: 24,
      fontWeight: 600,
      fontColor: "#222",
    },
    circle: {
      r: 5,
      strokeColor: '#fff',
      strokeWidth: 1,
      isCircleColorMapping: true,
      circleColor: "ef",
      withLabels: true,
      label: (item) => `ef=${item.ef}`,
      labelFontSize: 14,
      withLinks: true,
      isLinkColorMapping: true,
      linkType: "curve",
      linkWidth: 4,
      linkColor: "test_no",
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
      tickFontSize: 14,
      tickColor: "#666",
      label: "Latency / s",
      labelFontSize: 16,
      labelWeight: 600,
      labelColor: "#444",
      inset: 6,
      zoom: false,
    },
    group: {
      hasGroup: true,
      key: "test_no",
      sameXScale: true,
      sameYScale: true,
    },
  };
  zillizBI({ chartType, domSelector, data, config });
});
