import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state.js"
import mutations from "./mutations.js"
import actions from "./actions.js"
import getters from "./getters.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: { //如果内容过多则可使用modules模块划分，如把state里的状态变量单独放在一个文件./state.js里，然后import在当前页面import引入
  },
  getters
})
