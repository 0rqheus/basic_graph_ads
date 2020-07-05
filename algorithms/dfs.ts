const DFS = (root: graph.INode, value: number): graph.INode => {

    if(root.key === value) 
        return root;

    if(root.neighbours.length !== 0) {
        let result: graph.INode;
        
        for(const node of root.neighbours) {
            result = DFS(node, value);

            if(result !== null)
                return result;
        }
    }

    return null;
}

export default DFS;