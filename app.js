import edgesList from "./data/edgesList.js";

import DFS from "./algorithms/dfs.js";
import BFS from "./algorithms/bfs.js";
import Dijkstra from "./algorithms/dijkstra.js";

/* data for bfs and dfs */ 
const Node = (key, neighbours = []) => {
    return {
        key,
        neighbours
    }
}

//              A(15)
//          ____|____
//         /    |    \
//      B(11)  C(13)  D(10)
//    /   |     |
// E(5)  F(6)  G(3)

const G = Node(3);
const F = Node(6);
const E = Node(5);
const D = Node(10);
const C = Node(13, [G]);
const B = Node(11, [E, F]);
const A = Node(15, [B, C, D]);


console.log(DFS(root, 6));
console.log(BFS(root, 11));
console.log(Dijkstra(edgesList));

