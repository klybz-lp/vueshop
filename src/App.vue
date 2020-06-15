<template>
  <div id="app">
    <!-- keep-alive缓存了每个页面的组件数据，重新进入不会触发生命周期的一些事件 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>
<script>
import Vue from 'vue'
export default {}
//全局过滤器,保留小数点后两位
// Vue.filter("toFixed", (target, val = 2) => {
//   return parseFloat(target).toFixed(val)
// });
</script>  
<style lang="stylus">
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