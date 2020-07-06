declare interface INode {
    key: number;
    neighbours: Array<INode>;
}

declare interface IEdge {
    vertex1: number;
    vertex2: number;
    weight: number;
}

declare type Mark = Map<number, {mark: number, parentVertex: number}>;

declare type Visited = Map<number, boolean>;


declare interface AVLNode {

    key: number;
    height: number; // 1 by default
    left: AVLNode;
    right: AVLNode;

}

declare interface HeapItem {
    key: number;
}