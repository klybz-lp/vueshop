import Mock from "mockjs"

//配置
Mock.setup({
    timeout: 100 //延时1s返回数据
})

//使用mockjs模拟数据
Mock.mock('/api/getUser', {
    "code":1,
    "msg": "ok",
    "result":
      {
        "mtime": "@datetime",//随机生成日期时间
        "score|1-800": 800,//随机生成1-800的数字
        "rank|1-100":  100,//随机生成1-100的数字
        "stars|1-5": 5,//随机生成1-5的数字
        "nickname": "@cname",//随机生成中文名字
      }
});

Mock.mock('/api/getList', {
  "code":1,
  "msg": "ok",
  "result":
    [
      {
        id: 1,
        name: '夏凉必备'
      },
      {
          id: 2,
          name: '新品首发'
      },
      {
          id: 3,
          name: '甄选爆款'
      },
      {
          id: 4,
          name: '清洁电器'
      },
      {
          id: 5,
          name: '衣物护理'
      },
      {
          id: 6,
          name: '两季电器'
      },
      {
          id: 7,
          name: '空气调节'
      },
      {
          id: 8,
          name: '头发护理'
      }
    ]
});

// Mock.mock('/api/getGoodsList', {
//   "code":1,
//   "msg": "ok",
//   "result":
//     [
//       {
//         id: 1,
//         name: '儿童网眼运动凉鞋儿童网眼运动凉鞋（宽松版）',
//         pic: require("../assets/images/goods_01.png"),
//         price: "128"
//       },
//       {
//         id: 2,
//         name: '儿童小萌象系列湿巾',
//         pic: require("../assets/images/goods_02.png"),
//         price: "18"
//       },
//       {
//         id: 3,
//         name: '动物生日派对主题爬行垫',
//         pic: require("../assets/images/goods_03.png"),
//         price: "229"
//       },
//       {
//         id: 4,
//         name: '自嗨小天地，可折叠游戏围栏',
//         pic: require("../assets/images/goods_04.png"),
//         price: "629"
//       },
//       {
//         id: 5,
//         name: '网易有道词典笔',
//         pic: require("../assets/images/goods_05.png"),
//         price: "799"
//       },
//       {
//         id: 6,
//         name: '儿童豪华型学习桌椅',
//         pic: require("../assets/images/goods_06.png"),
//         price: "2899"
//       },
//       {
//         id: 7,
//         name: '弱酸性手口湿巾',
//         pic: require("../assets/images/goods_07.png"),
//         price: "9"
//       },
//       {
//         id: 8,
//         name: '日本乳霜纸巾',
//         pic: require("../assets/images/goods_08.png"),
//         price: "18"
//       },
//       {
//         id: 9,
//         name: '海量鲸吸婴儿拉拉裤学步裤',
//         pic: require("../assets/images/goods_09.png"),
//         price: "55"
//       },
//       {
//         id: 10,
//         name: '海量鲸吸婴儿纸尿裤尿不湿',
//         pic: require("../assets/images/goods_10.png"),
//         price: "55"
//       },
//     ]
// });