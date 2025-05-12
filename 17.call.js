// 手写call

Function.prototype._call = function (ctx, ...args) {
    if (ctx === undefined || ctx === null) {
        ctx = globalThis  //关键字，node中 -> global，浏览器中 -> window
    } else {
        ctx = Object(ctx)  //将原始类型转换成对象类型
    }

    let key = Symbol()   //创建一个唯一对象
    ctx[key] = this //this -> fn

    //用这种方式定义symbol不会显示出来
    // Object.defineProperty(ctx, key, {
    //     value: this,
    //     enumerable: false
    // })

    const res = ctx[key](...args)   //通过ctx来调用原函数，使原函数的this指向ctx
    delete ctx[key]

    return res
}

// 手写apply，接收一个数组
Function.prototype._apply = function (ctx, args) {
    if (ctx === undefined || ctx === null) {
        ctx = globalThis  //关键字，node中 -> global，浏览器中 -> window
    } else {
        ctx = Object(ctx)  //将原始类型转换成对象类型
    }

    let key = Symbol()   //创建一个唯一对象
    ctx[key] = this //this -> fn

    //用这种方式定义symbol不会显示出来
    // Object.defineProperty(ctx, key, {
    //     value: this,
    //     enumerable: false
    // })

    const res = ctx[key](...Array.from(args))   //通过ctx来调用原函数，使原函数的this指向ctx
    delete ctx[key]

    return res
}

// 手写bind
Function.prototype._bind = function (ctx, ...args) {
    let that = this
    return function () {
        return that._call(ctx, ...args)
    }
}

