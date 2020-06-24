<template>
  <div id="app">
    <!-- keep-alive缓存了每个页面的组件数据，重新进入不会触发生命周期的一些事件 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
    <!-- <Tabbar>
        <TabbarItem path="/home" activeColor="#ee0a24">
             <img slot="icon" src="~@/assets/images/tabbar/home.png" alt="">
             <img slot="icon-active" src="~@/assets/images/tabbar/home-active.png" alt="">
             <p slot="text">首页</p>
        </TabbarItem>
        <TabbarItem path="/category" activeColor="#ee0a24">
             <img slot="icon" src="~@/assets/images/tabbar/category.png" alt="">
              <img slot="icon-active" src="~@/assets/images/tabbar/category-active.png" alt="">
             <p slot="text">分类</p>
        </TabbarItem>
        <TabbarItem path="/cart" activeColor="#ee0a24">
             <img slot="icon" src="~@/assets/images/tabbar/cart.png" alt="">
              <img slot="icon-active" src="~@/assets/images/tabbar/cart-active.png" alt="">
             <p slot="text">购物车</p>
        </TabbarItem>
        <TabbarItem path="/about" activeColor="#ee0a24">
             <img slot="icon" src="~@/assets/images/tabbar/about.png" alt="">
              <img slot="icon-active" src="~@/assets/images/tabbar/about-active.png" alt="">
             <p slot="text">我的</p>
        </TabbarItem>
    </Tabbar> -->
  </div>
</template>
<script>
import Vue from 'vue'

//手动封装的底部导航
import Tabbar from '@/components/tabbar/Tabbar.vue'
import TabbarItem from '@/components/tabbar/TabbarItem.vue'
export default {
  components: {
    Tabbar,TabbarItem
  }
}
//全局过滤器,保留小数点后两位
// Vue.filter("toFixed", (target, val = 2) => {
//   return parseFloat(target).toFixed(val)
// });
</script>  
<style lang="stylus">
// 在script标签外使用import引入需在前面加上@,在script标签外使用目录别名时需在前面加上~
@import '~@/assets/css/reset.css'
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
}
.container {
  margin-bottom: 70px;
}
.van-search__action {
  color: #ee0a24;
}
.van-button {
  height: 30px;
}
.f-title {
  font-size: 16px;
  text-align: center;
  margin: .4rem auto;
  padding-bottom: 5px;
  border-bottom: 2px solid #ee0a24;
  width: 70px;
}
</style>