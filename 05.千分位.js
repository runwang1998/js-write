const fn = (num) => {
    let [partInt, partMin] = num.toString().split('.'),
        temp = []
    for (let i = partInt.length; i > 0; i = i - 3) {
        temp.unshift(partInt.slice(Math.max(i - 3, 0), i))
    }
    return partMin ? temp.join(',') + '.' + partMin : temp.join(',')
}

console.log(fn(1345678.213))