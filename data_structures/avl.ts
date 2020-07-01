class AVLNode {

    key: number;
    height: number;
    left: AVLNode;
    right: AVLNode;

    constructor(key) {
        this.key = key;
        this.height = 1;

        this.left = null;
        this.right = null;
    }
}

class AVL {

    private root: AVLNode = null;

    private getBalanceFactor (node: AVLNode) : number {
        const leftHeight: number = node.left?.height | 0; 
        const rightHeight: number = node.right?.height | 0;
    
        return (rightHeight - leftHeight);
    }

    private updateHeight (node: AVLNode) {
        const leftHeight: number = node.left?.height | 0; 
        const rightHeight: number = node.right?.height | 0;
    
        const max: number = (leftHeight > rightHeight) ? leftHeight : rightHeight;
    
        node.height = max + 1;
    }

    private rotateRight (node: AVLNode): AVLNode {
        const A: AVLNode = node;
        const B: AVLNode = node.left;
    
        A.left = B.right
        B.right = A;
    
        this.updateHeight(A);
        this.updateHeight(B);
    
        return B;
    }
    
    private rotateLeft (node: AVLNode): AVLNode {
        const A: AVLNode = node;
        const B: AVLNode = node.right;
    
        A.right = B.left
        B.left = A;
    
        this.updateHeight(A);
        this.updateHeight(B);
    
        return B;
    }
    
    private balance (node: AVLNode): AVLNode {
    
        this.updateHeight(node);
    
        if(this.getBalanceFactor(node) === 2) {
    
            if(this.getBalanceFactor(node.right) < 0)
                node.right = this.rotateRight(node.right);
            
            return this.rotateLeft(node);
        }
        else if(this.getBalanceFactor(node) === -2) {
    
            if(this.getBalanceFactor(node.left) > 0)
                node.left = this.rotateLeft(node.left);
            
            return this.rotateRight(node);
        }
    
        return node;
    }
    
    private findMin (node: AVLNode): AVLNode {
        if(node.left === null)
            return node;
        else 
            return this.findMin(node.left);
    }
    
    private removeMin (node: AVLNode): AVLNode {
        if(node.left === null)
            return node.right;
    
        node.left = this.removeMin(node.left);

        return this.balance(node);
    }

    private insertNode (node: AVLNode, root: AVLNode): AVLNode {

        if(root === null)
            return node;
    
        if(node.key < root.key)
            root.left = this.insertNode(node, root.left);
        else
            root.right = this.insertNode(node, root.right);
    
        return this.balance(root);
    }

    private removeNode (key: number, root: AVLNode) {
        if(!root)
            return null;
    
        if(root.key > key)
            root.left = this.removeNode(key, root.left);
        else if(root.key < key)
            root.right = this.removeNode(key, root.right);
        else {
            const left: AVLNode = root.left;
            const right: AVLNode = root.right;
    
            root = null;
    
            if(right === null)
                return left;
            
            const min: AVLNode = this.findMin(right);
            min.right = this.removeMin(right);
            min.left = left;
    
            return this.balance(min);
        }
    
        return this.balance(root);
    }



    public insert (node: AVLNode) {
        this.root = this.insertNode(node, this.root);
    }
    
    public find (key: number, root: AVLNode = this.root) {
        if(key === root.key) 
            return root;
    
        if(key < root.key) 
            this.find(key, root.left);
        else 
            this.find(key, root.right);
    }    

    public remove (key: number) {
        this.root = this.removeNode(key, this.root);
    }
    
    public show (node: AVLNode = this.root, level: number = 0) {
        if(node === null) 
            return;
    
        this.show(node.right, level + 1);
    
        const marginSymbol: string = "-";
        const margin: string = marginSymbol.repeat(level * 4);
        console.log(`${margin}${node.key}`);
    
        this.show(node.left, level + 1);
    }
}


const obj = new AVL();

obj.insert(new AVLNode(10));
obj.insert(new AVLNode(6));
obj.insert(new AVLNode(5));
obj.insert(new AVLNode(4));
obj.insert(new AVLNode(11));
obj.insert(new AVLNode(15));
obj.insert(new AVLNode(14));

obj.remove(11);

obj.show();