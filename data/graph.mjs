//              A(15)
//          ____|____
//         /    |    \
//      B(11)  C(13)  D(10)
//    /   |     |
// E(5)  F(6)  G(3)


class Node {
    constructor(value, childrens = []) {
        this.value = value;
        this.childrens = childrens;
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

export { A };