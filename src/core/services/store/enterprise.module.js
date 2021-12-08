import ApiService from "@/core/services/api.service";

// action types
export const FETCH_ENTERPRISE_DETAIL = "fetchEnterpriseDetail";
export const UPDATE_ENTERPRISE_DETAIL = "updateEnterpriseDetail";
export const FETCH_ENTERPRISE_DEPARTMENT = "fetchEnterpriseDepartment";
export const DELETE_ENTERPRISE_DEPARTMENT = "deleteEnterpriseDepartment";
export const ADD_ENTERPRISE_DEPARTMENT = "addEnterpriseDepartment";
export const FETCH_ENTERPRISE_ADMINISTRATOR = "fetchEnterpriseAdministrator";
export const DELETE_ENTERPRISE_ADMINISTRATOR = "deleteEnterpriseAdministrator";
export const ADD_ENTERPRISE_ADMINISTRATOR = "addEnterpriseAdministrator";
export const SUBMIT_ENTERPRISE = "submitEnterprise";
// export const FETCH_ENTERPRISE_LIST = "fetchEnterpriseList";
// mutation types
export const SET_ENTERPRISE_ADMINISTRATOR = "setEnterpriseAdministrator";
export const SET_CURRENT_ENTERPRISE = "setEnterprise";
export const SET_CURRENT_DEPARTMENT = "setCurrentDepartments";
export const SET_ENTERPRISE_DETAIL = "setEnterpriseDetail";
export const SET_ENTERPRISE_POINT = "setEnterpriseDetail";
export const SET_ERROR = "setError";
export const SET_ORDER = "setOrder";
export const SET_ENTERPRISE_LIST = "setEnterpriseList";

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
  },
  departments: [],
  administrators: []
};

const getters = {
  enterprisePoint(state) {
    return state.currentEnterprise;
  },
  currentEnterpriseId(state) {
    return state.currentEnterpriseId;
  },
  currentEnterpriseInfo(state) {
    return state.enterpriseDetail;
  },
  currentEnterpriseDepartments(state) {
    return state.departments;
  },
  currentEnterpriseAdministrators(state) {
    return state.administrators;
  }
};

const actions = {

  [SUBMIT_ENTERPRISE](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.post("/enterprise/add", payload)
        .then(response => {
          // if (response.data && response.code == 200) {
          if (response) {
            context.dispatch('fetchUserInfo')
            // context.dispatch(FETCH_ENTERPRISE_LIST, context.state.user.email);
            resolve();
          } else {
            context.commit(SET_ERROR, response.data.msg);
            reject(response.data.msg);
          }
        })
        .catch(() => {
          context.commit(SET_ERROR, "unknown error");
          reject("unknown error");
        });
    });
  },
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
  [UPDATE_ENTERPRISE_DETAIL](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.post("/enterprise/update", payload)
        .then(response => {
          if (response.data.code == 200) {
            context.dispatch(
              FETCH_ENTERPRISE_DETAIL,
              { email: context.rootState.auth.user.email, enterpriseId: context.rootState.enterprise.currentEnterpriseId }
            );
            resolve(response.data.msg);
          } else {
            reject(response.data.msg);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  [FETCH_ENTERPRISE_DEPARTMENT](context, enterpriseId) {
    return new Promise((resolve, reject) => {
      ApiService.query("/department/menu", {
        params: { enterpriseId }
      })
        .then(response => {
          console.log(10086)
          console.log(response)
          if (response.status == 200) {
            context.commit(
              SET_CURRENT_DEPARTMENT,
              response.data)
            resolve(response.data);
          } else {
            reject(response.data);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  [DELETE_ENTERPRISE_DEPARTMENT](context, { enterpriseId, nodeId }) {
    return new Promise((resolve, reject) => {
      ApiService.post("/department/del", {
        enterpriseId, nodeId
      })
        .then(async response => {
          if (response.status == 200) {
            await context.dispatch(FETCH_ENTERPRISE_DEPARTMENT, enterpriseId)
            resolve(response.data.msg);
          } else {
            reject(response.data);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  [ADD_ENTERPRISE_DEPARTMENT](context, { enterpriseId, name, level = 1, parentNodeId = undefined }) {
    return new Promise((resolve, reject) => {
      ApiService.post("/department/add", {
        enterpriseId, name, level, parentNodeId
      })
        .then(async response => {
          if (response.status == 200) {
            await context.dispatch(FETCH_ENTERPRISE_DEPARTMENT, enterpriseId)
            resolve(response.data.msg);
          } else {
            reject(response.data);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  [FETCH_ENTERPRISE_ADMINISTRATOR](context, enterpriseId) {
    return new Promise((resolve, reject) => {
      ApiService.query("/administrator/list", {
        params: { enterpriseId }
      })
        .then(response => {
          if (response.status == 200) {
            context.commit(
              SET_ENTERPRISE_ADMINISTRATOR,
              response.data)
            resolve(response.data);
          } else {
            reject(response.data);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  [DELETE_ENTERPRISE_ADMINISTRATOR](context, { enterpriseId, nodeId }) {
    return new Promise((resolve, reject) => {
      ApiService.post("/department/del", {
        enterpriseId, nodeId
      })
        .then(async response => {
          if (response.status == 200) {
            await context.dispatch(FETCH_ENTERPRISE_DEPARTMENT, enterpriseId)
            resolve(response.data.msg);
          } else {
            reject(response.data);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  [ADD_ENTERPRISE_ADMINISTRATOR](context, { enterpriseId, name, level = 1, parentNodeId = undefined }) {
    return new Promise((resolve, reject) => {
      ApiService.post("/department/add", {
        enterpriseId, name, level, parentNodeId
      })
        .then(async response => {
          if (response.status == 200) {
            await context.dispatch(SET_ENTERPRISE_ADMINISTRATOR, enterpriseId)
            resolve(response.data);
          } else {
            reject(response.data);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  // [FETCH_ENTERPRISE_LIST](context, email) {
  //   return new Promise((resolve, reject) => {
  //     ApiService.query("/enterprise/list", { params: { email } })
  //       .then(response => {
  //         if (response.data && response.data.code == 200) {
  //           context.commit(
  //             SET_ENTERPRISE_LIST,
  //             response.data.data.enterpriseList
  //           );
  //           console.log(context.state)
  //           resolve(response.data.data.enterpriseList);
  //         } else {
  //           context.commit(SET_ERROR, response.data.msg);
  //           reject(response.data.msg);
  //         }
  //       })
  //       .catch(() => {
  //         context.commit(SET_ERROR, "unknown error");
  //         reject("unknown error");
  //       });
  //   });
  // }

};

const mutations = {
  [SET_CURRENT_ENTERPRISE](state, currentEnterpriseId) {
    state.currentEnterpriseId = currentEnterpriseId;
  },
  [SET_CURRENT_DEPARTMENT](state, department) {
    state.departments = department
  },
  [SET_ENTERPRISE_DETAIL](state, enterpriseDetail) {
    state.enterpriseDetail = enterpriseDetail;
  },
  [SET_ENTERPRISE_ADMINISTRATOR](state, administrators) {
    state.administrators = administrators

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
