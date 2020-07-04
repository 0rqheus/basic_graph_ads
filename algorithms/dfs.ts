import IGraphNode from "../data/IGraphNode.js";

const DFS = (root: IGraphNode, value: number): IGraphNode => {

    if(root.key === value) 
        return root;

    if(root.neighbours.length !== 0) {
        let result: IGraphNode;
        
        for(const node of root.neighbours) {
            result = DFS(node, value);

            if(result !== null)
                return result;
        }
    }

    return null;
}

export default DFS;