//index.js
//获取应用实例
const app = getApp()
const order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    //菜单数据
    menu: [
      {
        color:'#fd9d21',
        label:'美食',
      },
      {
        color: '#ff6767',
        label: '猫眼电影',
      },
      {
        color: '#8a90fa',
        label: '酒店',
      },
      {
        color: '#fed030',
        label: '休闲娱乐',
      },
      {
        color: '#fd9d21',
        label: '外卖',
      },
      {
        color: '#fed030',
        label: 'KTV',
      },
      {
        color: '#4dc6ee',
        label: '周边游',
      },
      {
        color: '#ff80c2',
        label: '丽人',
      },
      {
        color: '#fd9d21',
        label: '小吃快餐',
      },
      {
        color: '#A8DD99',
        label: '生活服务',
      }
    ],

    //轮播图数据
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 300,
    // 酒店数据
    hotal: [
      {
        name:'七天连锁酒店',
        num:'4.9',
        address:'劲松/潘家园/双井',
        price:'180',
        tag:['商务出行','温馨']
      },
      {
        name: '何所有酒店',
        num: '5.0',
        address: '劲松/潘家园/宋家庄',
        price: '180',
        tag: ['商务出行', '温馨']
      },
      {
        name: '速8酒店',
        num: '4.9',
        address: '劲松/潘家园/刘家窑',
        price: '180',
        tag: ['商务出行', '温馨']
      },
      {
        name: '如家酒店',
        num: '4.8',
        address: '石榴庄/赵公口/宋家庄',
        price: '180',
        tag: ['商务出行', '温馨']
      }
    ]
  },
  // upper(e) {
  //   console.log(e)
  // },
  // lower(e) {
  //   console.log(e)
  // },
  // scroll(e) {
  //   console.log(e)
  // },
  // tap(e) {
  //   for (let i = 0; i < order.length; ++i) {
  //     if (order[i] === this.data.toView) {
  //       this.setData({
  //         toView: order[i + 1]
  //       })
  //       break
  //     }
  //   }
  // },
  // tapMove(e) {
  //   this.setData({
  //     scrollTop: this.data.scrollTop + 10
  //   })
  // }
})
