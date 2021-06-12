import Vue from "vue";
import Vuex from "vuex";
import senior from "./senior";
import vocational from "./vocational";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedSchoolSystem: "senior",
    senior: senior,
    vocational: vocational,
  },
  mutations: {
    changeSchoolSystem(state, newSchoolSystem) {
      state.selectedSchoolSystem = newSchoolSystem;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getterSchoolSystemData(state) {
      return state[state.selectedSchoolSystem];
    },
  },
});
