<template>
  <div class="container-list">
      <Search></Search>
      <div class="list">
          <van-tabs @click="changeItem">
            <van-tab v-for="(item,index) in list" :key="index" :title="item.name" :name="item.id">
                <van-empty v-show="empty" description="暂无商品" />
                <!-- <van-skeleton title avatar :row="10" :loading="loading" style="padding-top:20px;"> -->
                <div class="goodsList">
                    <van-list
                    v-model="loading"
                    :finished="finished"
                    :error.sync="error" 
                    error-text="请求失败，点击重新加载"
                    offset="30"
                    finished-text="没有更多了"
                    :immediate-check="false"
                    @load="onLoad"
                    >
                    <ul>
                        <li v-for="(item, index) in goodsList" :key="index">
                            <img :src="item.pic" alt="" v-lazy="item.pic">
                            <p class="name">{{item.name}}</p>
                            <p class="price">¥{{item.price}}</p>
                        </li>
                    </ul>   
                    </van-list>
                </div>
                <!-- </van-skeleton> -->
            </van-tab>
          </van-tabs>
      </div>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import GoodsList from '@/components/GoodsList.vue'
import { Lazyload, Tab, Tabs,List  } from 'vant'
import Vue from 'vue'
Vue.use(Lazyload).use(Tab).use(Tabs).use(List);
export default {
  name: '',
  data () {
    return {
      list: [],
      goodsList: [],
      loading: false,
      finished: false,
      error: false,
      empty: false,
      params: {
          page: 1,
          page_size:10
      }
    };
  },
  watch: { //监控路由的变化
    $route: {
        handler(){
            //console.log(this.$route.params)
        },
        immediate: true  //初始化执行
    }
  },
  components: {Search,GoodsList},
  async mounted () {
      let id = this.$route.params.id;
      //获取分类数据
      let list = await this.$api.list.getList();
      this.list = list.result;
      var params = this.params;
      let data = await this.$api.list.getGoodsList(id,params) || [];
      console.log(data)
      this.goodsList = data.result;
  },
  methods: {
      async changeItem(name, title){
          this.params.page = 1; //重置page
          this.goodsList = [];
          let data = await this.$api.list.getGoodsList(name, this.params) || [];
          this.goodsList = data.result;
          this.empty = (data.result.length === 0) ? true : false; //显示空白提示
      },
      onLoad() {
          let id = this.$route.params.id;
          this.params.page++;
          var params = this.params;
          this.loading = true;
          this.$api.list.getGoodsList(id,params).then(res => {
              console.log(res.result)
              if (res.result.length === 0) {  		// 判断获取数据条数若等于0
                  //this.goodsList = [];				// 清空数组
                  this.finished = true;		// 停止加载
              }else{
                  this.goodsList.push(...res.result);
                  this.loading = false;  // 加载状态结束 
              }
            
          })

          //获取商品数据
          
          // 加载状态结束
        //this.loading = false;

        // 数据全部加载完成
        // this.finished = true;
          // 异步更新数据
     
      }
  }
}
</script>

<style lang='stylus' scoped>
// .van-list {
//     display: flex;
//     justify-content: space-between;
//     flex-wrap: wrap;
// }
// .van-cell {
//     width: 48%;
//     margin-bottom: .3rem;
// }
.van-cell img {
    width: 100%;
}
.van-cell p.name {
    fong-size: 14px;
    color: #333;
    line-height: 20px;
    margin: .1rem 0 0 0;
}
.van-cell p.price {
    fong-size: 16px;
    color: #DD1A21;
}
.goodsList ul {
    padding: .2rem .2rem;
}
.goodsList ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.goodsList ul li {
    width: 48%;
    margin-bottom: .3rem;
}
.goodsList ul li img {
    width: 100%;
}
.goodsList ul li p.name {
    fong-size: 14px;
    color: #333;
    line-height: 20px;
    margin: .1rem 0 0 0;
}
.goodsList ul li p.price {
    fong-size: 16px;
    color: #DD1A21;
}
</style>