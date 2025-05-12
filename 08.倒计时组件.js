//传入endtime,servertime,endcallback 实现一个倒计时组件,每秒更新一次

const fn = (endtime, servertime, cb) => {
    let endT = new Date(endtime).getTime()

    let timer = setInterval(() => {
        let nowT = new Date().getTime()

        let timeRemain = endT - nowT

        if (timeRemain <= 0) {
            clearInterval(timer)
            cb('倒计时结束')
            return
        }

        const days = Math.floor(timeRemain / (1000 * 60 * 60 * 24))
        const hours = Math.floor(timeRemain % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const minutes = Math.floor((timeRemain % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeRemain % (1000 * 60)) / 1000)

        cb(`当前还剩${days}天${hours}小时${minutes}分钟${seconds}秒`)

    }, 1000)

    // 返回停止函数
    return () => clearInterval(timer);
}


fn('2025-05-31 23:23:46', '', (e) => console.log(e))