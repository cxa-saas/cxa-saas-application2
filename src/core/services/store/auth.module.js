import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const VERIFY_AUTH = "verifyAuth";
export const LOGIN = "login";
export const LOGOUT = "logout";
export const REGISTER = "register";
export const UPDATE_PASSWORD = "updateUser";
export const SUBMIT_ENTERPRISE = "submitEnterprise";
export const FETCH_ENTERPRISE_LIST = "fetchEnterpriseList";
// mutation types
export const PURGE_AUTH = "logOut";
export const SET_AUTH = "setUser";
export const SET_PASSWORD = "setPassword";
export const SET_ERROR = "setError";
export const SET_ENTERPRISE_LIST = "setEnterpriseList";
const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken(),
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  enterpriseList(state) {
    return state.enterpriseList;
  }
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("/admin/login", credentials)
        .then(response => {
          if (response.data && response.data.code == 200) {
            context.commit(SET_AUTH, response.data.data.user);
            context.commit(
              SET_ENTERPRISE_LIST,
              response.data.data.enterpriseList
            );
            if (context.state.enterpriseList.length > 0) {
              resolve(`dashboard`);
            } else {
              resolve(`customer-get-start`);
            }
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
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [REGISTER](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("/administrator/add", credentials)
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [VERIFY_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.post("verify")
        .then(response => {
          context.commit(SET_AUTH, response.data.data.user.data);
          context.commit(
            SET_ENTERPRISE_LIST,
            response.data.data.enterpriseList
          );
        })
        .catch(error => {
          context.commit(SET_ERROR, error);
        });
    } else {
      context.commit(PURGE_AUTH);
    }
  },
  [UPDATE_PASSWORD](context, payload) {
    const password = payload;

    return ApiService.put("password", password).then(({ data }) => {
      context.commit(SET_PASSWORD, data);
      return data;
    });
  },
  [SUBMIT_ENTERPRISE](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.post("/enterprise/add", payload)
        .then(response => {
          // if (response.data && response.code == 200) {
          if (response) {
            context.dispatch(FETCH_ENTERPRISE_LIST, context.state.user.email);
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
  [FETCH_ENTERPRISE_LIST](context, email) {
    return new Promise((resolve, reject) => {
      ApiService.query("/enterprise/list", { params: { email } })
        .then(response => {
          if (response.data && response.data.code == 200) {
            context.commit(
              SET_ENTERPRISE_LIST,
              response.data.data.enterpriseList
            );
            resolve(response.data.data.enterpriseList);
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
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    JwtService.saveToken(state.user.token);
  },
  [SET_PASSWORD](state, password) {
    state.user.password = password;
  },
  [SET_ENTERPRISE_LIST](state, enterpriseList) {
    state.enterpriseList = enterpriseList;
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
