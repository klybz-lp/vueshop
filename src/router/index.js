import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Cart from '../views/Cart.vue'
import About from '../views/About.vue'
import Goods from '../views/Goods.vue'
import List from '../views/List.vue'
import Detail from '../views/Detail.vue'
import Error from '../views/Error.vue'

//建议使用懒加载
//const Home = () => Promise.resolve({ /* 组件定义对象 */ })

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {keepAlive: true}
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/list/:id',
    name: 'List',
    component: List
  },
  {
    path: '/goods/:id',
    name: 'Goods',
    component: Goods
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '*',  //404页面
    component: Error,
    
  },
]

const router = new VueRouter({
  mode: "history",  //默认路由模式是hash,注意history模式时，直接访问首页链接之外的链接会报错，回到顶部图片问题
  routes
})

export default router
