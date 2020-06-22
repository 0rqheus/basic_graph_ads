import { A as root } from "../data/graph.mjs";

const DFS = (root, value) => {

    // console.log(root);

    if(root.value === value) return root;

    if(root.childrens.length !== 0) {
        let result;
        
        for(const node of root.childrens) {
            result = DFS(node, value);

            if(result !== null)
                return result;
        }
    }

    return null;
}

console.log(DFS(root, 88));