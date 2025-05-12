let buildTree = (array, pid) => {
    let treeMap = new Map()

    array.filter(item => item.parentId === pid)
        .forEach(item =>
            treeMap.set(
                item.id,
                { ...item, children: buildTree(array, item.id) }
            ))

    return Array.from(treeMap.values())
}

let arrayData = [
    { id: 1, parentId: null, name: 'Node 1' },
    { id: 2, parentId: 1, name: 'Node 1.1' },
    { id: 3, parentId: 1, name: 'Node 1.2' },
    { id: 4, parentId: 2, name: 'Node 1.1.1' }
]

let tree = buildTree(arrayData, null)
console.log(tree)