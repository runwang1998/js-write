const curry = (fn) => {
    return function () {
        return fn(...args)
    }
}

const add = curry((num1, num2, num3) => {
    console.log(num1, num2, num3, num1 + num2 + num3)
})

add(1)(2)(3)
add(1, 2)(3)
add(1, 2, 3)
add(1)(2, 3)