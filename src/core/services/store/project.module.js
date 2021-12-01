import ApiService from "@/core/services/api.service";

// action types
export const FETCH_INSURANCE_TEMPLATE = "fetchInsuranceTemplate";
export const CREATE_INSURANCE = "createInsurance";
export const FETCH_INSURANCE_LIST = "fetchInsuranceList";

export const FETCH_INSPECTION_TEMPLATE = "fetchInspectionTemplate";
export const CREATE_INSPECTION = "createInspection";
export const FETCH_INSPECTION_LIST = "fetchInspectionList";
export const FETCH_INSURANCE_DETAIL = "fetchInsuranceDetail";

// mutation types
export const SET_INSURANCE_TEMPLATE = "setInsuranceTemplate";
export const SET_INSURANCE_LIST = "setInsuranceList";

export const SET_INSPECTION_TEMPLATE = "setInspectionTemplate";
export const SET_INSPECTION_LIST = "setInspectionList";

const state = {
  errors: {},
  insuranceTemplate: {},
  insuranceList: [],
  inspectionTemplate: {},
  inspectionList: []
};

const getters = {
  insuranceList(state) {
    return state.insuranceList;
  },
  insuranceTemplatePlan(state) {
    return state.insuranceTemplate;
  },

  inspectionTemplatePlan(state) {
    return state.inspectionTemplate;
  }
};

const actions = {
  [FETCH_INSURANCE_TEMPLATE](context, enterpriseId) {
    return new Promise((resolve, reject) => {
      ApiService.query("/benefits/template", {
        enterpriseId
      })
        .then(response => {
          if (response.data.code == 200) {
            context.commit(SET_INSURANCE_TEMPLATE, response.data.data);
            resolve(response.data.data);
          } else {
            reject(response.data.msg);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  [CREATE_INSURANCE](context, playload) {
    return new Promise((resolve, reject) => {
      ApiService.post("/benefits/create", playload)
        .then(response => {
          if (response.data.code == 200) {
            resolve(response.data.data);
          } else {
            reject(response.data.msg);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  [FETCH_INSURANCE_LIST](context, enterpriseId) {
    return new Promise((resolve, reject) => {
      ApiService.query("/benefits/list", {
        params: { enterpriseId }
      })
        .then(response => {
          if (response.data.code == 200) {
            context.commit(SET_INSURANCE_LIST, response.data.data.records);
            resolve(response.data.data.records);
          } else {
            reject(response.data.msg);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  [FETCH_INSPECTION_TEMPLATE](context, enterpriseId) {
    return new Promise((resolve, reject) => {
      ApiService.query("/insurance/template", {
        enterpriseId
      })
        .then(response => {
          if (response.data.code == 200) {
            context.commit(SET_INSPECTION_TEMPLATE, response.data.data);
            resolve(response.data.data);
          } else {
            reject(response.data.msg);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  [CREATE_INSPECTION](context, playload) {
    return new Promise((resolve, reject) => {
      ApiService.post("/insurance/create", playload)
        .then(response => {
          if (response.data.code == 200) {
            resolve(response.data.data);
          } else {
            reject(response.data.msg);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  [FETCH_INSPECTION_LIST](context, enterpriseId) {
    return new Promise((resolve, reject) => {
      ApiService.query("/insurance/list", {
        enterpriseId
      })
        .then(response => {
          if (response.data.code == 200) {
            context.commit(SET_INSPECTION_LIST, response.data.data);
            resolve(response.data.data);
          } else {
            reject(response.data.msg);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  [FETCH_INSURANCE_DETAIL](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.query("/benefits/detail", {
        params: {
          enterpriseId: payload.enterpriseId,
          projectBid: payload.projectBid
        }
      })
        .then(response => {
          if (response.data.code == 200) {
            resolve(response.data.data);
          } else {
            reject(response.data.msg);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

const mutations = {
  [SET_INSURANCE_TEMPLATE](state, insuranceTemplate) {
    state.insuranceTemplate = insuranceTemplate;
  },
  [SET_INSURANCE_LIST](state, insuranceList) {
    state.insuranceList = insuranceList;
  },
  [SET_INSPECTION_TEMPLATE](state, inspectionTemplate) {
    state.inspectionTemplate = inspectionTemplate;
  },
  [SET_INSPECTION_LIST](state, inspectionList) {
    state.inspectionList = inspectionList;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
