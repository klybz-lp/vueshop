/**
  * api接口的统一出口
  * index.js是一个api的出口，base.js管理接口域名，其他js则用来管理各个模块的接口。
  */
 if(process.env.NODE_ENV == "development") require("@/api/mock.js")  //开发环境下引入mockjs,拦截请求，返回随机的模拟数据
 // 首页模块接口
import home from '@/api/home'
 // 列表模块接口
import list from '@/api/list'
// 详情模块接口
import detail from '@/api/detail';
// 其他模块的接口……

// 导出接口
export default {
    home,
    list,
    detail,
}