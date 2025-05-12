//函数的返回值会被缓存下来只执行一次

let once = (fn) => {
    let res, isFirst = true
    return function (...args) {
        if (!isFirst) return res
        res = fn.call(this, ...args)
        isFirst = false
        return res
    }
}