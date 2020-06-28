const heap = [];

// private
const getParentPos = (i) => {
    return Math.floor((i - 1) / 2);
}
const getLeftChildPos = (i) => {
    return 2*i + 1;
}
const getRightChildPos = (i) => {
    return 2*i + 2;
}

const swap = (firstPos, secondPos) => {
    const tmp = heap[firstPos];
    heap[firstPos] = heap[secondPos];
    heap[secondPos] = tmp;
}

// public
const add = (item) => {
    heap.push(item);

    let currPos = heap.length - 1;
    let parentPos = getParentPos(currPos);

    while(currPos > 0 && heap[parentPos] < heap[currPos]) {

        swap(currPos, parentPos)

        currPos = parentPos;
        parentPos = getParentPos(currPos);
    }
}

const heapify = (pos) => {
    let largestPos = pos;
    let leftChildPos = getLeftChildPos(pos);
    let rightChildPos = getRightChildPos(pos);

    if(leftChildPos < heap.length && heap[leftChildPos] > heap[largestPos])
        largestPos = leftChildPos;
    if(rightChildPos < heap.length && heap[rightChildPos] > heap[largestPos])
        largestPos = rightChildPos;

    if(largestPos !== pos) {
        swap(largestPos, pos);
        heapify(largestPos);
    }
}

const extractMax = () => {

    if(heap.length < 1) return;

    const max = heap[0];
    heap[0] = heap.pop();

    heapify(0);

    return max;
}