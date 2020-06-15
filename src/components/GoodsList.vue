<template>
    <div class="goodsList">
        <ul>
            <li v-for="(item, index) in goodsList" :key="index">
                <img :src="item.pic" alt="" v-lazy="item.pic">
                <p class="name">{{item.name}}</p>
                <p class="price">¥{{item.price}}</p>
            </li>
        </ul>   
    </div>
</template>

<script>
import Vue from 'vue';
import { List } from 'vant';
Vue.use(List);
export default {
    name: '',
    data () {
        return {
            
        };
    },
    props: ['goodsList'],
    components: {},
    mounted () {},
    methods: {}
}
</script>

<style lang='stylus' scoped>
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