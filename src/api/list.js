/**
  * list模块接口列表
  */

 import base from './base'; // 导入接口域名列表
 import axios from '@/utils/http'; // 导入http中创建的axios实例
 import qs from 'qs'; // 根据需求是否导入qs模块
 
 const list = {
     // 商品列表
     getGoodsList (id, params) {
         return axios.get(`${base.sq}/getGoodsList/${id}`,{
            params
         });
     },
     // 商品分类
     getList () {
        return axios.get(`${base.sq}/getList`);
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
 
 export default list;