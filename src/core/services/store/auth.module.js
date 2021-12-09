import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const VERIFY_AUTH = "verifyAuth";
export const LOGIN = "login";
export const LOGOUT = "logout";
export const REGISTER = "register";
export const UPDATE_PASSWORD = "updateUser";

export const FETCH_USER_INFO = "fetchUserInfo";
// mutation types
export const PURGE_AUTH = "logOut";
export const SET_AUTH = "setUser";
export const SET_PASSWORD = "setPassword";
export const SET_ERROR = "setError";
export const SET_ENTERPRISE_LIST = "setEnterpriseList";
export const SET_USER_INFO = "setUserInfo";

const state = {
  errors: null,
  user: {},
  token: null,
  enterpriseList: [],
  isAuthenticated: !!JwtService.getToken()
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
  [FETCH_USER_INFO](context) {
    return new Promise((resolve, reject) => {
      ApiService.get("/user/info").then(response => {
        if (response.data && response.data.code == 200) {
          context.commit(SET_USER_INFO, {
            user: response.data.data.user,
            enterpriseList: response.data.data.enterpriseList
          });
          resolve();
        } else {
          reject();
        }
      });
    });
  },

  [LOGIN](context, credentials) {
    return new Promise(async (resolve, reject) => {
      ApiService.post("/admin/login", credentials)
        .then(async response => {
          if (response.data && response.data.code == 200) {
            await context.commit(SET_AUTH, response.data.data.user.token);
            await context.dispatch(FETCH_USER_INFO)
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
        .catch(err => {
          console.log(err);
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
      ApiService.post("/auth/register", credentials)
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
    console.log("yoyoyo")
    if (JwtService.getToken()) {
      ApiService.setHeader();
      context.dispatch(FETCH_USER_INFO);
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


};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, token) {
    state.isAuthenticated = true;
    state.token = token;
    state.errors = {};
    JwtService.saveToken(token);
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
  },
  [SET_USER_INFO](state, payload) {
    state.user = payload.user;
    state.enterpriseList = payload.enterpriseList;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
