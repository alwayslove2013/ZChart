const barChartConfig = {
  width: 1000,
  height: 400,
  // background: "rgba(0,0,0,0.1)",
  border: "1px solid #999",
  padding: [60, 140, 50, 90],
  dataProcessing: {
    needSort: true,
    sort: 'indexNodes',
    sortReverse: false,
  },
  tooltip: {
    hasTooltip: true,
    content: ["index_time", "indexNodes", "index_type"],
    fontSize: 16,
    fontWeight: 500,
    fontColor: "#666",
  },
  title: {
    text: "indexNodes & indextime - 50m",
    fontSize: 24,
    fontWeight: 600,
    fontColor: "#222",
  },
  x: {
    key: "indexNodes",
    scaleType: "bin",
    tickType: "bottom",
    tickFontSize: 14,
    tickColor: "#666",
    label: "indexNodes",
    labelFontSize: 16,
    labelWeight: 600,
    labelColor: "#444",
    inset: 8,
    zoom: true,
  },
  y: {
    key: "index_time",
    scaleType: "linear",
    tickType: "left",
    tickFontSize: 14,
    tickColor: "#666",
    label: "index time / s",
    labelFontSize: 16,
    labelWeight: 600,
    labelColor: "#444",
    inset: 6,
    zoom: false,
    fromZero: true,
  },
  groupBy: {
    isGroupBy: true,
    key: "index_type",
    sameXScale: false,
    sameYScale: true,
  },
  bar: {
    isColorMapping: true,
    color: "index_type",
    withLabels: true,
    label: "(item) => `${item.index_time}`",
    labelFontSize: 14,
  },
};

export default barChartConfig;
