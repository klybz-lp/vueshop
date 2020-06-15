<template>
  <div class="floor">
      <div class="floor-content" v-for="(item,index) in goods" :key="index">
          <h3 class="f-title">{{item.title}}</h3>
            <div class="floor-item">
                <div class="floor-head">
                <div class="floor-l">
                    <img :src="item.floor_head[0]['pic']" alt="">
                </div>
                <div class="floor-r">
                    <img :src="item.floor_head[1]['pic']" alt="">
                    <img :src="item.floor_head[2]['pic']" alt="">
                </div>
                </div>
                <div class="floor-main">
                    <div class="floor-main-item" v-for="(itm,idx) in item.floor_main" :key="idx" @click="$router.push({params:{'id': itm.id},name:'Goods'})">
                        <img :src="itm.pic" alt="">
                        <p class="goods_title">{{itm.title}}</p>
                        <p class="goods_des">{{itm.des}}</p>
                        <p class="goods_price">¥{{itm.price}}元<span>起</span></p>
                        <van-button type="danger">立即购买</van-button>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      
    };
  },
  props: ['title', 'goods'],
  components: {},
  mounted () {},
  methods: {}
}
</script>

<style lang='stylus' scoped>
.floor-item {
  margin-top: .4rem;
}
.floor-item .floor-head {
  display: flex;
  justify-content: space-between;
}
.floor-item .floor-head .floor-l {
  width: 49%;
}
.floor-item .floor-head .floor-r {
   width: 49%;
}
.floor-item .floor-head img {
  width: 100%;
}
.floor-main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.floor-main .floor-main-item {
  width: 49%;
  margin: .4rem 0 0 0;
  text-align: center;
}
.floor-main .floor-main-item img {
  width: 100%;
}
.floor-main .goods_title {
    font-size: .4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #333;
}
.floor-main .goods_des {
  font-size: .28rem;
  color: #666;
}
.floor-main .goods_price {
  color: #f00;
  margin-bottom: .1rem;
}
</style>