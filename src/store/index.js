import Vue from 'vue';
import Vuex from 'vuex';
import demo from '@/modules/demo/store';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    demo,
  },
});
