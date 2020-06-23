const DFS = (root, value) => {

    if(root.value === value) 
        return root;

    if(root.childrens.length !== 0) {
        let result;
        
        for(const node of root.childrens) {
            result = DFS(node, value);

            if(result !== null)
                return result;
        }
    }

    return null;
}

export default DFS;