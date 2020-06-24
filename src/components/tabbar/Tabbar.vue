<template>
    <div id="tabbar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            
        };
    },
    components: {},
    mounted () {},
    methods: {}
}
</script>

<style lang='stylus' scoped>
#tabbar {
    width: 100%;
    height:50px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: content-box;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    z-index: 10000;
    border-top: 1px solid #f3f3f3;
}
</style>