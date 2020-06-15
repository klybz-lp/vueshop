<template>
  <div class="container">
    <div class="about">
      <div class="header">
        <img :src="avatar" alt="">
        <p>李平</p>
      </div>
      <Tabbar :current="3"></Tabbar>
    </div>
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar.vue'
import avatar from '@/assets/images/avatar.png'
export default {
  name: 'About',
  data(){
    return {
      avatar
    }
  },
  components: {Tabbar},
}
</script>
<style lang='stylus' scoped>
  .header {
    padding: .8rem .4rem;
    background: #463F51;
    color: #fff;
  }
  .header img {
    width: 1.2rem;
    height:  1.2rem;
  }
  .header p {
    font-size: .32rem;
    padding:  0 0 0 .2rem;
    margin: 0
  }
  
</style>