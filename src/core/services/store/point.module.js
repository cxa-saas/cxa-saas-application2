import ApiService from "@/core/services/api.service";

// action types
export const FETCH_POINT_BALANCE = "fetchPointBalance";
export const FETCH_POINT_LIST = "fetchPointOrderList";
export const SUBMIT_POINT_ORDER = "submitPointOrder";
// mutation types
export const SET_POINT_ORDER_LIST = "setPointOrderList";

const state = {
  errors: {},
  pointOrderList: []
};

const getters = {
  pointOrderList(state) {
    return state.pointOrderList;
  }
};

const actions = {
  [FETCH_POINT_LIST](context) {
    return new Promise((resolve, reject) => {
      ApiService.query("/point/getOrders", {
        params: {
          enterpriseId: context.rootState.enterprise.currentEnterpriseId
        }
      })
        .then(response => {
          if (response.data.code == 200) {
            context.commit(SET_POINT_ORDER_LIST, response.data.data);
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

  [SUBMIT_POINT_ORDER](context, formData) {
    return new Promise((resolve, reject) => {
      ApiService.post("/point/createOrder", formData)
        .then(response => {
          if (response.data.code == 200) {
            resolve(response.data.msg);
          } else {
            reject(response.data.msg);
          }
        })
        .catch(({ response }) => {
          console.log(response);
        });
    });
  }
};

const mutations = {
  [SET_POINT_ORDER_LIST](state, payload) {
    state.pointOrderList = payload;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
