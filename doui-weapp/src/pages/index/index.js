//index.js
//获取应用实例
const app = getApp()
const host = 'https://www.diseaseout.cn/'
Page({
  data: {
    items: []
  },
  onLoad() {
    console.log('starttime:', Date.now())
    let that = this
    let items = [
      'https://img.bitzane.cn/images/1901/2019/05/sL3wK3GhHDwAlhDdaKh0lKadhSa0Vj.jpg',
      'https://img.bitzane.cn/images/1901/2019/05/tg7Od4YoTydVggw7gD2OOwGswT4fFo.jpg',
      'https://img.bitzane.cn/images/1901/2019/05/n60h9Eb56edbIdg0E7gMbz4B9bv0Eg.jpg'
    ]
    that.setData({
      items: ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'].map(item => host + item)
    })
    // let starttime
    // console.log('starttime:', starttime = Date.now())
    // wx.getImageInfo({
    //   src: 'https://img.bitzane.cn/images/1901/2019/05/sL3wK3GhHDwAlhDdaKh0lKadhSa0Vj.jpg',
    //   success() {
    //     console.log('endtime1:', Date.now() - starttime)
    //   }
    // })
    // wx.getImageInfo({
    //   src: 'https://img.bitzane.cn/images/1901/2019/05/tg7Od4YoTydVggw7gD2OOwGswT4fFo.jpg',
    //   success() {
    //     console.log('endtime2:', Date.now() - starttime)
    //   }
    // })
    // wx.getImageInfo({
    //   src: 'https://img.bitzane.cn/images/1901/2019/05/n60h9Eb56edbIdg0E7gMbz4B9bv0Eg.jpg',
    //   success() {
    //     console.log('endtime3:', Date.now() - starttime)
    //   }
    // })
  },

  onReady() {
  }
})
