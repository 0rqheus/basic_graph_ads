const DFS = (root: INode, value: number): INode => {

    if(root.key === value) 
        return root;

    if(root.neighbours.length !== 0) {
        let result: INode;
        
        for(const node of root.neighbours) {
            result = DFS(node, value);

            if(result !== null)
                return result;
        }
    }

    return null;
}

export default DFS;