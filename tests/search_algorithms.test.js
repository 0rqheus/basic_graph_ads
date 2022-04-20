import BFS from "../src/algorithms/bfs.js";
import DFS from "../src/algorithms/dfs.js";
import chai from "chai";

const assert = chai.assert;


const Node = (key, neighbours = []) => {
    return {
        key,
        neighbours
    }
}

//              ______A(1)_______
//             /        |        \
//        _B(2)_        C(3)      D(4)
//      /       \        |        |   \
//   E(5)      F(6)     G(7)    H(8)  I(9)
//    |       /    \             |    |   \
//  J(10)   K(11)  L(12)       M(13) N(14) 0(15)
//    |       |      |                |      |
//  P(16)   Q(17)  R(18)             S(19)  T(20)
//                 /  \
//              U(21) V(22)

const V = Node(22),
U = Node(21), 
T = Node(20),
S = Node(19),
R = Node(18, [U, V]),
Q = Node(17),
P = Node(16),
O = Node(15, [T]),
N = Node(14, [S]),
M = Node(13),
L = Node(12, [R]),
K = Node(11, [Q]),
J = Node(10, [P]),
I = Node(9, [N, O]),
H = Node(8, [M]),
G = Node(7),
F = Node(6, [K, L]),
E = Node(5, [J]),
D = Node(4, [H, I]),
C = Node(3, [G]),
B = Node(2, [E, F]),
A = Node(1, [B, C, D]);

describe("Search", () => {

    describe("BFS", () => {
        it("should return node with key 22", () => {
            assert.equal(BFS(A, 22), V);
        });

        it("should return node with key 7", () => {
            assert.equal(BFS(A, 7), G);
        });

        it("should return node with key 15", () => {
            assert.equal(BFS(A, 15), O);
        });

        it("should return null", () => {
            assert.equal(BFS(A, 0), null);
        });
    });

    describe("DFS", () => {
        it("should return node with key 22", () => {
            assert.equal(DFS(A, 22), V);
        });

        it("should return node with key 7", () => {
            assert.equal(DFS(A, 7), G);
        });

        it("should return node with key 15", () => {
            assert.equal(DFS(A, 15), O);
        });

        it("should return null", () => {
            assert.equal(DFS(A, 0), null);
        });
    });

});