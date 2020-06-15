<template>
  <div class="container">
    <!-- <VuexDemo></VuexDemo> -->
    <div class="home">
      <Search></Search>
      <Swipe :banner="banner"></Swipe>
      <div class="menu">
        <div class="menu-item" v-for="(item,index) in menu" :key="index">
          <img :src="item.pic" alt="">
          <p>{{item.name}}</p>
        </div>
      </div>
      <div class="recommend">
        <h3 class="f-title">热卖推荐</h3>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="(item,index) in hotGoods" :key="index">
            <img :src="item.pic" alt="" @click="$router.push({params:{'id': item.id},name:'Goods'})">
            <p class="goods_title">{{item.title}}</p>
            <p class="goods_price">¥{{item.price|toFixed}}元</p>
          </swiper-slide>
          <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
      </div>
      <Floor :title="'每日优选'" :goods="goods"></Floor>
      <Tabbar :current="0"></Tabbar>
    </div>
    <BackTop></BackTop>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue'
import Tabbar from '@/components/Tabbar.vue'
import Swipe from '@/components/Swipe.vue'
import Floor from '@/components/Floor.vue'
import VuexDemo from '@/components/VuexDemo.vue'
import BackTop from '@/components/BackTop.vue'
//import { getBanner, getUser } from '@/api/api'  //如果文件名是index.js可省略
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper"
import 'swiper/css/swiper.css'

export default {
  name: 'Home',
  data() {
    return {
      banner: [],
      menu: [
        {
          id: 1,
          pic: require("../assets/images/menu_01.png"),
          name: "新品首发"
        },
        {
          id: 2,
          pic: require("../assets/images/menu_02.png"),
          name: "居家生活"
        },
        {
          id: 3,
          pic: require("../assets/images/menu_03.png"),
          name: "服饰鞋包"
        },
        {
          id: 4,
          pic: require("../assets/images/menu_04.png"),
          name: "美食酒水"
        },
        {
          id: 5,
          pic: require("../assets/images/menu_05.png"),
          name: "个护清洁"
        },
        {
          id: 6,
          pic: require("../assets/images/menu_06.png"),
          name: "母婴亲子"
        },
        {
          id: 7,
          pic: require("../assets/images/menu_07.png"),
          name: "运动旅行"
        },
        {
          id: 8,
          pic: require("../assets/images/menu_08.png"),
          name: "数码家电"
        },
        {
          id: 9,
          pic: require("../assets/images/menu_09.png"),
          name: "全球特色"
        },
        {
          id: 10,
          pic: require("../assets/images/menu_10.gif"),
          name: "好货抄底"
        }
      ],
      hotGoods: [
        {
          id: 1,
          title: "儿童网眼运动凉鞋",
          pic: require("../assets/images/goods_01.png"),
          price: 199
        },
        {
          id: 2,
          title: "儿童小萌象系列湿巾",
          pic: require("../assets/images/goods_02.png"),
          price: 399
        },
        {
          id: 3,
          title: "动物生日派对主题爬行垫",
          pic: require("../assets/images/goods_03.png"),
          price: 999
        },
        {
          id: 4,
          title: "可折叠游戏围栏",
          pic: require("../assets/images/goods_04.png"),
          price: 499
        },
        {
          id: 5,
          title: "易有道词典笔",
          pic: require("../assets/images/goods_05.png"),
          price: 799
        }
      ],
      goods: [
        {
          title: "每日优选",
          floor_head: [
            {
              id: 1,
              pic: require("../assets/images/goods_03.jpg"),
            },
            {
              id: 2,
              pic: require("../assets/images/goods_04.jpg"),
            },
            {
              id: 3,
              pic: require("../assets/images/goods_05.jpg"),
            }
          ],
          floor_main: [
            {
              id: 1,
              name: "小米10 Pro",
              des: "骁龙865 / 50倍变焦",
              pic: require("../assets/images/goods_06.jpg"),
              price: 4999
            },
            {
              id: 2,
              name: "小米10",
              des: "骁龙865/1亿像素相机",
              pic: require("../assets/images/goods_07.jpg"),
              price: 3999
            },
            {
              id: 3,
              name: "Redmi K30",
              des: "120Hz流速屏，全速热爱",
              pic: require("../assets/images/goods_08.jpg"),
              price: 1599
            },
            {
              id: 4,
              name: "Redmi K30 5G",
              des: "双模5G，120Hz流速屏",
              pic: require("../assets/images/goods_09.jpg"),
              price: 1999
            },
          ]
        }
      ],
      swiperOption: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  components: {
    Tabbar,
    Swipe,
    Swiper,
    SwiperSlide,
    Floor,
    VuexDemo,
    BackTop,
    Search
  },
  async created() {
    //获取轮播图数据
    let data = await  this.$api.home.getBanner();
    console.log(data)
    this.banner = data.result;
    // let user = await this.$api.home.getUser();
    // console.log(user)
  },
  methods: {
  
  },
}
</script>

<style lang="stylus" scoped>
.menu {
  display:flex;
  flex-wrap: wrap;
}
.menu .menu-item {
  width: 20%;
  text-align: center;
}
.menu .menu-item img {
  width: 90%;
  display block;
  margin: .2rem auto;
}
.menu .menu-item p {
  font-size: 14px;
}
.recommend .swiper-slide img {
  width: 100%;
}
.recommend .goods_title {
  color: #333;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.recommend .goods_price {
  color: #f00;
  font-size: 12px;
}
</style>
