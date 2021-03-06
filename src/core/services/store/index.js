import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth.module";
import enterprise from "./enterprise.module";
import employee from "./employee.module";

import htmlClass from "./htmlclass.module";
import config from "./config.module";
import breadcrumbs from "./breadcrumbs.module";
import profile from "./profile.module";
import project from "./project.module";
import point from "./point.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    htmlClass,
    config,
    breadcrumbs,
    profile,
    enterprise,
    employee,
    project,
    point
  }
});
