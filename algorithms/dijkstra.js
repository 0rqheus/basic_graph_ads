import edgesList from "../data/edgesList.js";

// Marks ([
//     [1, 0],
//     [2, Infinity],
//     [3, Infinity],
//     [4, Infinity],
//     [5, Infinity],
//     [6, Infinity],
// ]);

const vertexes = new Set(
    edgesList.map(item => item.vertex1)
);

// console.log(vertexes.keys());

const tmpArrForMarks = [];
for(const item of vertexes) {
    tmpArrForMarks.push([item, Infinity]);
}

const marks = new Map(tmpArrForMarks);
marks.set(edgesList[0].vertex1, 0);


const tmpArrForVisited = [];
for(const item of vertexes) {
    tmpArrForVisited.push([item, false]);
}
const visited = new Map(tmpArrForVisited);

const dijkstra = () => {

    for(const vertex of marks.keys()) {
        // console.log(vertex);

        const neighbours = edgesList.filter(item => item.vertex1 === vertex);

        for(const neighbour of neighbours) {

            const key = neighbour.vertex2

            if(!visited.get(key)) {
                const neighbourMark = marks.get(key);
                const newMark = neighbour.weight + marks.get(vertex);
    
                console.log(neighbourMark, newMark);
    
                if(neighbourMark > newMark) 
                    marks.set(key, newMark)
            }

        }
        
        visited.set(vertex, true);
    }

};

dijkstra();

console.log("\n\n");

for(const item of marks) {
    console.log(item);
}