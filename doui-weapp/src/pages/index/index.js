//index.js
//获取应用实例
const app = getApp()
const host = 'http://localhost:3000/'
Page({
  data: {
    items: ['../../static/images/1.jpg', '../../static/images/2.jpg', '../../static/images/3.jpg']
  },
  onLoad() {
    let that = this
    // wx.request({
    //   url: 'http://localhost:3000/api/swiperData',
    //   success(res) {
    //     that.setData({
    //       items: res.data.map(item => host + item)
    //     })
    //   },
    //   fail(err) {
    //     console.log('fail:', err)
    //   }
    // })

  },

  onReady() {
  }
})
