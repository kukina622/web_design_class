import Vue from "vue";
import Vuex from "vuex";
import senior from "./senior";
import vocational from "./vocational";
import five_year from "./five_year";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedSchoolSystem: "senior",
    senior: senior,
    vocational: vocational,
    five_year: five_year,
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
