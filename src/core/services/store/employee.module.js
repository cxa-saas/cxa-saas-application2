import ApiService from "@/core/services/api.service";

// action types
export const SUBMIT_EMPLOYEE_LIST = "submitEmployeeList";
export const FETCH_EMPLOYEE_LIST = "fetchEmployeeList";
export const UPDATE_EMPLOYEE = "UpdateEmployee";

// mutation types
export const SET_EMPLOYEE_LIST = "setEmployeeList";
export const SET_ERROR = "setError";

const state = {
  errors: {},
  employees: []
};

const getters = {
  employeeList(state) {
    return state.employees;
  }
};

const actions = {
  [FETCH_EMPLOYEE_LIST](context, payload) {
    console.log(444)
     console.log(payload)
    return new Promise((resolve, reject) => {
      ApiService.query("/member/list", {
        params: { enterpriseId: payload.enterpriseId }
      })
        .then(response => {
          if (response.data.code == 200) {
            context.commit(SET_EMPLOYEE_LIST, response.data.data.userList);
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
  [SUBMIT_EMPLOYEE_LIST](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.post("/member/add", {
        user_list: payload.employeeList,
        enterpriseId: context.rootState.enterprise.currentEnterpriseId
      })
        .then(response => {
          if (response.data.code == 200) {
            context.dispatch(FETCH_EMPLOYEE_LIST, {
              enterpriseId: context.rootState.enterprise.currentEnterpriseId
            });
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
  },
  [UPDATE_EMPLOYEE](context, formData) {
    return new Promise((resolve, reject) => {
      ApiService.post("/employee/update", formData)
        .then(response => {
          if (response.data.code == 200) {
            context.dispatch(FETCH_EMPLOYEE_LIST, {
              enterpriseId: formData.enterpriseId
            });
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
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_EMPLOYEE_LIST](state, employees) {
    console.log(employees);
    state.employees = employees;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
