class Utils {

  static getDynaticImageHeight(originWidth, originHeight, showWidth) {
    let radio = showWidth / originWidth
    return originHeight * radio
  }
  /* 获取元素属性 */
  static getNodeField(nodeName, styles = [], properties = []) {
    let defaultFields = {
      dataset: true,
      size: true,
      scrollOffset: true,
      context: true,
      properties,
      computedStyle: styles
    }

    return new Promise(resolve => {
      this.createSelectorQuery().select(nodeName).fields(defaultFields, function (data) {
        console.log('getData', Date.now())
        resolve(data)
      }).exec()
    })
  }

}

export default Utils