<template>
  <div class="container">
      商品详情页{{$route.params.id}}
  </div>
</template>

<script>
export default {
  name: 'goods',
  watch: { //监控路由的变化
    $route: {
        handler(){
            console.log(this.$route.params)
        },
        immediate: true  //初始化执行
    }
  },
  data () {
    return {
      
    };
  },
  components: {},
  mounted () {},
  methods: {}
}
</script>

<style lang='stylus' scoped>
</style>