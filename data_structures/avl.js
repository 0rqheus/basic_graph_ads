class Node {
    constructor(key) {
        this.key = key;
        this.height = 0;

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

    return max + 1;
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
        
        rotateLeft(node);
    }
    else if(getBalanceFactor(node) === -2) {

        if(getBalanceFactor(node.left) > 0)
            node.left = rotateLeft(node.left);
        
        rotateRight(node);
    }
}

// public 
const insert = (root, node) => {
    if(node.key < root.key && root.left !== null)
        insert(root.left, node);
    else if(node.key < root.key && root.left === null)
        root.left = node;
    else if(node.key > root.key && root.right !== null)
        insert(root.right, node);
    else if(node.key > root.key && root.right === null)
        root.right = node;

    balance(root);
}

const find = (root, key) => {
    if(key === root.key) 
        return root;

    if(key < root.key) 
        find(root.left, key);
    else 
        find(root.right, key);
}

// @todo delete

const showTree = (node, level = 0) => {
    if(node === null) 
        return;

    showTree(node.left, level + 1);
    console.log(`${"-".repeat(level)}${node.key}`);
    showTree(node.right, level + 1);
}


const root = new Node(13);

insert(root, new Node(10));
insert(root, new Node(5));
insert(root, new Node(4));
insert(root, new Node(6));
insert(root, new Node(11));
insert(root, new Node(15));
insert(root, new Node(16));

showTree(root);