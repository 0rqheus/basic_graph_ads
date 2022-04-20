import BinaryHeap from "../src/data_structures/binary_heap.js";
import chai from "chai";

const assert = chai.assert;

const Node = (key) => {
    return { key };
}

const bh = new BinaryHeap();

bh.add(Node(17));
bh.add(Node(3));
bh.add(Node(25));
bh.add(Node(100));
bh.add(Node(19));
bh.add(Node(36));
bh.add(Node(1));
bh.add(Node(2));
bh.add(Node(7));

describe("Max binary heap", () => {

    it("Max value is 100", () => {
        assert(bh.extractMax(), 100);
    });

    it("Second max value is 36", () => {
        assert(bh.extractMax(), 36);
    });

    it("Third max value is 25", () => {
        assert(bh.extractMax(), 25);
    });
});