import ZChart from "./js/index.js";
import barChartConfig from "./barChartConfig.js";
import scatterPlotConfig from "./scatterPlotConfig.js";
import NB_RT_c from "./config/NB_RT.js"
import in_it_c from "./config/indexnodes_indextime.js"
import nq_RT_1m_c from "./config/nq_RT_1m.js"
import nq_RT_50m_4qn_c from "./config/nq_RT_50m_4qn.js"
import nq_RT_50m_8qn_c from "./config/nq_RT_50m_8qn.js"
import nq_RT_1m_vps_c from "./config/nq_RT_1m_vps.js"
import nq_RT_50m_4qn_vps_c from "./config/nq_RT_50m_4qn_vps.js"
import nq_RT_50m_8qn_vps_c from "./config/nq_RT_50m_8qn_vps.js"
import Recall_RT_sift_hnsw_c from "./config/Recall_RT_sift_hnsw.js"
import Recall_RT_sift_ivf_flat_c from "./config/Recall_RT_sift_ivf_flat.js"
import Recall_RT_sift_ivf_sq8_c from "./config/Recall_RT_sift_ivf_sq8.js"
import Recall_RT_glove_ivf_flat_c from "./config/Recall_RT_glove_ivf_flat.js"
import RT_QPS_1m_c from "./config/RT_QPS_1m.js"
import queryNodes_QPS_50m_c from "./config/queryNodes_QPS_50m.js"
import * as d3 from "d3";

window.addEventListener("DOMContentLoaded", async () => {
  // const dataFile = "./data/data.json";
  // const data = await fetch(dataFile).then((res) => res.json());
  // let csvFile = "./data/test.csv";
  // const data1 = await d3.csv(csvFile);

  // NB & RT
  const df_NB_RT = "./data/NB_RT.json";
  const NB_RT = await fetch(df_NB_RT).then((res) => res.json());
  ZChart({
    chartType: "scatter_plot",
    domSelector: "#NB_RT",
    data: NB_RT,
    config: NB_RT_c,
  });

  // Indexnodes & indextime
  csvFile = "./data/indexnodes_indextime_hnsw.csv";
  let in_it = await d3.csv(csvFile);
  // in_it = d3.sort(in_it, (d) => d.indexNodes).reverse();
  in_it = d3.sort(in_it, (d) => d.indexNodes);
  // const df_in_it = "./data/indexnodes_indextime.json";
  // const in_it = await fetch(df_in_it).then((res) => res.json());
  ZChart({
    chartType: "barchart",
    domSelector: "#indexnodes_indextime",
    data: in_it,
    config: in_it_c,
  });

  // nq & RT - 1m
  csvFile = "./data/nq_RT_1m.csv";
  let nq_RT_1m = await d3.csv(csvFile);
  ZChart({
    chartType: "scatter_plot",
    domSelector: "#nq_RT_1m",
    data: nq_RT_1m,
    config: nq_RT_1m_c,
  });

  // nq & RT - 50m - 4qn
  csvFile = "./data/nq_RT_50m_4qn.csv";
  let nq_RT_50m_4qn = await d3.csv(csvFile);
  ZChart({
    chartType: "scatter_plot",
    domSelector: "#nq_RT_50m_4qn",
    data: nq_RT_50m_4qn,
    config: nq_RT_50m_4qn_c,
  });

  // nq & RT - 50m - 8qn
  csvFile = "./data/nq_RT_50m_8qn.csv";
  let nq_RT_50m_8qn = await d3.csv(csvFile);
  ZChart({
    chartType: "scatter_plot",
    domSelector: "#nq_RT_50m_8qn",
    data: nq_RT_50m_8qn,
    config: nq_RT_50m_8qn_c,
  });

  // nq & vps - 1m
  nq_RT_1m.forEach(d =>  d.vps = (+d.vps).toFixed(2) 
  )
  ZChart({
    chartType: "scatter_plot",
    domSelector: "#nq_RT_1m_vps",
    data: nq_RT_1m,
    config: nq_RT_1m_vps_c,
  });

  // nq & vps - 50m - 4qn
  nq_RT_50m_4qn.forEach(d =>  d.vps = (+d.vps).toFixed(2) 
  )
  ZChart({
    chartType: "scatter_plot",
    domSelector: "#nq_RT_50m_4qn_vps",
    data: nq_RT_50m_4qn,
    config: nq_RT_50m_4qn_vps_c,
  });

  // nq & vps - 50m - 8qn
  nq_RT_50m_8qn.forEach(d =>  d.vps = (+d.vps).toFixed(2) 
  )
  ZChart({
    chartType: "scatter_plot",
    domSelector: "#nq_RT_50m_8qn_vps",
    data: nq_RT_50m_8qn,
    config: nq_RT_50m_8qn_vps_c,
  });

  // RT & QPS - 1m
  csvFile = "./data/RT_QPS_1m.csv";
  let RT_QPS_1m = await d3.csv(csvFile);
  ZChart({
    chartType: "scatter_plot",
    domSelector: "#RT_QPS_1m",
    data: RT_QPS_1m,
    config: RT_QPS_1m_c,
  });

  // qn & QPS - 50m
  csvFile = "./data/queryNodes_QPS_50m.csv";
  let queryNodes_QPS_50m = await d3.csv(csvFile);
  ZChart({
    chartType: "scatter_plot",
    domSelector: "#queryNodes_QPS_50m",
    data: queryNodes_QPS_50m,
    config: queryNodes_QPS_50m_c,
  });

  // Recall & RT - sift-hnsw
  csvFile = "./data/Recall_RT_sift_hnsw.csv";
  let Recall_RT_sift_hnsw = await d3.csv(csvFile);
  Recall_RT_sift_hnsw.forEach(d =>  d.RT = (+d.RT).toFixed(2) 
  )
  ZChart({
    chartType: "scatter_plot",
    domSelector: "#Recall_RT_sift_hnsw",
    data: Recall_RT_sift_hnsw,
    config: Recall_RT_sift_hnsw_c,
  });

  // Recall & RT - sift-ivf_flat
  csvFile = "./data/Recall_RT_sift_ivf_flat.csv";
  let Recall_RT_sift_ivf_flat = await d3.csv(csvFile);
  Recall_RT_sift_ivf_flat.forEach(d =>  d.RT = (+d.RT).toFixed(2) 
  )
  ZChart({
    chartType: "scatter_plot",
    domSelector: "#Recall_RT_sift_ivf_flat",
    data: Recall_RT_sift_ivf_flat,
    config: Recall_RT_sift_ivf_flat_c,
  });

  // Recall & RT - sift-ivf_sq8
  csvFile = "./data/Recall_RT_sift_ivf_sq8.csv";
  let Recall_RT_sift_ivf_sq8 = await d3.csv(csvFile);
  Recall_RT_sift_ivf_sq8.forEach(d =>  d.RT = (+d.RT).toFixed(2) 
  )
  ZChart({
    chartType: "scatter_plot",
    domSelector: "#Recall_RT_sift_ivf_sq8",
    data: Recall_RT_sift_ivf_sq8,
    config: Recall_RT_sift_ivf_sq8_c,
  });

  // Recall & RT - sift-ivf_sq8
  csvFile = "./data/Recall_RT_glove_ivf_flat.csv";
  let Recall_RT_glove_ivf_flat = await d3.csv(csvFile);
  Recall_RT_glove_ivf_flat.forEach(d =>  d.RT = (+d.RT).toFixed(2) 
  )
  ZChart({
    chartType: "scatter_plot",
    domSelector: "#Recall_RT_glove_ivf_flat",
    data: Recall_RT_glove_ivf_flat,
    config: Recall_RT_glove_ivf_flat_c,
  });

});
