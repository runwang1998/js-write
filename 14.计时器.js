// settimeout实现一个setinterval

const intervalFn = (cb, delay) => {
    let flag = true

    const repeatfn = () => {
        if (!flag) return
        cb()
        setTimeout(repeatfn, delay)
    }

    setTimeout(repeatfn, delay);
    return () => { flag = false }
}

const stopfn = intervalFn(() => { console.log(1) }, 500)

setTimeout(() => {
    stopfn()
    console.log('结束')
}, 2100)