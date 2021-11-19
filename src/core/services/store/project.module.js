import ApiService from "@/core/services/api.service";

// action types
export const FETCH_BENEFIT_TEMPLATE = "fetchBenefitTemplate";
export const CREATE_BENEFIT = "createBenefit";
export const FETCH_BENEFIT_LIST = "fetchBenefitList";
// mutation types
export const SET_BENEFIT_TEMPLATE = "setBenefitTemplate";
export const SET_BENEFIT_LIST = "setBenefitList";

const state = {
  errors: {},
  benefitTemplate: [],
  benefitList: [],
};

const getters = {};

const actions = {
  [FETCH_BENEFIT_TEMPLATE](context, enterpriseId) {
    return new Promise((resolve, reject) => {
      ApiService.query("/benefits/template", {
        enterpriseId
      })
        .then(response => {
          if (response.data.code == 200) {
            context.commit(SET_BENEFIT_LIST, response.data.data);
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
  [CREATE_BENEFIT](context, enterpriseId) {
    return new Promise((resolve, reject) => {
      ApiService.query("/benefits/template", {
        enterpriseId
      })
        .then(response => {
          if (response.data.code == 200) {
            context.commit(SET_BENEFIT_LIST, response.data.data);
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
  [FETCH_BENEFIT_TEMPLATE](context, enterpriseId) {
    return new Promise((resolve, reject) => {
      ApiService.query("/benefits/template", {
        enterpriseId
      })
        .then(response => {
          if (response.data.code == 200) {
            context.commit(SET_BENEFIT_LIST, response.data.data);
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
};

const mutations = {
  [SET_BENEFIT_TEMPLATE](state, benefitTemplate) {
    state.benefitTemplate = benefitTemplate;
  },
  [SET_BENEFIT_LIST](state, benefitList) {
    state.benefitList = benefitList;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
