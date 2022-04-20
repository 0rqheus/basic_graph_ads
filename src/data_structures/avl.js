export default class AVL {
    constructor() {
        this.root = null;
    }
    getBalanceFactor(node) {
        var _a, _b;
        const leftHeight = ((_a = node.left) === null || _a === void 0 ? void 0 : _a.height) | 0;
        const rightHeight = ((_b = node.right) === null || _b === void 0 ? void 0 : _b.height) | 0;
        return (rightHeight - leftHeight);
    }
    updateHeight(node) {
        var _a, _b;
        const leftHeight = ((_a = node.left) === null || _a === void 0 ? void 0 : _a.height) | 0;
        const rightHeight = ((_b = node.right) === null || _b === void 0 ? void 0 : _b.height) | 0;
        const max = (leftHeight > rightHeight) ? leftHeight : rightHeight;
        node.height = max + 1;
    }
    rotateRight(node) {
        const A = node;
        const B = node.left;
        A.left = B.right;
        B.right = A;
        this.updateHeight(A);
        this.updateHeight(B);
        return B;
    }
    rotateLeft(node) {
        const A = node;
        const B = node.right;
        A.right = B.left;
        B.left = A;
        this.updateHeight(A);
        this.updateHeight(B);
        return B;
    }
    balance(node) {
        this.updateHeight(node);
        if (this.getBalanceFactor(node) === 2) {
            if (this.getBalanceFactor(node.right) < 0)
                node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }
        else if (this.getBalanceFactor(node) === -2) {
            if (this.getBalanceFactor(node.left) > 0)
                node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }
        return node;
    }
    findMin(node) {
        if (node.left === null)
            return node;
        else
            return this.findMin(node.left);
    }
    removeMin(node) {
        if (node.left === null)
            return node.right;
        node.left = this.removeMin(node.left);
        return this.balance(node);
    }
    insertNode(node, root) {
        if (root === null)
            return node;
        if (node.key < root.key)
            root.left = this.insertNode(node, root.left);
        else
            root.right = this.insertNode(node, root.right);
        return this.balance(root);
    }
    removeNode(key, root) {
        if (!root)
            return null;
        if (root.key > key)
            root.left = this.removeNode(key, root.left);
        else if (root.key < key)
            root.right = this.removeNode(key, root.right);
        else {
            const left = root.left;
            const right = root.right;
            root = null;
            if (right === null)
                return left;
            const min = this.findMin(right);
            min.right = this.removeMin(right);
            min.left = left;
            return this.balance(min);
        }
        return this.balance(root);
    }
    insert(node) {
        this.root = this.insertNode(node, this.root);
    }
    find(key, root = this.root) {
        if (root === null)
            return null;
        if (key === root.key)
            return root;
        if (key < root.key)
            this.find(key, root.left);
        else
            this.find(key, root.right);
    }
    remove(key) {
        this.root = this.removeNode(key, this.root);
    }
    show(node = this.root, level = 0) {
        if (node === null)
            return;
        this.show(node.right, level + 1);
        const marginSymbol = "-";
        const margin = marginSymbol.repeat(level * 4);
        console.log(`${margin}${node.key}`);
        this.show(node.left, level + 1);
    }
}
;
