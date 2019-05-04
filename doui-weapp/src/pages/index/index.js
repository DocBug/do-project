//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad() {
    wx.request({
      url: 'http://localhost:3000/api/swiperData',
      success(res) {
        console.log('success:', res)
      },
      fail(err) {
        console.log('fail:', err)
      }
    })
  },
})
