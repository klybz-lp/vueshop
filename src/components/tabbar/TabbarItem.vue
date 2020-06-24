<template>
    <div class="tabbar-item" @click="navigator">
        <div class="tabbar-item-icon">
            <div v-show="!active" ><slot name="icon"></slot></div>
            <div v-show="active" ><slot name="icon-active"></slot></div>
        </div>
        <div class="tabbar-item-text" :style="styleObj">
            <slot name="text"></slot>
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
    props:{
        path: String,
        activeColor: {
            type: String,
            default: "red"
        }
    },
    computed: {
        styleObj(){
            return this.active ? {color: this.activeColor} : {}
        },
        active(){
            return this.$route.path === this.path;
        }
    },
    components: {},
    mounted () {
        console.log(this.is_active)
    },
    methods: {
        navigator(){
            //push:跳转到指定URL，向history栈添加一个新的记录，点击后退会返回至上一个页面
            //replace:跳转到指定URL，替换history栈中最后一个记录，点击后退会返回至上上一个页面
            //this.$router.go(n)向前或向后跳转n个页面，n可正（先后跳转）可负（向前跳转）
            //$route 是“路由信息对象”，包括 path，params，hash，query，fullPath，matched，name 等路由信息参数。
            //$router 是“路由实例”对象，即使用 new VueRouter创建的实例，包括了路由的跳转方法，钩子函数等。
            this.$router.replace({path: this.path});
        }
    }
}
</script>

<style lang='stylus' scoped>
.tabbar-item {
    flex: 1;
    text-align: center;
    font-size:14px;
    color: #333;
}
.tabbar-item .tabbar-item-icon img {
    width: 18px;
    height: 18px;
    display: block;
    margin: 0 auto 5px;
}
</style>