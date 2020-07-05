export default class AVL {

    private root: graph.AVLNode = null;

    private getBalanceFactor (node: graph.AVLNode) : number {
        const leftHeight: number = node.left?.height | 0; 
        const rightHeight: number = node.right?.height | 0;
    
        return (rightHeight - leftHeight);
    }

    private updateHeight (node: graph.AVLNode) {
        const leftHeight: number = node.left?.height | 0; 
        const rightHeight: number = node.right?.height | 0;
    
        const max: number = (leftHeight > rightHeight) ? leftHeight : rightHeight;
    
        node.height = max + 1;
    }

    private rotateRight (node: graph.AVLNode): graph.AVLNode {
        const A: graph.AVLNode = node;
        const B: graph.AVLNode = node.left;
    
        A.left = B.right
        B.right = A;
    
        this.updateHeight(A);
        this.updateHeight(B);
    
        return B;
    }
    
    private rotateLeft (node: graph.AVLNode): graph.AVLNode {
        const A: graph.AVLNode = node;
        const B: graph.AVLNode = node.right;
    
        A.right = B.left
        B.left = A;
    
        this.updateHeight(A);
        this.updateHeight(B);
    
        return B;
    }
    
    private balance (node: graph.AVLNode): graph.AVLNode {
    
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
    
    private findMin (node: graph.AVLNode): graph.AVLNode {
        if(node.left === null)
            return node;
        else 
            return this.findMin(node.left);
    }
    
    private removeMin (node: graph.AVLNode): graph.AVLNode {
        if(node.left === null)
            return node.right;
    
        node.left = this.removeMin(node.left);

        return this.balance(node);
    }

    private insertNode (node: graph.AVLNode, root: graph.AVLNode): graph.AVLNode {

        if(root === null)
            return node;
    
        if(node.key < root.key)
            root.left = this.insertNode(node, root.left);
        else
            root.right = this.insertNode(node, root.right);
    
        return this.balance(root);
    }

    private removeNode (key: number, root: graph.AVLNode) {
        if(!root)
            return null;
    
        if(root.key > key)
            root.left = this.removeNode(key, root.left);
        else if(root.key < key)
            root.right = this.removeNode(key, root.right);
        else {
            const left: graph.AVLNode = root.left;
            const right: graph.AVLNode = root.right;
    
            root = null;
    
            if(right === null)
                return left;
            
            const min: graph.AVLNode = this.findMin(right);
            min.right = this.removeMin(right);
            min.left = left;
    
            return this.balance(min);
        }
    
        return this.balance(root);
    }


    public insert (node: graph.AVLNode) {
        this.root = this.insertNode(node, this.root);
    }
    
    public find (key: number, root: graph.AVLNode = this.root) {
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
    
    public show (node: graph.AVLNode = this.root, level: number = 0) {
        if(node === null) 
            return;
    
        this.show(node.right, level + 1);
    
        const marginSymbol: string = "-";
        const margin: string = marginSymbol.repeat(level * 4);
        console.log(`${margin}${node.key}`);
    
        this.show(node.left, level + 1);
    }
};