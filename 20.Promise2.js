// promise.all
// 接收一个Promise数组，所有结果resolved后按顺序返回一个结果数组
// 当有一个promise被reject后返回一个失败的promise，值为这个失败promise的返回值
Promise._all = (promises) => {
    return new Promise((rs, rj) => {
        let ans = []
        for (let i = 0; i < promises.length; i++) {
            if (!(promises[i] instanceof Promise))
                promises[i] = Promise.resolve(promises[i])
            promises[i].then(res => {
                ans[i] = res
                if (ans.length === promises.length) {
                    rs(ans)
                }
            }
            ).catch(error =>
                rj(error)
            )
        }
    })
}

let a = new Promise((rs) => {
    setTimeout(() => {
        rs(1)
    }, 1000);
})
let b = Promise.resolve(3)
let c = Promise.resolve(5)
let d = Promise.resolve(2)
let f = 7
let e = Promise.reject(555)

// Promise._all([a, b, d, c, f]).then(res => {
//     console.log(res)
// }
// ).catch(err => {
//     console.log(err)
// }
// )

//promise.race
//当一个promise结束后，立刻更新整个promise状态

Promise._race = (promises) => {
    return new Promise((rs, rj) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i]
                .then(res => rs(res))
                .catch(error => rj(error))
        }
    })
}

// Promise._race([a, b, d, c, e]).then(res => {
//     console.log(res)
// }
// ).catch(err => {
//     console.log(err)
// }
// )

//promise.any
// any和all相反，只要有一个元素状态为resolve就直接返回那一个resolve对象并用一个新的promise对象包裹且设置对应的状态
// 全为rejected则返回整个数组也是promise对象包裹且状态设置为rejected

// Promise.allSettled
// 返回所有任务的状态，无论成功或失败

Promise._allSettled = (promises) => {
    return new Promise((rs, rj) => {
        let ans = []
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(res => {
                ans[i] = { status: 'fulfilled', value: res }
            }).catch(err => {
                ans[i] = { status: 'fulfilled', value: err }
            }).finally(() => {
                if (ans.length === promises.length) {
                    rs(ans)
                }
            })
        }
    })
}

Promise._allSettled([a, b, d, c, e]).then(res => {
    console.log(res)
}
).catch(err => {
    console.log(err)
}
)
