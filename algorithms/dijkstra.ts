const arrForMarks = (set: Set<number>) => {
    const arr = [];

    for(const item of set) {
        arr.push([item, {
            mark: Infinity,
            parentVertex: null
        }]);
    }

    const firstItem = arr[0][0];
    arr[0] = [firstItem, {
        mark: 0,
        parentVertex: null
    }];

    return arr;
}

const arrForVisited = (set: Set<number>) => {
    const arr = [];

    for(const item of set) {
        arr.push([item, false]);
    }

    return arr;
}

const Dijkstra = (edgesList: Array<IEdge>): Mark => {

    const vertexes: Set<number> = new Set(
        edgesList.map(item => item.vertex1)
    );

    const marks: Mark = new Map(arrForMarks(vertexes));
    const visited: Visited = new Map(arrForVisited(vertexes));

    for(const vertex of marks.keys()) {

        const neighbourEdges: Array<IEdge> = edgesList.filter(item => item.vertex1 === vertex);

        for(const edge of neighbourEdges) {

            const neighbourVertex: number = edge.vertex2

            if(!visited.get(neighbourVertex)) {

                const neighbourMark: number = marks.get(neighbourVertex).mark;
                const newMark: number = edge.weight + marks.get(vertex).mark;
    
                if(neighbourMark > newMark) 
                    marks.set(neighbourVertex, {
                        mark: newMark,
                        parentVertex: vertex
                    })
            }

        }
        
        visited.set(vertex, true);
    }

    return marks;

};

export default Dijkstra;