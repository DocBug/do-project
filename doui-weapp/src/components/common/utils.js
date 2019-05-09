
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

  /* 对象转换成路由后面的数据 */
  static obj2Hash(obj) {
    if (!Utils.isObject(obj))
      throw new TypeError('obj2Hash function need a object parameter, not null, array and so on')
    let params = ''
    Object.keys(obj).forEach(item => {
      let value = obj[item] !== null && typeof obj[item] === 'object' ? JSON.stringify(obj[item]) : obj[item]
      params = params + `${item}=${value}&`
    })
    
    params = '/' + params
    return params.slice(0, -1)
  }
  // 判断是否为对象
  static isObject(obj) {
    return typeof obj !== 'object' || obj === null || Array.isArray(obj) ? false : true
  }

}

export default Utils