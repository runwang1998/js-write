//给一个数组如[1,2,3,4,5]，每隔一秒打印，打印完执行函数cb
const fn = (arr, cb) => {

    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
            console.log(arr[i])
            if (i === arr.length - 1)
                cb()
        }, 1000 * i)
    }
}

fn([1, 2, 3, 4, 5], () => { console.log('打印完成') })