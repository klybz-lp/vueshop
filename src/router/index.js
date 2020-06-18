import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Cart from '../views/Cart.vue'
import About from '../views/About.vue'
import Goods from '../views/Goods.vue'
import List from '../views/List.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  }
]

const router = new VueRouter({
  routes
})

export default router
