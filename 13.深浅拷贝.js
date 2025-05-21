// 浅拷贝

const shallowcopy = (obj) => {
    //判断是否为引用数据类型
    if (typeof obj !== 'object' || typeof obj === null) {
        return obj
    }

    //创建一个新对象
    let copyobj = Array.isArray(obj) ? [] : {}
    //遍历对象
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            copyobj[key] = obj[key]
    }
    return copyobj
}

//深拷贝,需要引入weakmap，防止循环引用问题

const deepclone = (value) => {
    //记录每个拷贝过的值
    let cache = new WeakMap()
    //内部定义深拷贝函数
    function _deepclone(obj) {
        //判断是否为引用数据类型
        if (typeof obj !== 'object' || typeof obj === null) {
            return obj
        }
        //如果有直接取缓存里的
        if (cache.has(obj)) return cache.get(obj)
        //创建一个新对象
        let copyobj = Array.isArray(obj) ? [] : {}
        //没有就存到缓存里
        cache.set(obj, copyobj)
        //遍历对象
        for (let key in obj) {
            if (obj.hasOwnProperty(key))
                copyobj[key] = _deepclone(obj[key])
        }
        return copyobj
    }
    return _deepclone(value)
}

// WeakMap与Map

// 键的类型：WeakMap的键类型只能是对象和Symbol值；Map的键类型可以是任意数据类型。
// 引用类型：WeakMap是弱引用；Map是强引用。
// 方法和属性：WeakMap不支持迭代，所以没有forEach, values, keys, entries方法，并且也没有size属性；Map有forEach, values, keys, entries方法，也有size属性。
// 作用：WeakMap也可以实现自动清理回收；Map提供需要高效键值对的操作。

// 在计算机程序设计中，弱引用与强引用相对，是指不能确保其引用的对象不会被垃圾回收器回收的引用。 一个对象若只被弱引用所引用，
// 则被认为是不可访问（或弱可访问）的，并因此可能在任何时刻被回收。
