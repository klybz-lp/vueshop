<template>
    <div>
        <div id="poster">
            <div class="poster_main">
                <div class="poster_img">
                    <img src="../assets/images/thumb_01_03.jpg" style="width:100%" alt="">
                </div>
                <div class="poster_des">
                    <div class="poster_text">
                        <p class="title">儿童网眼运动凉鞋（宽松版） 25-32码</p>
                        <p class="price">¥199</p>
                    </div>
                    <div class="poster_ewm">
                        <div id="qrcodeImg"></div>
                        <p>长按或扫描二维码</p>
                    </div>
                </div>
            </div>
        </div>
        <van-button type="default" @click="createQrcode">生成二维码</van-button>
        <van-button type="default" @click="createPoster">生成海报</van-button>
        <!-- 二维码 -->
        <div id="qrcodeImg" style="display:none;"></div>
        <!-- 需要生成海报的html -->
        <div id="poster_wrap">
            <img :src="posterImg" style="width:100%;" alt="">
        </div>
    </div>
</template>

<script>
//生产海报
import QRCode from 'qrcodejs2'
import html2canvas from 'html2canvas'
export default {
    name: '',
    data () {
        return {
            posterImg: "",  //合成的海报地址，base64
            posterHtmlBg: require('@/assets/images/poster_bg.jpg'), // 背景图
            posterContent: "",  // 文案内容
            posterImg: '', // 最终生成的海报图片
            ewmImg: "", //生成的二维码图片
        };
    },
    components: {},
    mounted () {},
    methods: {
        createQrcode(text) { //生成二维码
            var text = "https://www.baidu.com"  //扫描二维码后的跳转地址 
            // 生成二维码
            const qrcodeImgEl = document.getElementById('qrcodeImg')
            qrcodeImgEl.innerHTML = ''
            let qrcode = new QRCode(qrcodeImgEl, {
                width: 100,
                text: text,
                height: 100,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
            })
        },
        createPoster() {  //将html生成图片，测试
            //生成二维码
            //this.createQrcode();
            //生成海报
            const vm = this
            const domObj = document.getElementById('poster')
            //domObj.style.display = 'block'  //不显示出来则生成的海报是空白
            html2canvas(domObj, {
                useCORS: true,
                allowTaint: false,
                logging: false,
                letterRendering: true,
            }).then(function(canvas) {
                // 在微信里,可长按保存或转发
                vm.posterImg = canvas.toDataURL('image/png')
                console.log(vm.posterImg)
                let e = document.getElementById('poster_wrap');
                e.style.display = 'block'

            })
        },
        createPoster2() {
            // 生成海报
            const vm = this
            const domObj = document.getElementById('posterHtml')
            html2canvas(domObj, {
                useCORS: true,
                allowTaint: false,
                logging: false,
                letterRendering: true,
                onclone(doc) {
                let e = doc.querySelector('#posterHtml')
                e.style.display = 'block'
                }
            }).then(function(canvas) {
                // 在微信里,可长按保存或转发
                vm.posterImg = canvas.toDataURL('image/png')
            })
        },
    }
}
</script>

<style lang='stylus' scoped>
#poster_wrap {
    width: 100%;
    height:100%;
    position:fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,.7);
    z-index:10001;
    padding: .5rem;
    display: none;
}
#poster {
    width: 100%;
    height:100%;
    position:fixed;
    left: 0;
    top: -100%;
    background: #fff;
    z-index: 1000;
}
.poster_main {
    background: #fff;
    padding: .5rem .3rem;
}
.poster_des {
    display: flex;
    margin: .3rem 0 0 0;
}
.poster_text {
    flex: 1;
}
.poster_text .title {
    font-size: 14px;
    color: #333;
    line-height: 22px;
    margin-bottom: .3rem;
}
.poster_text .price {
    font-size: 16px;
    color: #f00;
}
.poster_ewm {
    width: 2rem;
    height: 2rem;
    background #000;
}
.poster_ewm p {
    font-size: 12px;
    color: #ddd;
    padding-top: .1rem;
}
</style>