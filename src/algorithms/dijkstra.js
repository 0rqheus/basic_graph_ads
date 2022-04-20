const arrForMarks = (set) => {
    const arr = [];
    for (const item of set) {
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
};
const arrForVisited = (set) => {
    const arr = [];
    for (const item of set) {
        arr.push([item, false]);
    }
    return arr;
};
const Dijkstra = (edgesList) => {
    const vertexes = new Set(edgesList.map(item => item.vertex1));
    const marks = new Map(arrForMarks(vertexes));
    const visited = new Map(arrForVisited(vertexes));
    for (const vertex of marks.keys()) {
        const neighbourEdges = edgesList.filter(item => item.vertex1 === vertex);
        for (const edge of neighbourEdges) {
            const neighbourVertex = edge.vertex2;
            if (!visited.get(neighbourVertex)) {
                const neighbourMark = marks.get(neighbourVertex).mark;
                const newMark = edge.weight + marks.get(vertex).mark;
                if (neighbourMark > newMark)
                    marks.set(neighbourVertex, {
                        mark: newMark,
                        parentVertex: vertex
                    });
            }
        }
        visited.set(vertex, true);
    }
    return marks;
};
export default Dijkstra;
