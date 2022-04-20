const BFS = (root, targetValue) => {
    let queue = [root];
    while (queue.length !== 0) {
        const currentElement = queue[0];
        if (currentElement.key === targetValue) {
            return currentElement;
        }
        else {
            queue.shift();
            for (const child of currentElement.neighbours) {
                queue.push(child);
            }
        }
    }
    return null;
};
export default BFS;
