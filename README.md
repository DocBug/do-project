# do-weapp

## 基础组件

## 布局组件

## 功能组件

### Swiper

> 示例：

|          参数           | 类型             | 默认                | 描述                                                         |
| :---------------------: | ---------------- | ------------------- | :----------------------------------------------------------- |
|          items          | Array            | []                  | 当 useslot 为 false 时，items 就是存放图片的数据列表         |
|          width          | String \| Number | 100%                | swiper 的宽度(数字默认单位px)                                |
|         height          | String \| Number | 150px               | swiper 的高度(数字默认单位px)                                |
|   adapt-image-height    | Boolean          | false               | 当为 true 时，会自适应改变高度                               |
|         useslot         | Boolean          | false               | 只想用其中的部分效果，此项置 true, 就可以在 do-swiper 使用自己的 swiper-item |
|     indicator-dots      | Boolean          | false               | 是否显示指示点                                               |
|     indicator-color     | String           | "rgba(0, 0, 0, .3)" | 指示点的默认颜色                                             |
| indicator-active-color  | String           | "#000000"           | 当前active的指示点的颜色                                     |
|        autoplay         | Boolean          | false               | 是否自动轮播                                                 |
|         current         | Number           | 0                   | 当前所在滑块的 index                                         |
|        interval         | Number           | 5000(ms)            | 自动切换时间间隔                                             |
|        duration         | Number           | 500(ms)             | 滑动动画时长                                                 |
|        circular         | Boolean          | false               | 是否采用衔接滑动                                             |
|        vertical         | Boolean          | false               | 滑动方向是否为纵向                                           |
|     previous-margin     | Number \| String | "0px"               | 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值 以及数字，数字默认为 px |
|       next-margin       | Number \| String | "0px"               | 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值 以及数字，数字默认为 px |
| display-multiple-items  | Number           | 1                   | 同时显示的滑块数量                                           |
| skip-hidden-item-layout | Boolean          | false               | 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息 |
|     easing-function     | String           | "default"           | 指定 swiper 切换缓动动画类型，五种类型。                     |

| easing-function | 默认缓动函数 |
| --------------- | ------------ |
| default         | 默认缓动函数 |
| linear          | 线性动画     |
| easeInCubic     | 缓入动画     |
| easeOutCubic    | 缓出动画     |
| easeInOutCubic  | 缓入缓出动画 |