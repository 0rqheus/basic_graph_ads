const heap = [];

// 0 index - root
// 2*i + 1 - left
// 2*i + 2 - right

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

    console.log(heap);
}

const heapify = (pos) => {
    let largest = pos;
    let left = getLeftChildPos(pos);
    let right = getRightChildPos(pos);

    if(left < heap.length && heap[left] > heap[largest])
        largest = left;
    if(right < heap.length && heap[right] > heap[largest])
        largest = right;

    if(largest !== pos) {
        swap(largest, pos);
        heapify(largest);
    }
}

const extractMax = () => {

    if(heap.length < 1) return;

    const max = heap[0];
    heap[0] = heap.pop();

    heapify(0);

    return max;
}