import Dijkstra from "../algorithms/dijkstra.js";
import chai from "chai";

const assert = chai.assert;

//            --------5-------
//      (9)  /                \  (6)
//          6                  4
//          | \ (2)    (11)  / |
//     (14) |  ------3-------  | (15) 
//          | / (9)    (10)  \ |
//          1------------------2
//                  (7)

//  unordered weight
const edgeList = [
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
        vertex2: 1,
        weight: 7
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
        vertex2: 1,
        weight: 9
    },
    {
        vertex1: 3,
        vertex2: 2,
        weight: 10
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
        vertex1: 4,
        vertex2: 2,
        weight: 15
    },
    {
        vertex1: 4,
        vertex2: 3,
        weight: 11
    },
    {
        vertex1: 4,
        vertex2: 5,
        weight: 6
    },
    

    {
        vertex1: 5,
        vertex2: 4,
        weight: 6
    },
    {
        vertex1: 5,
        vertex2: 6,
        weight: 9
    },
    

    {
        vertex1: 6,
        vertex2: 1,
        weight: 14
    },
    {
        vertex1: 6,
        vertex2: 3,
        weight: 2
    },
    {
        vertex1: 6,
        vertex2: 5,
        weight: 9
    },
];

describe("Dijkstra", () => {

    const result = Dijkstra(edgeList);

    it("Dijkstra result is Map", () => {
        assert.typeOf(result, "Map");
    });

    it("Min path from 1 to 2 should be 7", () => {
        assert.equal(result.get(2).mark, 7);
    });

    it("Min path from 1 to 3 should be 9", () => {
        assert.equal(result.get(3).mark, 9);
    });

    it("Min path from 1 to 4 should be 20", () => {
        assert.equal(result.get(4).mark, 20);
    });

    it("Min path from 1 to 5 should be 26", () => {
        assert.equal(result.get(5).mark, 26);
    });

    it("Min path from 1 to 6 should be 11", () => {
        assert.equal(result.get(6).mark, 11);
    });
})