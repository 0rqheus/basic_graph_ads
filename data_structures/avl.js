var AVLNode = /** @class */ (function () {
    function AVLNode(key) {
        this.key = key;
        this.height = 1;
        this.left = null;
        this.right = null;
    }
    return AVLNode;
}());
var AVL = /** @class */ (function () {
    function AVL() {
        this.root = null;
    }
    AVL.prototype.getBalanceFactor = function (node) {
        var _a, _b;
        var leftHeight = ((_a = node.left) === null || _a === void 0 ? void 0 : _a.height) | 0;
        var rightHeight = ((_b = node.right) === null || _b === void 0 ? void 0 : _b.height) | 0;
        return (rightHeight - leftHeight);
    };
    AVL.prototype.updateHeight = function (node) {
        var _a, _b;
        var leftHeight = ((_a = node.left) === null || _a === void 0 ? void 0 : _a.height) | 0;
        var rightHeight = ((_b = node.right) === null || _b === void 0 ? void 0 : _b.height) | 0;
        var max = (leftHeight > rightHeight) ? leftHeight : rightHeight;
        node.height = max + 1;
    };
    AVL.prototype.rotateRight = function (node) {
        var A = node;
        var B = node.left;
        A.left = B.right;
        B.right = A;
        this.updateHeight(A);
        this.updateHeight(B);
        return B;
    };
    AVL.prototype.rotateLeft = function (node) {
        var A = node;
        var B = node.right;
        A.right = B.left;
        B.left = A;
        this.updateHeight(A);
        this.updateHeight(B);
        return B;
    };
    AVL.prototype.balance = function (node) {
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
    };
    AVL.prototype.findMin = function (node) {
        if (node.left === null)
            return node;
        else
            return this.findMin(node.left);
    };
    AVL.prototype.removeMin = function (node) {
        if (node.left === null)
            return node.right;
        node.left = this.removeMin(node.left);
        return this.balance(node);
    };
    AVL.prototype.insertNode = function (node, root) {
        if (root === null)
            return node;
        if (node.key < root.key)
            root.left = this.insertNode(node, root.left);
        else
            root.right = this.insertNode(node, root.right);
        return this.balance(root);
    };
    AVL.prototype.removeNode = function (key, root) {
        if (!root)
            return null;
        if (root.key > key)
            root.left = this.removeNode(key, root.left);
        else if (root.key < key)
            root.right = this.removeNode(key, root.right);
        else {
            var left = root.left;
            var right = root.right;
            root = null;
            if (right === null)
                return left;
            var min = this.findMin(right);
            min.right = this.removeMin(right);
            min.left = left;
            return this.balance(min);
        }
        return this.balance(root);
    };
    AVL.prototype.insert = function (node) {
        this.root = this.insertNode(node, this.root);
    };
    AVL.prototype.find = function (key, root) {
        if (root === void 0) { root = this.root; }
        if (key === root.key)
            return root;
        if (key < root.key)
            this.find(key, root.left);
        else
            this.find(key, root.right);
    };
    AVL.prototype.remove = function (key) {
        this.root = this.removeNode(key, this.root);
    };
    AVL.prototype.show = function (node, level) {
        if (node === void 0) { node = this.root; }
        if (level === void 0) { level = 0; }
        if (node === null)
            return;
        this.show(node.right, level + 1);
        var marginSymbol = "-";
        var margin = marginSymbol.repeat(level * 4);
        console.log("" + margin + node.key);
        this.show(node.left, level + 1);
    };
    return AVL;
}());
var obj = new AVL();
obj.insert(new AVLNode(10));
obj.insert(new AVLNode(6));
obj.insert(new AVLNode(5));
obj.insert(new AVLNode(4));
obj.insert(new AVLNode(11));
obj.insert(new AVLNode(15));
obj.insert(new AVLNode(14));
obj.remove(11);
obj.show();
