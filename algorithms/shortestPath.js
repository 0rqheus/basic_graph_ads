class Node {
    constructor(value, childrens = []) {
        this.value = value;
        this.childrens = childrens;
        this.visited = false;
    }
}

class ChildNode {
    constructor(node, weight = 0) {
        this.node = node;
        this.weight = weight;
    }
}

// data 
const G = new Node("G");
const F = new Node("F");
const E = new Node("E", [ new ChildNode(F, 2) ]);
const D = new Node("D");
const C = new Node("C", [ new ChildNode(G, 7) ]);
const B = new Node("B", [ new ChildNode(E, 3), new ChildNode(F, 11) ]);
const A = new Node("A", [ new ChildNode(B, 9), new ChildNode(C, 6), new ChildNode(D, 5) ]);


// algorithm using dfs
const shortestPath = (root, target) => {

    let minPath = Infinity;

    const algorithm = (root, pathValue) => {
        root.visited = true;
    
        if(root.value === target) {
    
            minPath = minPath > pathValue
                ? pathValue
                : minPath;
                
            return minPath;
        }
    
        if(root.childrens.length === 0) return -1;
    
        for(const child of root.childrens) {
            if (!child.node.visited)
            algorithm(child.node, pathValue + child.weight);
        }
    }

    algorithm(root, 0);

    return minPath
}

console.log(shortestPath(A, "F"));