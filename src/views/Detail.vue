<template>
    <div class="container-detail">
        <van-nav-bar
        left-arrow
        title="商品详情"
        left-text="返回"
         @click-left="back"
        />
        <div class="goods_thumb">
             <van-swipe :autoplay="3000" indicator-color="#ee0a24" @change="onChange">
                <van-swipe-item v-for="(image, index) in pictures" :key="index"  @click="showPic(index)">
                    <img width="100%" v-lazy="image" />
                </van-swipe-item>
                <template #indicator>
                <div class="custom-indicator">
                {{ current + 1 }}/{{pictures.length}}
                </div>
            </template>
            </van-swipe>
        </div>
        <div class="goods_title">
            {{goods.title}}
        </div>
        <div class="goods-price-share">
            <div class="goods-price">
                <p class="goods-price-yh">¥{{goods.price}}</p>
                <p class="goods-price-yj">¥{{goods.price_original}}</p>
            </div>
            <div class="goods-share">
                <van-icon name="share" size=".4rem" />
                <van-cell title="分享"  @click="showShare=true" />
                <!--sync能使子组件修改showShare值时同步修改当前组件 -->
                <Share :showShare.sync="showShare"></Share>
            </div>
        </div>   
        <div class="goods-guige">
            <van-cell title="请选择" is-link value="规格" @click="showSku=true" />
            <van-sku
          v-model="showSku"
          :sku="skuData"
          :goods="goods_info"
          :goods-id="goods.id"
          :quota="goods.quota"
          :quota-used="goods.quota_used"
          reset-stepper-on-hide
          reset-selected-sku-on-hide
          disable-stepper-input
          :close-on-click-overlay="closeOnClickOverlay" 
          :custom-sku-validator="customSkuValidator"  
          @buy-clicked="onBuyClicked"
          @add-cart="onAddCartClicked"
        />
        </div>
        <van-tabs v-model="active" scrollspy sticky>
            <van-tab title="参数">
                <div style="height:80vh">参数</div>
            </van-tab>
            <van-tab title="详情">
                <div style="height:80vh">详情</div>
            </van-tab>
            <van-tab title="评论">
                <div style="height:80vh">评论</div>
            </van-tab>
        </van-tabs>
        <BackTop></BackTop>
        <GoodsAction></GoodsAction>
    </div>
</template>

<script>
import Bscroll from "@/components/Bscroll.vue"
import GoodsAction from "@/components/GoodsAction.vue"
import Share from "@/components/Share.vue"
import { ImagePreview } from 'vant';
import BackTop from '@/components/BackTop.vue'
import CanvasPoster from "@/components/CanvasPoster.vue"  //海报生成
//生产海报
import QRCode from 'qrcodejs2'
import html2canvas from 'html2canvas'
//sku
import Vue from 'vue';
import { Sku } from 'vant';
Vue.use(Sku);

//必须先定义，然后再请求数据替换该变量，不然会提示 Cannot read property 'filter' of undefined"
let skuData = { 
  // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
  // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
  tree: [
    {
      k: '颜色',
      v: [
        {
          id: '30349',
          name: '天蓝色',
          imgUrl:
            'https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'
        },
        {
          id: '1215',
          name: '白色'
        }
      ],
      k_s: 's1',
    },
    {
      k: '尺寸',
      v: [
        {
          id: '1193',
          name: '1'
        },
        {
          id: '1194',
          name: '2'
        }
      ],
      k_s: 's2',
    }
  ],
  // 所有 sku 的组合列表，如下是：白色1、白色2、天蓝色1、天蓝色2
  list: [
    {
      id: 2259,
      price: 120, //价格
      s1: '1215',
      s2: '1193',
      stock_num: 2, //库存 ,不写库存则改sku不能选择
    },
    {
      id: 2260,
      price: 110,
      s1: '1215',
      s2: '1194',
      stock_num: 2, //库存 
    },
    {
      id: 2257,
      price: 130,
      s1: '30349',
      s2: '1193',
      stock_num: 40, //库存 
    },
    {
      id: 2258,
      price: 100,
      s1: '30349',
      s2: '1194',
      stock_num: 50, //库存 
    }
  ],
  price: '5.00',
  stock_num: 227, // 商品总库存
  none_sku: false,  // 是否无规格商品 
  hide_stock: false  // 是否隐藏剩余库存
};
export default {
    name: '',
    data () {
        return {
            active: 0,
            current: 0,
            showShare: false,
            goods: [],
            goods_info: {},
            pictures: [],
            posterImg: '', // 最终生成的海报图片
            ewmImg: "", //生成的二维码图片
            skuData:skuData,
            initialSku: {}, 
            showSku: false,
            closeOnClickOverlay: true,  //点击遮罩层后关闭
            customSkuValidator: () => '请选择规格!', 
        };
    },
    components: {Bscroll,GoodsAction,Sku,Share,BackTop,CanvasPoster},
    async created () {
        let id = this.$route.params.id;
        //获取商品详情数据
        let data = await this.$api.detail.getDetail(id) || [];
        this.goods = data.result;
        this.pictures = data.result.pic;
        this.goods_info['picture'] = data.result.thumb;
        this.skuData = data.result.sku_data; //必须在
        //this.initialSku = data.result.initialSku;
    },
    methods: {
        back(){
            //history.go(-1)
            this.$router.go(-1)
        },
        onChange(index) {
            this.current = index;
        },
        showPic(index){
            ImagePreview({
                images: this.pictures,
                startPosition: index,
            })
        },
        onBuyClicked(data){
             //console.log(JSON.stringify(data))
             this.showSku = false;
        },
        onAddCartClicked(data){
          //需要提交到订单页或购物车的数据只需要goodsId(商品ID)、selectedNum(购买的商品数量)、selectedSkuComb.id(选择的商品规格id)，其他数据都可以通过这三个数据来获取
          console.log(JSON.stringify(data))
          this.showSku = false;
        },
    }
}
</script>

<style lang='stylus' scoped>
.container-detail {
    background: #eee;
}
 .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
    color: #fff;
  }
  .goods_title {
      font-size: 16px;
      padding: 0.2rem;
      color: #999;
      background: #fff;
  }
  .goods-price-share {
    padding: 0.2rem;
    display: flex;
    justify-content: space-between;
    background: #fff;
}
.goods-price-yh {
    font-size: .4rem;
    color: #ee0a24;
}
.goods-price-yj {
    font-size: .3rem;
    color: #999;
    text-decoration: line-through;
}
.goods-share {
    color: #666;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: .25rem;
    position: relative;
    overflow: hidden;
}
.goods-share button {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
}
.goods-share .van-cell {
    padding: 0;
}
.goods-share .iconfont {
    font-size: 45rpx;
}
.goods-guige {
    margin: .2rem 0;
}
</style>