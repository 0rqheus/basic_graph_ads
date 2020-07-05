declare namespace graph {

    interface INode {
        key: number;
        neighbours: Array<INode>;
    }


    interface IEdge {
        vertex1: number;
        vertex2: number;
        weight: number;
    }

    type Mark = Map<number, {mark: number, parentVertex: number}>;

    type Visited = Map<number, boolean>;


    interface AVLNode {

        key: number;
        height: number; // 1 by default
        left: AVLNode;
        right: AVLNode;
    
    }

    interface HeapItem {
        key: number;
    }
}