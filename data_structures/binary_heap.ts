export default class BinaryHeap {
    heap: Array<graph.HeapItem>;

    private getParentPos = (i: number): number => {
        return Math.floor((i - 1) / 2);
    }
    private getLeftChildPos = (i: number): number => {
        return 2*i + 1;
    }
    private getRightChildPos = (i: number): number => {
        return 2*i + 2;
    }

    private swap = (firstPos: number, secondPos: number) => {
        const tmp: graph.HeapItem = this.heap[firstPos];
        this.heap[firstPos] = this.heap[secondPos];
        this.heap[secondPos] = tmp;
    }

    private heapify = (pos: number) => {
        let largestPos: number = pos;
        let leftChildPos: number = this.getLeftChildPos(pos);
        let rightChildPos: number = this.getRightChildPos(pos);
    
        if(leftChildPos < this.heap.length && this.heap[leftChildPos].key > this.heap[largestPos].key)
            largestPos = leftChildPos;
        if(rightChildPos < this.heap.length && this.heap[rightChildPos].key > this.heap[largestPos].key)
            largestPos = rightChildPos;
    
        if(largestPos !== pos) {
            this.swap(largestPos, pos);
            this.heapify(largestPos);
        }
    }

    add = (item: graph.HeapItem) => {
        this.heap.push(item);
    
        let currPos: number = this.heap.length - 1;
        let parentPos: number = this.getParentPos(currPos);
    
        while(currPos > 0 && this.heap[parentPos].key < this.heap[currPos].key) {
    
            this.swap(currPos, parentPos)
    
            currPos = parentPos;
            parentPos = this.getParentPos(currPos);
        }
    }
    
    extractMax = (): graph.HeapItem => {
    
        if(this.heap.length < 1) return;
    
        const max: graph.HeapItem = this.heap[0];
        this.heap[0] = this.heap.pop();
    
        this.heapify(0);
    
        return max;
    }
}