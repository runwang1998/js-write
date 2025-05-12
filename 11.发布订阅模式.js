// 通过事件总线，发布者和订阅者进行解耦，彼此不知道对方的存在，由中间层代理转发

class EventEmitter {
    constructor() {
        // 用一个 Map 来存储事件名和对应的订阅者回调函数数组
        // { eventName1: [callback1, callback2], eventName2: [callback3] }
        this.events = new Map()
    }
    // 绑定监听事件
    on(eventname, fn) {
        if (!this.events.has(eventname)) {
            this.events.set(eventname, [])
        }
        this.events.get(eventname).push(fn)
        return this    //方便链式调用
    }
    // 触发事件，执行事件回调数组中的所有函数
    emit(eventname, ...args) {
        if (!this.events.has(eventname)) {
            return this
        }
        this.events.get(eventname).forEach(fn => {
            fn.apply(this, args)
        });
        return this    //返回this支持链式调用
    }
    // 解绑某个事件的调用，支持取消事件中某个函数的调用或解除整个事件的绑定
    off(eventname, fn = null) {
        if (!this.events.has(eventname)) {
            return this
        }
        if (typeof fn === 'function') {
            //移除特定的回调函数
            this.events.set(eventname, this.events.get(eventname).filter(i => i !== fn))
            return this
        }
        //移除整个事件
        this.events.delete(eventname)
        return this
    }
    // 只绑定一次，执行后取消订阅
    once(eventname, fn) {
        const fn1 = (...args) => {
            this.off(eventname, fn1)
            fn.apply(this, args)
        }
        this.on(eventname, fn1)
        return this
    }
}