export default class BinaryHeap {
    constructor() {
        this.heap = [];
        this.getParentPos = (i) => {
            return Math.floor((i - 1) / 2);
        };
        this.getLeftChildPos = (i) => {
            return 2 * i + 1;
        };
        this.getRightChildPos = (i) => {
            return 2 * i + 2;
        };
        this.swap = (firstPos, secondPos) => {
            const tmp = this.heap[firstPos];
            this.heap[firstPos] = this.heap[secondPos];
            this.heap[secondPos] = tmp;
        };
        this.heapify = (pos) => {
            let largestPos = pos;
            let leftChildPos = this.getLeftChildPos(pos);
            let rightChildPos = this.getRightChildPos(pos);
            if (leftChildPos < this.heap.length && this.heap[leftChildPos].key > this.heap[largestPos].key)
                largestPos = leftChildPos;
            if (rightChildPos < this.heap.length && this.heap[rightChildPos].key > this.heap[largestPos].key)
                largestPos = rightChildPos;
            if (largestPos !== pos) {
                this.swap(largestPos, pos);
                this.heapify(largestPos);
            }
        };
        this.add = (item) => {
            this.heap.push(item);
            let currPos = this.heap.length - 1;
            let parentPos = this.getParentPos(currPos);
            while (currPos > 0 && this.heap[parentPos].key < this.heap[currPos].key) {
                this.swap(currPos, parentPos);
                currPos = parentPos;
                parentPos = this.getParentPos(currPos);
            }
        };
        this.extractMax = () => {
            if (this.heap.length < 1)
                return;
            const max = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.heapify(0);
            return max;
        };
    }
}
