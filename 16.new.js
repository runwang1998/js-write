// 手写new操作符

const _new = (fn, ...args) => {
    if (typeof fn !== 'function') return false
    // 创建一个空对象
    let newobj = {}
    //空对象的隐式原型指向构造函数fn的显式原型
    newobj.__proto__ = fn.prototype
    //构造函数fn的this指向空对象
    let _resobj = fn.apply(newobj, args)
    // 4. 如果构造函数返回一个对象 , 则返回该对象 ; 否则返回这个新创建的对象
    return _resobj instanceof Object ? _resobj : obj;
}