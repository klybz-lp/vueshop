import axios from "axios"
if(process.env.NODE_ENV == "development") require("@/api/mock.js")  //开发环境下引入mockjs
//axios.defaults.baseURL = "http://qywx.xydec.cn";  //设置请求的基础地址，vue.config.js设置了代理时取消
axios.interceptors.response.use((data) => data.data);  //直接返回服务器返回的数据

export let getBanner = () => {
    return axios.get("/api/getBanner");
}

export let getUser = () => {
    return axios.get("/api/getUser");
}