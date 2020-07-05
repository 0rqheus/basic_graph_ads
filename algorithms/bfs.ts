const BFS = (root: graph.INode, targetValue: number): graph.INode => {

    let queue: Array<graph.INode> = [root];

    while(queue.length !== 0) {

        const currentElement: graph.INode = queue[0];

        if(currentElement.key === targetValue) {
            return currentElement;

        } else {
            queue.shift();

            for(const child of currentElement.neighbours) {
                queue.push(child);
            }
        }

    }
}

export default BFS;