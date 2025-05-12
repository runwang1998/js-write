// 观察者直接订阅主题，主题更新后直接通知每个观察者

// 目标对象
class Subject {
    constructor() {
        this.observers = []  //观察者数组
    }

    //新增观察者
    add(observer) {
        this.observers.push(observer)
    }

    //通知观察者
    notify() {
        this.observers.forEach(observer => {

            observer.update()

        })
    }

    //移除观察者
    remove(observer) {
        const idx = this.observers.findIndex(itm => itm === observer)
        if (idx !== -1) {
            this.observers.splice(idx, 1)
        }
    }
}

// 观察者
class Observer {
    constructor(name) {
        this.name = name
    }

    update() {
        console.log(`${this.name} updated`)
    }
}

const subject = new Subject()
const o1 = new Observer('Nina')
const o2 = new Observer('Jack')

subject.add(o1)
subject.add(o2)

console.log('第一次通知：')
subject.notify()

subject.remove(o1)

console.log('删除 Nina 后，再次通知：')
subject.notify()
