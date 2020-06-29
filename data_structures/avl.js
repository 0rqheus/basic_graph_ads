class Node {
    constructor(key) {
        this.key = key;
        this.height = 1;

        this.left = null;
        this.right = null;
    }
}


const getBalanceFactor = (node) => {
    const leftHeight = node.left === null ? 0 : node.left.height;
    const rightHeight = node.right === null ? 0 : node.right.height;

    return rightHeight - leftHeight;
}

const updateHeight = (node) => {
    const leftHeight = node.left === null ? 0 : node.left.height;
    const rightHeight = node.right === null ? 0 : node.right.height;

    const max = leftHeight > rightHeight 
                    ? leftHeight 
                    : rightHeight;

    node.height = max + 1;
}

const rotateRight = (node) => {
    const A = node;
    const B = node.left;

    A.left = B.right
    B.right = A;

    updateHeight(A);
    updateHeight(B);

    return B;
}

const rotateLeft = (node) => {
    const A = node;
    const B = node.right;

    A.right = B.left
    B.left = A;

    updateHeight(A);
    updateHeight(B);

    return B;
}

const balance = (node) => {

    updateHeight(node);

    if(getBalanceFactor(node) === 2) {

        if(getBalanceFactor(node.right) < 0)
            node.right = rotateRight(node.right);
        
        return rotateLeft(node);
    }
    else if(getBalanceFactor(node) === -2) {

        if(getBalanceFactor(node.left) > 0)
            node.left = rotateLeft(node.left);
        
        return rotateRight(node);
    }

    return node;
}

const findMin = (node) => {
    if(node.left === null)
        return node;
    else 
        return findMin(node.left);
}

const removeMin = (node) => {
    if(node.left === null)
        return node.right;

    node.left = removeMin(node.left);
    return balance(node);
}

// public 
const insert = (root, node) => {

    if(root === null)
        return node;

    if(node.key < root.key)
        root.left = insert(root.left, node);
    else
        root.right = insert(root.right, node);

    return balance(root);
}

const find = (root, key) => {
    if(key === root.key) 
        return root;

    if(key < root.key) 
        find(root.left, key);
    else 
        find(root.right, key);
}

const remove = (root, key) => {
    if(!root)
        return null;

    if(root.key > key)
        root.left = remove(root.left, key);
    else if(root.key < key)
        root.right = remove(root.right, key);
    else {
        const left = root.left;
        const right = root.right;

        root = null;

        if(right === null)
            return left;
        
        const min = findMin(right);
        min.right = removeMin(right);
        min.left = left;

        return balance(min);
    }

    return balance(root);
}

const showTree = (node, level = 0) => {
    if(node === null) 
        return;

    showTree(node.right, level + 1);

    const margin = "-".repeat(level * 4);
    console.log(`${margin}${node.key}`);

    showTree(node.left, level + 1);
}

// 
// let root = null;

// root = insert(root, new Node(10));
// root = insert(root, new Node(6));
// root = insert(root, new Node(5));
// root = insert(root, new Node(4));
// root = insert(root, new Node(11));
// root = insert(root, new Node(15));
// root = insert(root, new Node(14));

// root = remove(root, 11);

// showTree(root);