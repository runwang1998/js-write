//休眠函数，中断程序在delay后再执行
const sleep = (delay = 2000) => {
    let curtime = new Date().getTime()
    while (true) {
        if (new Date().getTime() - curtime > delay)
            return
    }
}

console.log(1)
sleep()
console.log(2)

function sleep1(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    })
}
sleep1(1000).then(() => {
    console.log(222);
})