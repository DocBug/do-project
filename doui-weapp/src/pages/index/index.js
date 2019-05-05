//index.js
//获取应用实例
const app = getApp()
const host = 'http://localhost:3000/'
Page({
  data: {
    items: []
  },
  onLoad() {
    let that = this
    wx.request({
      url: 'http://localhost:3000/api/swiperData',
      success(res) {
        that.setData({
          items: res.data.map(item => host + item)
        })
      },
      fail(err) {
        console.log('fail:', err)
      }
    })
  },

  onReady() {
  }
})
