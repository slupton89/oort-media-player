import Vue from 'vue';
import Vuex from 'vuex';

// import modules from './modules';
import modules from './modules/index';

Vue.use(Vuex);
console.log(modules);
export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production',
});

// console.log(Playlists.getters.)
