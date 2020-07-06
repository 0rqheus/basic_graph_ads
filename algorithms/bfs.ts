const BFS = (root: INode, targetValue: number): INode => {

    let queue: Array<INode> = [root];

    while(queue.length !== 0) {

        const currentElement: INode = queue[0];

        if(currentElement.key === targetValue) {
            return currentElement;

        } else {
            queue.shift();

            for(const child of currentElement.neighbours) {
                queue.push(child);
            }
        }

    }

    return null;
}

export default BFS;