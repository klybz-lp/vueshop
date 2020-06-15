<template>
  <van-sticky>
    <div class="search">
        <form action="/">
            <van-search
            placeholder="请输入搜索关键词"
            v-model="value"
            @search="onSearch"
            @cancel="onCancel"
            />
        </form>
    </div>
   </van-sticky>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: '',
  data () {
    return {
      value: ""
    };
  },
  components: {},
  mounted () {},
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
    },
  }
}
</script>

<style lang='stylus' scoped>
</style>