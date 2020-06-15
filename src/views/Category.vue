<template>
  <div class="container">
    <Search></Search>
    <div class="category">
      <van-tree-select height="calc(100vh - 104px)" :items="items" :main-active-index.sync="active" @click-nav="changeItem">
        <template #content>
          <div class="cate_item">
            <div class="cate_top">
              <img :src="category.pic" alt="">
            </div>
            <div class="cate_list">
              <ul>
                <!-- 使用编程导航跳转 :to="'/list/id'+item.id" -->
                <li v-for="(item,index) in category.children" :key="index" @click="$router.push({params:{'id': item.id},name:'List'})">
                  <img :src="item.pic" alt=""  v-lazy="item.pic">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
          </div>
        </template>
      </van-tree-select>
    </div>
    <Tabbar :current="1"></Tabbar>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import Tabbar from '@/components/Tabbar.vue'
import { Lazyload, Sticky,TreeSelect,Image as VanImage  } from 'vant'
import Vue from 'vue'
Vue.use(Lazyload).use(Sticky).use(TreeSelect).use(VanImage);  //可以使用TreeSelect 做分类效果
export default {
  name: '',
  data () {
    return {
      active: 0,
      items: [
          { text: '新品专区' }, 
          { text: '居家生活' },
          { text: '服饰鞋包' }, 
          { text: '美食酒水' },
          { text: '个护清洁' }, 
          { text: '母婴亲子' },
          { text: '运动旅行' }, 
          { text: '数码家电' },
          { text: '严选全球' }, 
        ],
      category: [],
      item: [
        {
          id: 1,
          pic: require('../assets/images/category_top_01.jpg'),
          children: [
            {
              id: 1,
              name: "居家生活新品",
              pic: require('../assets/images/category_item_01.png'),
            },
            {
              id: 2,
              name: "服饰鞋包新品",
              pic: require('../assets/images/category_item_02.png'),
            },
            {
              id: 3,
              name: "美食酒水新品",
              pic: require('../assets/images/category_item_03.png'),
            },
            {
              id: 4,
              name: "个护清洁新品",
              pic: require("../assets/images/category_item_04.png"),
            },
            {
              id: 5,
              name: "运动旅行新品",
              pic: require("../assets/images/category_item_05.png"),
            },
            {
              id: 6,
              name: "母婴亲子新品",
              pic: require("../assets/images/category_item_06.png"),
            },
            {
              id: 7,
              name: "数码家电新品",
              pic: require("../assets/images/category_item_07.png"),
            },
            {
              id: 8,
              name: "全球特色新品",
              pic: require("../assets/images/category_item_08.png"),
            },
          ]
        },
        {
          id: 2,
          pic: require("../assets/images/category_top_02.jpg"),
          children: [
            {
              id: 1,
              name: "客餐厅家具",
              pic: require("../assets/images/category_item_09.png"),
            },
            {
              id: 2,
              name: "卧室家具",
              pic: require("../assets/images/category_item_10.png"),
            },
            {
              id: 3,
              name: "办公书房家具",
              pic: require("../assets/images/category_item_11.png"),
            },
            {
              id: 4,
              name: "小件家具",
              pic: require("../assets/images/category_item_12.png"),
            },
            {
              id: 5,
              name: "灯具",
              pic: require("../assets/images/category_item_13.png"),
            },
            {
              id: 6,
              name: "地毯窗帘",
              pic: require("../assets/images/category_item_14.png"),
            }
          ]
        },
        {
          id: 3,
          pic: require("../assets/images/category_top_03.jpg"),
          children: [
            {
              id: 1,
              name: "男式T恤",
              pic: require("../assets/images/category_item_15.png"),
            },
            {
              id: 2,
              name: "男式衬衫",
              pic: require("../assets/images/category_item_16.png"),
            },
            {
              id: 3,
              name: "男式裤装",
              pic: require("../assets/images/category_item_17.jpg"),
            },
            {
              id: 4,
              name: "男式牛仔",
              pic: require("../assets/images/category_item_18.png"),
            },
            {
              id: 5,
              name: "男式针织衫",
              pic: require("../assets/images/category_item_19.jpg"),
            },
            {
              id: 6,
              name: "男式外套",
              pic: require("../assets/images/category_item_20.png"),
            }
          ]
        },
        {
          id: 4,
          pic: require("../assets/images/category_top_04.jpg"),
          children: [
            {
              id: 1,
              name: "酒类",
              pic: require("../assets/images/category_item_21.png"),
            }
          ]
        },
        {
          id: 5,
          pic: require("../assets/images/category_top_05.jpg"),
          children: [
            {
              id: 1,
              name: "酒类",
              pic: require("../assets/images/category_item_21.png"),
            }
          ]
        },
        {
          id: 6,
          pic: require("../assets/images/category_top_06.jpg"),
          children: [
            {
              id: 1,
              name: "酒类",
              pic: require("../assets/images/category_item_21.png"),
            }
          ]
        },
        {
          id: 7,
          pic: require("../assets/images/category_top_07.jpg"),
          children: [
            {
              id: 1,
              name: "酒类",
              pic: require("../assets/images/category_item_21.png"),
            }
          ]
        },
        {
          id: 8,
          pic: require("../assets/images/category_top_08.jpg"),
          children: [
            {
              id: 1,
              name: "酒类",
              pic: require("../assets/images/category_item_21.png"),
            }
          ]
        },
        {
          id: 9,
          pic: require("../assets/images/category_top_09.jpg"),
          children: [
            {
              id: 1,
              name: "酒类",
              pic: require("../assets/images/category_item_21.png"),
            }
          ]
        }
      ]
    };
  },
  components: {Tabbar,Search},
  mounted () {
    this.category = this.item[0];
    console.log(this.category)
  },
  methods: {
    changeItem(index){
      let item = this.item[index] || this.item[0];
      console.log(item)
      this.category = item;
    }
  }
}
</script>

<style lang='stylus' scoped>
.van-tree-select__nav-item {
  padding: 10px 0px 10px 12px!important;
}
.cate_item {
  padding: .2rem;
}
.cate_top {
  margin-bottom: .2rem;
}
.cate_top img {
  width: 100%;
}
.cate_list ul {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.cate_list ul li {
  width: 32%;
  margin: 0 2% .2rem 0;
  text-align: center;
}
.cate_list ul li:nth-child(3n) {
  margin-right: 0;
}
.cate_list ul li img {
  width: 100%;
  margin-bottom: 2px;
}
.cate_list ul li p {
  font-size: 12px;
  color: #333;
}
</style>