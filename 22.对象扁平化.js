//数组
let flattenArray = (arr) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]))
            res = res.concat(flattenArray(arr[i]))
        else
            res.push(arr[i])
    }
    return res
}

// let arr = [1, [2, [3, 4, 5]]];
// console.log(flattenArray(arr))

//对象

let flattenObject = (obj) => {
    let res = {}
    for (let [key, value] of Object.entries(obj)) {
        if (typeof value === 'object') {
            let newobj = flattenObject(value)
            Object.keys(newobj).forEach(item => {
                let str = `${key}.${item}`
                res[str] = newobj[item]
            }
            )
        } else {
            res[key] = value
        }
    }
    return res
}

// const nestedObject = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3
//         }
//     }
// };
// console.log(flattenObject(nestedObject))

//逆对象扁平

const unflattenObject = (obj) => {
    let res = {}
    for (let key in obj) {
        let temp = key.split('.')
        let cur = res
        for (let i = 0; i < temp.length; i++) {
            let key1 = temp[i]
            if (i === temp.length - 1) cur[key1] = obj[key]
            else {
                if (!Object.hasOwn(cur, key1)) {
                    cur[key1] = {};
                }
                cur = cur[key1];
            }
        }
    }
    return res
}
let testObj = {
    'a.b.c': 1,
    'd.e.f': [2, 3],
    'd.e.g': 3,
};

console.log(unflattenObject(testObj)); // 输出：{ a: { b: { c: 1 } }, d: { e: { f: [Array], g: 3 } } }