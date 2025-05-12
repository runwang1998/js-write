// 原型链实现instanceof

// 1.如果 value 为基本数据类型直接返回 false
// 2.判断 Fn.prototype 是否在 value 的隐式原型链上

const _instanceof = (value, fn) => {
    if (typeof value !== 'object' || typeof value === null)
        return false
    //实例的隐式原型
    let valueProto = value.__proto__
    //构造函数/类的显式原型
    let fnProto = fn.prototype

    //一直从实例的原型链往上找，直到找到原型链最顶端 Object.prototype
    while (true) {
        if (valueProto === null)
            return false
        if (valueProto === fnProto)
            return true
        valueProto = valueProto.__proto__
    }
}