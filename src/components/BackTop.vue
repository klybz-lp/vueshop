<template>
  <transition name='slide-fade'>
    <div class='page-component-up' v-if='isShow' @click='getTop'>
      <img src="~@/assets/images/top.png" alt="">
      <i class="el-icon-caret-top"></i>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'BackTop',
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    //  添加样式，鼠标hover上去，改变颜色
    addhoverClass (e) {
      if (e.type === 'mouseover' && this.$el.classList) {
        this.$el.classList.add('hover')
      } else if (e.type === 'mouseout' && this.$el.classList) {
        this.$el.classList.remove('hover')
      }
    },
    showIcon () {
      if (document.documentElement.scrollTop > 100) {
        this.isShow = true
        this.$el.addEventListener('mouseover', this.addhoverClass)
        this.$el.addEventListener('mouseout', this.addhoverClass)
      } else if (document.documentElement.scrollTop < 100) {
        this.isShow = false
      }
    },
    getTop () {
      let timer = setInterval(() => {
        let top = document.documentElement.scrollTop
        let speed = Math.ceil(top / 5)
        document.documentElement.scrollTop = top - speed
        if (top === 0) {
          clearInterval(timer)
        }
      }, 20)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.showIcon)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.showIcon)
  }
}
</script>

<style rel="stylesheet/scss">
.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.3, 0.8, 1.0);
  opacity: 0;
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active 在低于 2.1.8 版本中 */ {
  transform: translateY(-20px);
  opacity: 0;
}
.page-component-up {
  background: #ee0a24; 
  position: fixed;
  right: 10px;
  bottom: 2rem;
  width: 30px;
  height: 30px;
  border-radius: 50%;;
  cursor: pointer;
  opacity: 1;
  transition: .3s;
  text-align: center;
  z-index: 999;
}
.page-component-up img {
    width: 100%;
    height: 100%;
}
</style>