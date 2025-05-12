//防抖 -- 单位时间内只执行最后一次操作
// exp -- 编辑器记录编辑，搜索栏触发搜索，鼠标快速点击，监听页面onresize

function debounce(fn, delay) {
    let timer = null
    return function (...args) {
        //已经有了timer
        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            fn.call(this, ...args)
        }, delay)
    }
}

//节流 -- 单位时间只执行第一次操作
//exp -- 监听页面滚动，鼠标移动，游戏中的按键逻辑

function throttle(fn, delay) {
    let timer = null
    return function (...args) {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            fn.call(this, ...args)
            timer = null
        }, delay)
    }


}