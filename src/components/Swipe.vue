<template>
  <div class="swiper">
    <van-swipe :autoplay="30000" indicator-color="#ee0a24">
      <van-swipe-item v-for="(item, index) in banner" :key="index">
      <img v-lazy="item.path" width="100%"  @click="$router.push({params:{'id': item.id},name:'Goods'})" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import {Swipe, SwipeItem} from "vant"
Vue.use(Swipe).use(SwipeItem);
export default {
  name: 'swiper',
  data () {
    return {
    };
  },
  props: ['banner'],
  methods: {}
}
</script>

<style lang='stylus' scoped>

</style>