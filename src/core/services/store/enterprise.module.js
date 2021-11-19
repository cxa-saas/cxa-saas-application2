import ApiService from "@/core/services/api.service";

// action types
export const POINT_RECHARGE = "rechargePoint";
export const FETCH_ENTERPRISE_DETAIL = "fetchEnterpriseDetail";
export const UPDATE_ENTERPRISE_DETAIL = "updateEnterpriseDetail";

// mutation types
export const SET_CURRENT_ENTERPRISE = "setEnterprise";
export const SET_ENTERPRISE_DETAIL = "setEnterpriseDetail";
export const SET_ENTERPRISE_POINT = "setEnterpriseDetail";
export const SET_ERROR = "setError";
export const SET_ORDER = "setOrder";

const state = {
  errors: {},
  currentEnterpriseId: 19,
  orderId: "",
  enterpriseDetail: {
    currentEnterPhoto: "media/logos/logo-cxa-1.png",
    enterprise_size_type: 0,
    enterprise_status: 0,
    introduction: "",
    point: 0,
    mobile: "",
    email: "",
    address: "",
    username: "张三",
    name: "",
    enterpriseId: "",
    freeze_points: 0,
    points_balance: 0
  }
};

const getters = {
  enterprisePoint(state) {
    return state.currentEnterprise;
  },
  currentEnterpriseInfo(state) {
    return state.enterpriseDetail;
  }
};

const actions = {
  [FETCH_ENTERPRISE_DETAIL](context, { email, enterpriseId }) {
    return new Promise((resolve, reject) => {
      ApiService.query("/enterprise/detail", {
        params: { email, enterpriseId }
      })
        .then(response => {
          if (response.data.code == 200) {
            context.commit(
              SET_ENTERPRISE_DETAIL,
              response.data.data.enterprise
            );
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
  [POINT_RECHARGE](context, formData) {
    return new Promise((resolve, reject) => {
      ApiService.post("/point/createOrder", formData)
        .then(response => {
          if (response.data.code == 200) {
            context.commit(SET_ORDER, response.data.data.orderId);
            resolve(response.data.msg);
          } else {
            context.commit(SET_ERROR, response.data.msg);
            reject(response.data.msg);
          }
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.msg);
        });
    });
  }
};

const mutations = {
  [SET_CURRENT_ENTERPRISE](state, error) {
    state.errors = error;
  },
  [SET_ENTERPRISE_DETAIL](state, enterpriseDetail) {
    state.enterpriseDetail = enterpriseDetail;
  },
  [SET_ORDER](state, orderId) {
    state.orderId = orderId;
  },
  [SET_ERROR](state, error) {
    state.errors = error;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
