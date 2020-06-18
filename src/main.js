import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api' // 导入api接口
import "@/utils/rem"  //pxtorem
import * as filters from './filters'  //全局过滤器
import './assets/css/reset.css'  /*引入公共样式*/

// 按需引入vant组件
import { Icon, Button, Grid, GridItem,Tabbar, TabbarItem, Search, Lazyload, Cell, CellGroup, Row, Col, Tag, List, Dialog, Toast, Empty,Skeleton,NavBar } from 'vant'
Vue.use(Icon).use(Button).use(Grid).use(GridItem).use(Tabbar).use(TabbarItem).use(Search).use(Cell).use(CellGroup).use(Row).use(Col).use(Tag).use(List).use(Dialog).use(Empty).use(Skeleton).use(NavBar).use(Toast);
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: require("./assets/images/loading.gif"),
  attempt: 1
})

//注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})


Vue.config.productionTip = false
Vue.prototype.$api = api; // 将api挂载到vue的原型上

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// rem计算,如果640的设计稿，将750该车640即可,1rem位100px
// let w = document.documentElement.clientWidth || document.body.clientWidth;
// document.documentElement.style.fontSize = w/750*100 + "px";