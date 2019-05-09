import Utils from "../common/utils.js"
const ROOTCLASS = 'root-class'

const DoComponent = function(obj) {
  if (!obj.classes || !Array.isArray(obj.classes))
    obj.classes = []
  obj.classes.push(ROOTCLASS)
  obj.externalClasses = obj.classes

  let created = obj.created
  obj.created = function(params) {
    miniProgramRouter.call(this, params)
    created && created(params)
  }
  return Component(obj)
}

function miniProgramRouter(url, params) {
  this.navigateTo = function() {
    
  }
  const a = Utils.obj2Hash({
    a: 1,
    b: {
      c: 10
    }
  })
  // this.navigateTo = function (url, params) {
  //   Utils.obj2Hash()
  // }
}
export default DoComponent
