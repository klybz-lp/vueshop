# vue-shop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### 基础
1. vue项目上传到git时不添加node_modules目录，在下载或克隆项目后，进入目录执行`npm install`即可安装package.json文件里所有的依赖，所以在项目开发过程安装的插件需要使用--save保存到package.json文件中
2. npm安装参数
```
npm install xxx 安装但不写入package.json
npm install xxx --save 安装并写入package.json的"dependencies"中（推荐），--save可简写为–S
npm install xxx --dev 安装开发依赖的插件，即只有在开发时使用，项目运行时不需要的插件，安装并写入package.json的"devDependencies"中，--dev可简写为–D
npm install xxx -g  全局安装
npm install xxx@1.2.0  安装指定版本
npm uninstall xxx  删除指定插件
```
3. 前端UI推荐：element-ui(适合PC端、后台项目)、mint-u(element-ui移动端版本)、商城类的使用vant、微信端项目使用vux，基于WeUI和Vue(2.x)开发的移动端UI组件库
4. vue-cli项目，view目录放的就是页面级的组件，components放的就是基础组件，修改组件的样式可在App.vue中全局修改，所有的css与img文件都需要import引入后才能使用
5. view目录放的就是页面级的组件，components放的就是基础组件，修改组件的样式可在App.vue中全局修改，所有的css与img文件都需要import引入后才能使用
6. main.js中添加rem计算
```
rem计算,如果640的设计稿，将750该车640即可，即1rem为100px,如果设计稿是750px，那么7.5rem就表示了100%
let w = document.documentElement.clientWidth || document.body.clientWidth;
document.documentElement.style.fontSize = w/750*100 + "px";
```
7. axios安装与跨域解决方法
```
npm install axios --save
npm install antd babel-plugin-import --save //axios所需插件
axios封装参考：https://blog.csdn.net/qq_40128367/article/details/82735310
如果需要全局使用，在main.js中配置：
import axios from 'axios'
Vue.prototype.$axios = axios;
配置请求的基础URL：
axios.defaults.baseURL = "http://www.xydec.cn" 
axios.interceptors.response.use((data) => data.data);  //直接返回服务器返回的数据
参考：https://segmentfault.com/a/1190000013128858
axios跨域解决方法：
方法一：在后台更改header
header('Access-Control-Allow-Origin:*');//允许所有来源访问 
header('Access-Control-Allow-Method:POST,GET');//允许访问的方式
可以指定来源的域名，tp框架可在initialize方法添加上述两行代码
参考https://segmentfault.com/a/1190000015171901
方法二：使用http-proxy-middleware 代理解决（项目使用vue-cli脚手架搭建，开发时使用，上线后在服务器端或使用Nginx配置跨域请求）
vue-cli3.0构建项目目录中没有build和config目录，添加自定义配置需要在项目目录下添加vue.config.js，重启项目，内容如下
module.exports = {
    //publicPath: "./",
    // port: 8080,
    devServer: {
        proxy: {
            '/api': {
                target:"http://qywx.xydec.cn", //target host
                ws: false,  // proxy websockets
                changeOrigin: true, // needed for virtual hosted sites
                pathRewrite: {
			    	'^/api': '', // rewrite path,将/api替换为空
			    },
            }
        },
    },
}
pathRewrite是对路径进行重写，如访问localhost:8080/api/getBanner,实际去请求的地址是http://qywx.xydec.cn/getBanner
修改配置后续重启服务才会生效，vue.config.js可设置的内容参考：https://cli.vuejs.org/zh/config/#vue-config-js
方法三：使用ES6fetch请求
```
8. mockjs拦截请求返回随机的模拟数据
```
本地开发测试如果不想去请求服务器，开发环境可以引入下mockjs拦截请求返回随机的模拟数据
安装npm install mockjs --save-dev
if(process.env.NODE_ENV == "development") require("@/api/mock.js")  //开发环境下引入mockjs
参考：https://www.jianshu.com/p/f3adb1aab09e
```
9. async与await使用
```
created() {
	getBanner().then(res => {
	  console.log(res.data)
	})
}
等价于
async created() {
	let banner = await getBanner();
}
```
10. vue项目中引入其他组件方法：在GitHub或者npm中去搜索需要的插件
11. 全局过滤器:`Vue.filter("toFixed", (target, val = 2) => {return parseFloat(target).toFixed(val)}`
12. 静态资源处理方式：在JavaScript被导入或在template/CSS中通过相对路径被引用。这类引用会被webpack处理。放置在public目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过webpack的处理。
13. 打包后html文件中使用绝对路径引入静态资源，如需修改，如使用相对路径，可在vue.config.js中设置publicPath: "./",默认为/
14. 如果文件名是index可省略，如import { getBanner } from '@/api/index.js'可缩写为import { getBanner } from '@/api'
15. 在script标签外使用import引入需在前面加上@,在script标签外使用目录别名时需在前面加上~，如`
<style lang="stylus">@import '~@/assets/css/reset.css'</style>`
16. key属性不是只有for中使用，任何元素，不管有没有使用vue指令都可以使用，跟动态数据时用:key,用字符串时用key="login"
17. 计算属性的性能要优于侦听器，因此能用计算属性解决的尽量不用侦听器
18. MVVM设计模式，没有控制器，通过Vue框架来实现模型与视图的关联
```
M-》模型
V-》视图
VM-》视图模型，视图与模型通过框架实现双重绑定，动态渲染
```
19. 计算属性，当一个值受其他数据影响时，适合使用计算属性计算属性不需要在data里定义，默认执行,计算属性必须有get，可以没有set，不支持异步操作
```
sum : {
    get(){ //赋值时触发
        return 100;
    },
    set(val){  //修改计算属性时触发

    }
},
如果只是获取可简写为
sun(){ return true; }
```
20. watch监控一个属性是否发生变化，watch需要在data里定义，在第一次渲染页面时默认不执行
```
val: {  //val的值发生变化时触发,当对象的一个属性变化时，地址并没变化，所以不会触发
    handler(newVal,oldVal){
        console.log(newVal,oldVal)
    },
    //设置第一次渲染页面时执行,第一次执行只穿一个参数，只有当前值
    immediate: true
},
obj: {  //val的值发生变化时触发,当对象的一个属性变化时，地址并没变化，所以不会触发，需要开启深度检测
    handler(newVal,oldVal){
        console.log(newVal,oldVal)
    },
    //设置第一次渲染页面时执行,第一次执行只穿一个参数，只有当前值
    deep: true  //开启深度检测
}
```
21. 使用了箭头函数，this指向上一级
22. 标签通过ref属性可用来获取
```
<p ref="box">box</p>
<p ref="pox">pox</p>
<p ref="box">box</p>
this.$refs是对象类型，隐藏同名的属性值后面的会覆盖前面的，得到的是最后一个box元素,如果与v-for一起使用，则是数据类型，不会覆盖
this.arr = [1,2,3,4,5];  //在mounted修改了数据，虽然在页面显示了，但下面得到的还是修改前的，因为Vue修改DOM是异步的，如果需要获取修改后的数据，可使用
console.log(this.$refs.p.length);
this.$nextTick(() => {  //得到的是修改后的数据，一般mounted都在这里操作数据
    console.log(this.$refs.p.length);
});
```
23. vue的事件对象$event,如<p @click="fn2($event,2)">事件传参</p>
24. v-if为false时不渲染元素,v-show为false时渲染元素添加display:none所以性能高于v-if
25. 模板(template)里只能有一个根节点，如果两个根节点，会报错

### 组件
1. 父组件给子组件传参，子组件使用props接收,传递的数据类型可以是数字，布尔值，对象，数组等,可以进行数据类型验证与设置默认值
2. 子组件传参给父组件，可通过子组件的事件订阅来触发父组件自定义的事件来修改父组件的数据,可使用sync快速的同步数据到父组件,只是修改数据时使用sync方便，如果还是其他事件处理则不合适
3. 父组件操作子组件的方法：通过ref属性得到子组件节点，然后可去操作子组件里定义的方法与属性
4. 组件之间的传值：$root、$parent、$children
```
1、子组件接收父组件传递的数据
props:{
    users:{           //这个就是父组件中子标签自定义名字
      type:Array,
      required:true
    }
}
2、子组件向父组件传值（通过事件形式）
子组件
changeTitle() {
  this.$emit("titleChanged","子向父组件传值");//自定义事件  传递值“子向父组件传值”
}
父组件
<app-header titleChanged="updateTitle" ></app-header>//与子组件titleChanged自定义事件保持一致
methods:{
    updateTitle(e){   //声明这个函数
        this.title = e;
    }
},
3、$parent / $children与 ref 进行组件间的通信
ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
$parent / $children：访问父 / 子实例
4、$emit/$on，通过一个空的Vue实例作为中央事件总线（事件中心），用它来触发事件和监听事件,巧妙而轻量地实现了任何组件间的通信，包括父子、兄弟、跨级。当我们的项目比较大时，可以选择更好的状态管理解决方案vuex。
```
### 路由
1. `keep-alive`使用
```
keep-alive缓存了每个页面的组件数据，重新进入不会触发生命周期的一些事件，如果指定页面不进行缓存，需要每次进入都重新加载数据，则需在路由js文件里设置
需要缓存的页面添加meta属性
{
	path: '/cart',
	name: 'Cart',
	component: Cart,
	meta: {keepAlive: true}
},
然后在App.vue中进行判断
<keep-alive>
  <router-view v-if="$route.meta.keepAlive" />
</keep-alive>
<router-view v-if="!$route.meta.keepAlive" />
```
2. 使用push进入的页面有返回按钮，使用replace进入的页面没有返回按钮
3. push、replace、go的区别
```
push:跳转到指定URL，向history栈添加一个新的记录，点击后退会返回至上一个页面
replace:跳转到指定URL，替换history栈中最后一个记录，点击后退会返回至上上一个页面
go(n)向前或向后跳转n个页面，n可正（先后跳转）可负（向前跳转）
如：this.$router.replace({path: this.path});
```
4. $route与$router的区别
```
$route 是“路由信息对象”，包括 path，params，hash，query，fullPath，matched，name 等路由信息参数。
$router 是“路由实例”对象，即使用 new VueRouter创建的实例，包括了路由的跳转方法，钩子函数等。
```
5. 使用watch根据路由的变化，获取参数去请求数据
```
watch: {
    $route(){
        console.log(this.$route.params)
    }
}
```
### vuex

