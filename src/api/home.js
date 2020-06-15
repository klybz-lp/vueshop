/**
  * home模块接口列表
  */

 import base from './base'; // 导入接口域名列表
 import axios from '@/utils/http'; // 导入http中创建的axios实例
 import qs from 'qs'; // 根据需求是否导入qs模块
 
 const home = {
     // 首页轮播图
     getBanner () {
         return axios.get(`${base.sq}/getBanner`);
     },
     // 用户信息
     getUser () {
        return axios.get(`${base.sq}/getUser`);
    },
     // 新闻详情,演示
    //  articleDetail (id, params) {
    //      return axios.get(`${base.sq}/topic/${id}`, {
    //          params: params
    //      });
    //  },
     // post提交
    //  login (params) {
    //      return axios.post(`${base.sq}/accesstoken`, qs.stringify(params));
    //  }
     // 其他接口…………
 }
 
 export default home;