import fs from "fs";
import NB_RT_c from "./config/NB_RT.js";
import in_it_c from "./config/indexnodes_indextime.js";
import nq_RT_1m_c from "./config/nq_RT_1m.js";
import nq_RT_50m_4qn_c from "./config/nq_RT_50m_4qn.js";
import nq_RT_50m_8qn_c from "./config/nq_RT_50m_8qn.js";
import nq_RT_1m_vps_c from "./config/nq_RT_1m_vps.js";
import nq_RT_50m_4qn_vps_c from "./config/nq_RT_50m_4qn_vps.js";
import nq_RT_50m_8qn_vps_c from "./config/nq_RT_50m_8qn_vps.js";
import Recall_RT_sift_hnsw_c from "./config/Recall_RT_sift_hnsw.js";
import Recall_RT_sift_ivf_flat_c from "./config/Recall_RT_sift_ivf_flat.js";
import Recall_RT_sift_ivf_sq8_c from "./config/Recall_RT_sift_ivf_sq8.js";
import Recall_RT_glove_ivf_flat_c from "./config/Recall_RT_glove_ivf_flat.js";
import RT_QPS_1m_c from "./config/RT_QPS_1m.js";
import queryNodes_QPS_50m_c from "./config/queryNodes_QPS_50m.js";

const jsonDir = "./config_json/";

fs.writeFile(jsonDir + "NB_RT_c" + ".json", JSON.stringify(NB_RT_c), err => {});
