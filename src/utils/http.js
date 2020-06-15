/**
  * axios封装
  * 请求拦截、响应拦截、错误统一处理
  */
 import axios from 'axios';
 //import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据
 import router from '../router';
 import store from '../store/index';
 import { Toast } from 'vant';

 // 环境的切换
// if (process.env.NODE_ENV == 'development') {
//     axios.defaults.baseURL = '';
//     require("@/api/mock.js")  //开发环境下引入mockjs
// }
// else if (process.env.NODE_ENV == 'production') {
// 	axios.defaults.baseURL = 'http://qywx.xydec.cn';
// }

//axios.defaults.timeout = 10000;  //设置请求超时时间
 
 /**
   * 提示函数
   * 禁止点击蒙层、显示一秒后关闭
   */
 const tip = msg => {
     Toast({
         message: msg,
         duration: 1000,
         forbidClick: true
     });
 }
 
 /**
   * 跳转登录页
   * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
   */
 const toLogin = () => {
     router.replace({
         path: '/login',
         query: {
             redirect: router.currentRoute.fullPath
         }
     });
 }
 
 /**
   * 请求失败后的错误统一处理
   * @param {Number} status 请求失败的状态码
   */
 const errorHandle = (status, other) => {
     console.log(status)
     // 状态码判断
     switch (status) {
         // 401: 未登录状态，跳转登录页
         case 401:
             toLogin();
             break;
         // 403 token过期
         // 清除token并跳转登录页
         case 403:
             tip('登录过期，请重新登录');
             localStorage.removeItem('token');  //清除本地缓存数据
             store.commit('loginSuccess', null);  //清除vuex的登录状态
             setTimeout(() => {
                 toLogin();
             }, 1000);
             break;
         // 404请求不存在
         case 404:
             tip('请求的资源不存在');
             break;
        // 500服务器错误
         case 500:
            tip('服务器错误');
            break;
         default:
             console.log(other);
         }}
 
 // 创建axios实例，请求超时时间为10s
 var instance = axios.create({timeout: 1000 * 10});
 // 设置post请求头
 instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
 /**
   * 请求拦截器
   * 登录流程控制中，根据本地是否存在token判断用户的登录情况，但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token，后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码，而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
   * 每次请求前，如果存在token则在请求头中携带token
   * 一般是在登录完成之后，将用户的token通过localStorage或者cookie存在本地，然后用户每次在进入页面的时候（即在main.js中），会首先从本地存储中读取token，如果token存在说明用户已经登陆过，则更新vuex中的token状态。然后，在每次请求接口的时候，都会在请求的header中携带token，后台人员就可以根据你携带的token来判断你的登录是否过期，如果没有携带，则说明没有登录过,如果是不需要token就可以访问的页面，在后台不接收即可
   */
 instance.interceptors.request.use(
     config => { //箭头函数
         const token = store.state.token;
         token && (config.headers.Authorization = token);  //在请求头上添加Authorization参数，值为token
         //console.log(config)
         return config;
     },
     error => Promise.error(error)
);
 
 /**
  * 响应拦截器
  */
instance.interceptors.response.use(function (response) {
    // 请求成功
    if(response.status === 200){
        let data = response.data;
        if(data.code == 0){
            tip(data.message);
        } else {
            return Promise.resolve(data)
        }
    } else {
        Promise.reject(response);
    }
}, function (error) {
    // 请求失败
    const { response } = error;
    if (response) {
        // 请求已发出，但是不在2xx的范围
        errorHandle(response.status, response.data.message);
        return Promise.reject(response);  
    } else {
        // 处理断网的情况
        // eg:请求超时或断网时，更新state的network状态
        // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
        // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
        store.commit('changeNetwork', false);
    }
});
 
 export default instance;