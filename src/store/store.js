import Vue from "vue";
import Vuex from "vuex";
import settings from "./modules/settings.module";
import user from "./modules/user.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    settings,
    user
  }
});
