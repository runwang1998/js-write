// 倒计时的方法
function countdown(targetDate, callback) {
    const timer = setInterval(() => {
        // 获取当前时间戳
        const now = new Date().getTime();
        // 解析截止日期时间戳
        targetDate = new Date(targetDate).getTime()
        const distance = targetDate - now;
        // 结束倒计时
        if (distance <= 0) {
            clearInterval(timer);
            if (callback) {
                callback({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    ended: true
                });
            }
        } else {
            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if (callback) {
                callback({
                    days,
                    hours,
                    minutes,
                    seconds,
                    ended: false
                });
            }
        }
    }, 1000);
}


//use in compoent

// 到期时间
let endTime = '2025-03-27 09:10:00'
// this.countdown(endTime, (countdownResult) => { // 回调
//     if (countdownResult.ended) {
//         // console.log("倒计时结束");
//     } else {
//         // 赋值时分秒
//         this.days = countdownResult.days;
//         this.hours = countdownResult.hours;
//         this.minutes = countdownResult.minutes;
//         this.seconds = countdownResult.seconds;
//     }
// });


countdown(endTime, (e) => {
    console.log(e)
})