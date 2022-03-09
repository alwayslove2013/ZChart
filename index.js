// import ZChart from "./js/index.js";
import * as d3 from "d3";
import { drawZChart } from "@zilliz/zui";

window.addEventListener("DOMContentLoaded", async () => {
  // NB & RT
  const data_NB_RT = "./data/NB_RT.json";
  const NB_RT = await fetch(data_NB_RT).then((res) => res.json());
  let configFile = "./config_json/NB_RT_c.json";
  const NB_RT_c = await fetch(configFile).then((res) => res.json());
  drawZChart({
    chartType: "scatter_plot",
    domSelector: "#NB_RT",
    data: NB_RT,
    config: NB_RT_c,
  });

  // Indexnodes & indextime
  csvFile = "./data/indexnodes_indextime_hnsw.csv";
  let in_it = await d3.csv(csvFile);
  configFile = "./config_json/in_it_c.json";
  const in_it_c = await fetch(configFile).then((res) => res.json());
  drawZChart({
    chartType: "barchart",
    domSelector: "#indexnodes_indextime",
    data: in_it,
    config: in_it_c,
  });

  // nq & RT - 1m
  csvFile = "./data/nq_RT_1m.csv";
  let nq_RT_1m = await d3.csv(csvFile);
  configFile = "./config_json/nq_RT_1m_c.json";
  const nq_RT_1m_c = await fetch(configFile).then((res) => res.json());
  drawZChart({
    chartType: "scatter_plot",
    domSelector: "#nq_RT_1m",
    data: nq_RT_1m,
    config: nq_RT_1m_c,
  });

  // nq & RT - 50m - 4qn
  csvFile = "./data/nq_RT_50m_4qn.csv";
  let nq_RT_50m_4qn = await d3.csv(csvFile);
  configFile = "./config_json/nq_RT_50m_4qn_c.json";
  const nq_RT_50m_4qn_c = await fetch(configFile).then((res) => res.json());
  drawZChart({
    chartType: "scatter_plot",
    domSelector: "#nq_RT_50m_4qn",
    data: nq_RT_50m_4qn,
    config: nq_RT_50m_4qn_c,
  });

  // nq & RT - 50m - 8qn
  csvFile = "./data/nq_RT_50m_8qn.csv";
  let nq_RT_50m_8qn = await d3.csv(csvFile);
  configFile = "./config_json/nq_RT_50m_8qn_c.json";
  const nq_RT_50m_8qn_c = await fetch(configFile).then((res) => res.json());
  drawZChart({
    chartType: "scatter_plot",
    domSelector: "#nq_RT_50m_8qn",
    data: nq_RT_50m_8qn,
    config: nq_RT_50m_8qn_c,
  });

  // nq & vps - 1m
  configFile = "./config_json/nq_RT_1m_vps_c.json";
  const nq_RT_1m_vps_c = await fetch(configFile).then((res) => res.json());
  drawZChart({
    chartType: "scatter_plot",
    domSelector: "#nq_RT_1m_vps",
    data: nq_RT_1m,
    config: nq_RT_1m_vps_c,
  });

  // nq & vps - 50m - 4qn
  configFile = "./config_json/nq_RT_50m_4qn_vps_c.json";
  const nq_RT_50m_4qn_vps_c = await fetch(configFile).then((res) => res.json());
  drawZChart({
    chartType: "scatter_plot",
    domSelector: "#nq_RT_50m_4qn_vps",
    data: nq_RT_50m_4qn,
    config: nq_RT_50m_4qn_vps_c,
  });

  // nq & vps - 50m - 8qn
  configFile = "./config_json/nq_RT_50m_8qn_vps_c.json";
  const nq_RT_50m_8qn_vps_c = await fetch(configFile).then((res) => res.json());
  drawZChart({
    chartType: "scatter_plot",
    domSelector: "#nq_RT_50m_8qn_vps",
    data: nq_RT_50m_8qn,
    config: nq_RT_50m_8qn_vps_c,
  });

  // RT & QPS - 1m
  csvFile = "./data/RT_QPS_1m.csv";
  let RT_QPS_1m = await d3.csv(csvFile);
  configFile = "./config_json/RT_QPS_1m_c.json";
  const RT_QPS_1m_c = await fetch(configFile).then((res) => res.json());
  drawZChart({
    chartType: "scatter_plot",
    domSelector: "#RT_QPS_1m",
    data: RT_QPS_1m,
    config: RT_QPS_1m_c,
  });

  // qn & QPS - 50m
  csvFile = "./data/queryNodes_QPS_50m.csv";
  let queryNodes_QPS_50m = await d3.csv(csvFile);
  configFile = "./config_json/queryNodes_QPS_50m_c.json";
  const queryNodes_QPS_50m_c = await fetch(configFile).then((res) =>
    res.json()
  );
  drawZChart({
    chartType: "scatter_plot",
    domSelector: "#queryNodes_QPS_50m",
    data: queryNodes_QPS_50m,
    config: queryNodes_QPS_50m_c,
  });

  // Recall & RT - sift-hnsw
  csvFile = "./data/Recall_RT_sift_hnsw.csv";
  let Recall_RT_sift_hnsw = await d3.csv(csvFile);
  configFile = "./config_json/Recall_RT_sift_hnsw_c.json";
  const Recall_RT_sift_hnsw_c = await fetch(configFile).then((res) =>
    res.json()
  );
  drawZChart({
    chartType: "scatter_plot",
    domSelector: "#Recall_RT_sift_hnsw",
    data: Recall_RT_sift_hnsw,
    config: Recall_RT_sift_hnsw_c,
  });

  // Recall & RT - sift-ivf_flat
  csvFile = "./data/Recall_RT_sift_ivf_flat.csv";
  let Recall_RT_sift_ivf_flat = await d3.csv(csvFile);
  configFile = "./config_json/Recall_RT_sift_ivf_flat_c.json";
  const Recall_RT_sift_ivf_flat_c = await fetch(configFile).then((res) =>
    res.json()
  );
  drawZChart({
    chartType: "scatter_plot",
    domSelector: "#Recall_RT_sift_ivf_flat",
    data: Recall_RT_sift_ivf_flat,
    config: Recall_RT_sift_ivf_flat_c,
  });

  // Recall & RT - sift-ivf_sq8
  csvFile = "./data/Recall_RT_sift_ivf_sq8.csv";
  let Recall_RT_sift_ivf_sq8 = await d3.csv(csvFile);
  configFile = "./config_json/Recall_RT_sift_ivf_sq8_c.json";
  const Recall_RT_sift_ivf_sq8_c = await fetch(configFile).then((res) =>
    res.json()
  );
  drawZChart({
    chartType: "scatter_plot",
    domSelector: "#Recall_RT_sift_ivf_sq8",
    data: Recall_RT_sift_ivf_sq8,
    config: Recall_RT_sift_ivf_sq8_c,
  });

  // Recall & RT - glove_ivf_flat
  csvFile = "./data/Recall_RT_glove_ivf_flat.csv";
  let Recall_RT_glove_ivf_flat = await d3.csv(csvFile);
  configFile = "./config_json/Recall_RT_glove_ivf_flat_c.json";
  const Recall_RT_glove_ivf_flat_c = await fetch(configFile).then((res) =>
    res.json()
  );
  drawZChart({
    chartType: "scatter_plot",
    domSelector: "#Recall_RT_glove_ivf_flat",
    data: Recall_RT_glove_ivf_flat,
    config: Recall_RT_glove_ivf_flat_c,
  });

  // Recall & RT - sift
  csvFile = "./data/Recall_RT_sift.csv";
  let Recall_RT_sift = await d3.csv(csvFile);
  configFile = "./config_json/Recall_RT_sift.json";
  const Recall_RT_sift_c = await fetch(configFile).then((res) => res.json());
  drawZChart({
    chartType: "scatter_plot",
    domSelector: "#Recall_RT_sift",
    data: Recall_RT_sift,
    config: Recall_RT_sift_c,
  });

  // Recall & RT - ivf_flat
  csvFile = "./data/Recall_RT_ivf_flat.csv";
  let Recall_RT_ivf_flat = await d3.csv(csvFile);
  configFile = "./config_json/Recall_RT_ivf_flat.json";
  const Recall_RT_ivf_flat_c = await fetch(configFile).then((res) =>
    res.json()
  );
  drawZChart({
    chartType: "scatter_plot",
    domSelector: "#Recall_RT_ivf_flat",
    data: Recall_RT_ivf_flat,
    config: Recall_RT_ivf_flat_c,
  });
});
