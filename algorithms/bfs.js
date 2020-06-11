//         A
//      /  |  \
//     B   C   D
//   / |   |
//  E  F   G


class Node {
    constructor(val, childrens = []) {
        this.val = val;
        this.childrens = childrens;
    }
}

const BFS = (root, value) => {

    let queue = [root];

    while(queue.length !== 0) {

        const currentElement = queue[0];


        if(currentElement.val === value) {
            // return match
            return currentElement;

        } else {
            //delete current element from queue
            queue.shift();

            // add childrens of current element to queue
            for(const child of currentElement.childrens) {
                queue.push(child);
            }
        }

    }
}


// data 
const G = new Node(3);
const F = new Node(6);
const E = new Node(5);
const D = new Node(10);
const C = new Node(13, [G]);
const B = new Node(11, [E, F]);
const A = new Node(15, [B, C, D]);

console.log(BFS(A, 11));