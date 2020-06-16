import { A as root } from "../data/graph.mjs";

const DFS = (root, value) => {

    console.log(root.value);

    if(root.childrens.length === 0) return;

    for(const node of root.childrens) {
        DFS(node);
    }
}

DFS(root);