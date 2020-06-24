<template>
    <div>
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" color="#07c160"  @click="onClickIcon" />
            <van-goods-action-icon icon="cart-o" text="购物车"  @click="onClickIcon" />
            <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" @click="onClickIcon" />
            <van-goods-action-button type="warning"  @click="onClickButton" text="加入购物车" />
            <van-goods-action-button type="danger"  @click="onClickButton" text="立即购买" />
        </van-goods-action>
    </div>
</template>

<script>
import Vue from 'vue';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
Vue.use(GoodsAction).use(GoodsActionButton).use(GoodsActionIcon);
export default {
    name: '',
    data () {
        return {
            
        };
    },
    components: {},
    mounted () {},
    methods: {
        onClickIcon() {

        },
        onClickButton() {
            
        },
    }
}
</script>

<style lang='stylus' scoped>
</style>