import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {  //原先在组件data里定义的变量写在state对象里，在组件里使用{{$store.state.varname}}获取
    number: 0,
  },
  mutations: { //原先在组件method里的方法里调用改方法，mutations里都是同步操作
    inc(state){
      state.number++
    },
    dec(state){
      state.number--
    }
  },
  actions: {  //异步操作方法,在actions里请求服务器端数据，然后在mutations赋值给state里的状态变量,参考index2.js
    increment({commit,state}){
      commit('inc')  //调用mutations里的inc方法
    },
    decrement({commit,state}){
      if(state.number > 0) commit('dec')  
    }
  },
  modules: { //如果内容过多则可使用modules模块划分，如把state里的状态变量单独放在一个文件./state.js里，然后import在当前页面import引入
  },
  getters: {  //原先在组件computed里的内容可以放在getters对象，在组件里使用{{$store.getters.varname}}获取
    eventOrOdd(state){
      return state.number % 2 == 0 ? "偶数" : "基数"
    }
  }
})
