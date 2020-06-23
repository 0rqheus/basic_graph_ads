import { A as root } from "./data/graph.mjs";
import edgesList from "./data/edgesList.js";

import DFS from "./algorithms/dfs.js";
import BFS from "./algorithms/bfs.js";
import Dijkstra from "./algorithms/dijkstra.js";


console.log(DFS(root, 6));
console.log(BFS(root, 11));
console.log(Dijkstra(edgesList));