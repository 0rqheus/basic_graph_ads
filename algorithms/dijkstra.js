//      5
//   /     \
//  6       4
//  | \   / |
//  |   3   |  
//  | /   \ |
//  1-------2

const graphEdgesList = [
    {
        vertex1: 1,
        vertex2: 2,
        weight: 7
    },
    {
        vertex1: 1,
        vertex2: 3,
        weight: 9
    },
    {
        vertex1: 1,
        vertex2: 6,
        weight: 14
    },
    {
        vertex1: 2,
        vertex2: 3,
        weight: 10
    },
    {
        vertex1: 2,
        vertex2: 4,
        weight: 15
    },
    {
        vertex1: 3,
        vertex2: 4,
        weight: 11
    },
    {
        vertex1: 3,
        vertex2: 6,
        weight: 2
    },
    {
        vertex1: 6,
        vertex2: 5,
        weight: 9
    },
    {
        vertex1: 4,
        vertex2: 5,
        weight: 6
    },
];

const marks = new Map([
    [1, 0],
    [2, Infinity],
    [3, Infinity],
    [4, Infinity],
    [5, Infinity],
    [6, Infinity],
]);

const dijkstra = () => {

    for(const vertex of marks.keys()) {
        // console.log(vertex);

        const neighbours = graphEdgesList.filter(item => item.vertex1 === vertex);

        for(const neighbour of neighbours) {

            const key = neighbour.vertex2

            const neighbourMark = marks.get(key);
            const newMark = neighbour.weight + marks.get(vertex);

            console.log(neighbourMark, newMark);

            if(neighbourMark > newMark) 
                marks.set(key, newMark)
        }
    }

};

dijkstra();

console.log("\n\n");

for(const item of marks) {
    console.log(item);
}