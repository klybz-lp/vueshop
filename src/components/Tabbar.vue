<template>
  <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
    <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/category" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item replace to="/cart" icon="cart-o" badge="5">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/about" icon="contact" dot>我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
  name: 'Tabbar',
  data () {
    return {
      
    };
  },
  computed: {
    //   active(){
    //       return this.current;
    //   }
    //由于active使用了v-model指令，所以必须使用set，即使不写内容也许定义，或者使用watch监控active
    active: {
        get(){return this.current;},
        set(){}
    }

  },
  watch: {  
    $route:function(){
      
    }
  },
  props: ['current'],
  mounted() {
    let path = this.$route.path;  //通过监听路由来改变active的值，可以不用进行组件间传值
    // switch(path) {
    //     case "/":
    //       this.active = 0;
    //       break;
    //     case "/category":
    //       this.active = 1;
    //       break;
    //     case "/cart":
    //       this.active = 2;
    //       break;
    //     case "/about":
    //       this.active = 3;
    //       break;
    //     default:
    //       this.active = 0;
    //       break;
    //   }
  }
}
</script>

<style lang='stylus' scoped>
</style>