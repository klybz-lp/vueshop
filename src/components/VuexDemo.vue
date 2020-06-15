<template>
  <div>
      <p>Current Number {{number}} is {{eventOrOdd}}</p>
      <button @click="increment()">+</button>
      <button @click="decrement()">-</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from "vuex"  //mapState,mapGetters,mapActions简化编写
export default {
  name: '',
  computed: {
      ...mapState(['number']),  //使用map映射简写后，template中$store.state.number可简写为number
      ...mapGetters(['eventOrOdd'])  //使用map映射简写后，template中$store.getters.eventOrOdd可简写为eventOrOdd
  },
  components: {},
  mounted () {

  },
  methods: {
      ...mapActions(['increment','decrement']), //使用map映射简写后，只要这里的方法名称与vuex中actions中的方法名称一致的，都可以省略，如果不一致可以使用对象形式{increment: "increment22"}
    //   increment(){
    //       //this.number++
    //       this.$store.dispatch('increment')  //调用vuex--actions里的increment方法
    //   },
    //   decrement(){
    //       //this.number--
    //       this.$store.dispatch('decrement') 
    //   },
  }
}
</script>

<style lang='stylus' scoped>
</style>