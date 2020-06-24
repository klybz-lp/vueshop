<template>
    <div>
        <van-share-sheet
        v-model="isshare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
        />
    </div>
</template>

<script>
import Vue from 'vue';
import { ShareSheet } from 'vant';
Vue.use(ShareSheet);
import { Toast } from 'vant';
export default {
    name: '',
    data () {
        return {
            options: [
                { name: '微信', icon: 'wechat' },
                { name: '复制链接', icon: 'link' },
                { name: '分享海报', icon: 'poster' },
                { name: '二维码', icon: 'qrcode' },
            ],
        };
    },
    props: ['showShare'],
    computed: {
        //由于isshare使用了v-model指令，所以必须使用set，即使不写内容也许定义，或者使用watch监控isshare
        isshare: {
            get(){return this.showShare;},
            set(val){   //修改isshare时触发
                //this.showShare = val;  //不允许在子组件直接修改父组件属性的值
                this.$emit("update:showShare", val);  //修改父组件属性值
            }
        }
    },
    components: {},
    mounted () {
    },
    methods: {
        onSelect(option) {
            Toast(option.name);
            //this.$emit('showSharePanel',false); //执行父组件的showSharePanel方法，传值为false
            this.$emit("update:showShare", false);  //更新m2的值，并同步修改父组件的
        }
    }
}
</script>

<style lang='stylus' scoped>
</style>