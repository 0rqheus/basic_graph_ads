import AVL from "../src/data_structures/avl.js";
import chai from "chai";

const assert = chai.assert;
const createAVLNode = (key) => {
    return {
        key: key,
        height: 1,
        left: null,
        right: null
    }
}

const obj = new AVL();

obj.insert(createAVLNode(10));
obj.insert(createAVLNode(6));
obj.insert(createAVLNode(5));
obj.insert(createAVLNode(4));
obj.insert(createAVLNode(11));
obj.insert(createAVLNode(15));
obj.insert(createAVLNode(14));

// --------15
// ------------14
// ----11
// --------10
// 6
// ----5
// --------4

describe("AVL", () => {

    obj.show();

    it("Root is node with key 6", () => {
        assert.equal(obj.root.key, 6);
    });

    it("The most left node has key 4", () => {
        let ptr =  obj.root;

        while(ptr.left !== null) {
            ptr = ptr.left;
        }

        assert.equal(ptr.key, 4);
    });

    it("The most right node has key 15", () => {
        let ptr =  obj.root;

        while(ptr.right !== null) {
            ptr = ptr.right;
        }

        assert.equal(ptr.key, 15);
    });

    it("After delete node with key 15 the most right node has key 14", () => {

        obj.remove(15);

        let ptr =  obj.root;

        while(ptr.right !== null) {
            ptr = ptr.right;
        }

        assert.equal(ptr.key, 14);
    });


    it("Search nonexistent key returns null", () => {
        assert.equal(obj.find(99), null);
    });
});