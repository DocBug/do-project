import DoComponent from "../common/baseComponent"
import Utils from "../common/utils.js"

DoComponent({

  properties: {
    width: {
      type: [Number, String],
      value: '100%'
    },
    height: {
      type: [Number, String],
      value: 150
    },
    // items, 每张图片
    items: {
      type: Array,
      value: [],
      observer() {
        let that = this
        let { adaptImageHeight, items, current, heightList } = this.data
        try{
          if (adaptImageHeight) {
            items.forEach((item, index) => { 
              wx.getImageInfo({
                src: item,
                success(data) {
                  console.log(`getImageInfo${index}:`, Date.now())
                  let {width: originWidth, height: orightHeight} = data
                  Utils.getNodeField.bind(that)(`.do-swiper-image${index}`).then(({ width }) => {
                    that.setData({
                      [`heightList.${index}`]: Utils.getDynaticImageHeight(originWidth, orightHeight, width)
                    })
                    wx.showToast({
                      title: JSON.stringify(heightList),
                    })
                    if (items.length === Object.keys(heightList).length) {
                      that.setData({
                        height: heightList[current]
                      })
                      
                      console.log('endtime:', Date.now())
                    }
                  })
                }
              })
            })
          }
        } catch (e) {
          wx.showToast({
            title: '出错了。',
          })
        }
      }
    },
    type: {
      type: Number,
      observer(newVal) {
        if (newVal) {
          this.setData({
            previousMargin: '40px',
            nextMargin: '40px'
          })
        }
      }
    },
    // 是否显示面板指示点
    indicatorDots:{
      type: Boolean,
      value: false
    },
    // 指示点颜色
    indicatorColor: {
      type: String,
      value: 'rgba(0, 0, 0, .3)'
    },
    // 当前选中的指示点颜色
    indicatorActiveColor: {
      type: String,
      value: '#000000'
    },
    // 是否自动切换
    autoplay: {
      type: Boolean,
      value: false
    },
    // 当前所在滑块的 index
    current: {
      type: Number,
      value: 0
    },
    // 自动切换时间间隔
    interval: {
      type: Number,
      value: 5000
    },
    // 滑动动画时长
    duration: {
      type: Number,
      value: 500
    },
    // 是否采用衔接滑动
    circular: {
      type: Boolean,
      value: false
    },
    // 滑动方向是否为纵向
    vertical: {
      type: Boolean,
      value: false
    },
    // 前边距，可用于露出前一项的一小部分
    previousMargin: {
      type: String,
      value: "0px"
    },
    // 后边距，可用于露出后一项的一小部分
    nextMargin: {
      type: String,
      value: "0px"
    },
    // 同时显示的滑块数量
    displayMultipleItems: {
      type: Number,
      value: 1
    },
    // 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息
    skipHiddenItemLayout: {
      type: Boolean,
      value: false
    },
    /*
      指定 swiper 切换缓动动画类型: default	默认缓动函数 linear	线性动画
      easeInCubic	缓入动画 easeOutCubic	缓出动画 easeInOutCubic	缓入缓出动画
    */
    easingFunction: {
      type: String,
      value: "default"
    },
    // 图片自适应高度
    adaptImageHeight: {
      type: Boolean,
      value: false
    },
    useslot: {
      type: Boolean,
      value: false
    }
  },

  observers: {
  },

  data: {
    heightList: {}
  },

  methods: {
    // 滑动事件
    onChange(e) {
      let { adaptImageHeight, heightList } = this.data
      let { current } = e.detail
      if (adaptImageHeight) {
        this.setData({
          current,
          height: heightList[current]
        })
      }
      this.triggerEvent('change', e)
    }
  },

  created() {
  }
})

/*
bindchange	eventhandle		否	current 改变时会触发 change 事件，event.detail = {current, source}	1.0.0
bindtransition	eventhandle		否	swiper-item 的位置发生改变时会触发 transition 事件，event.detail = {dx: dx, dy: dy}	2.4.3
bindanimationfinish	eventhandle		否	动画结束时会触发 animationfinish 事件，event.detail 同上	1.9.0
*/