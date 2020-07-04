import IGraphNode from "../data/IGraphNode.js";

const BFS = (root: IGraphNode, targetValue: number): IGraphNode => {

    let queue: Array<IGraphNode> = [root];

    while(queue.length !== 0) {

        const currentElement: IGraphNode = queue[0];

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