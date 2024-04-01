import Vue from "vue"
import Vuex from 'vuex'
import tab from './tab'

const state = {
  selectedMenuItem: null
};

const mutations = {
  selectMenu(state, item) {
    state.selectedMenuItem = item;
  }
};


Vue.use(Vuex)

//创建vuex的实例
export default new Vuex.Store({
  state,
  mutations,
  modules:{
    tab
  }
})