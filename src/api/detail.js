/**
  * detail模块接口列表
  */

 import base from './base'; // 导入接口域名列表
 import axios from '@/utils/http'; // 导入http中创建的axios实例
 import qs from 'qs'; // 根据需求是否导入qs模块
 
 const detail = {
     // 商品详情
     getDetail (id, params) {
         return axios.get(`${base.sq}/getDetail/${id}`,{
            params
         });
     },
 }
 
 export default detail;