// import ApiService from "@/core/services/api.service";
// import JwtService from "@/core/services/jwt.service";

// // action types
// export const FETCH_ENTERPRISE_LIST= "fetchEnterpriseList";
// export const SUBMIT_ENTERPRISE = "submitEnterprise";

// // mutation types
// export const SET_CURRENT_ENTERPRISE = "setEnterprise";
// export const SET_ENTERPRISE_LIST = "setEnterpriseList";

// const state = {
//   currentEnterprise: null,
//   enterpriseList: [],
// };

// const getters = {
//   currentEnterprise(state) {
//     return state.currentEnterprise;
//   },
//   enterpriseList(state){
//     return state.enterpriseList
//   }

// };

// const actions = {
//   [SUN](context, credentials) {
//     return new Promise(resolve => {
//       ApiService.post("/login", credentials)
//         .then(({ data }) => {
//           // console.log("Here what post returns", data);
//           console.log(data)
//           context.commit(SET_AUTH, data);
//           resolve(data);
//         })
//         .catch(({ response }) => {
//           context.commit(SET_ERROR, response.data.errors);
//         });
//     });
//   },
//   [LOGOUT](context) {
//     context.commit(PURGE_AUTH);
//   },

// };

// const mutations = {
//   [SET_ERROR](state, error) {
//     state.errors = error;
//   },
//   [SET_AUTH](state, user) {
//     state.isAuthenticated = true;
//     state.user = user;
//     state.errors = {};
//     JwtService.saveToken(state.user.token);
//   },
//   [SET_PASSWORD](state, password) {
//     state.user.password = password;
//   },
//   [PURGE_AUTH](state) {
//     state.isAuthenticated = false;
//     state.user = {};
//     state.errors = {};
//     JwtService.destroyToken();
//   }
// };

// export default {
//   state,
//   actions,
//   mutations,
//   getters
// };
