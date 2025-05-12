let TreeToArray = (treedata) => {
    const result = [];

    function traverse(node) {
        result.push(node.name);
        if (node.children && node.children.length > 0) {
            for (let i = 0; i < node.children.length; i++) {
                traverse(node.children[i]);
            }
        }
    }

    traverse(tree);

    return result;
}

const tree = {
    id: 1,
    name: '部门A',
    children: [
        {
            id: 2,
            name: '部门B',
            children: [
                { id: 4, name: '部门D' },
                { id: 5, name: '部门E' }
            ]
        },
        {
            id: 3,
            name: '部门C',
            children: [{ id: 6, name: '部门F' }]
        }
    ]
}

let arr = TreeToArray(tree)
console.log(arr)