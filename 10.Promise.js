//Promise核心
// 它有3个状态，pending、fulfilled、rejected，一经改变不可逆转
// new Promise接受一个executor()执行器，并立即执行
// executor接受resolve和reject
// then方法，接受2个参数，成功执行参数1，onFulfilled，参数是成功的值value；失败执行参数2， onRejected，参数是失败的值reason;
// then链式调用，值的穿透
// catch、finally
// all，race，any，allsettled常用方法

//定义promise状态
const PROMISE_STATUS_PENDING = 'PENDING'
const PROMISE_STATUS_FULFILLED = 'FULFILLED'
const PROMISE_STATUS_REJECTED = 'REJECTED'

class MyPromise {
    constructor(executor) {
        this.status = PROMISE_STATUS_PENDING
        const resolve = () => {
            // 只有处于初始状态才能执行，状态已发生变化则锁死不执行
            if (this.status === PROMISE_STATUS_PENDING) {
                // 改变状态：fulfilled
                this.status = PROMISE_STATUS_FULFILLED
                console.log("resolve被调用")
            }
        }

        const reject = () => {
            // 只有处于初始状态才能执行，状态已发生变化则锁死不执行
            if (this.status === PROMISE_STATUS_PENDING) {
                // 改变状态：rejected
                this.status = PROMISE_STATUS_REJECTED
                console.log("reject被调用")
            }
        }

        executor(resolve, reject)
    }
}