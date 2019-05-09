const Mock = require('../../utils/mock-min.js')

Page({
  data: {
    list: []
  },
  onLoad(options) {
    let a = Mock.mock({
      "array|5-10": [
        {
          url: Mock.Random.image('50x50'),
          text: Mock.mock('@cname()')
        }
      ]
    })
    this.setData({
      list: a.array
    })
    console.log(a)
  },

  onReady() {

  },
  onShow() {

  },
})