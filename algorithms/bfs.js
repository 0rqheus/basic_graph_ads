import { A as root } from "../data/graph.mjs";

const BFS = (root, value) => {

    let queue = [root];

    while(queue.length !== 0) {

        const currentElement = queue[0];


        if(currentElement.value === value) {
            // return match
            return currentElement;

        } else {
            //delete current(1st) element from queue
            queue.shift();

            // add childrens of current element to queue
            for(const child of currentElement.childrens) {
                queue.push(child);
            }
        }

    }
}

console.log(BFS(root, 11));