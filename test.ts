import {AVL, AVLNode} from "./data_structures/avl.js";

const createAVLNode = (key) => {
    return {
        key: key,
        height: 1,
        left: null,
        right: null
    }
}

const obj = new AVL();

obj.insert(createAVLNode(10));
obj.insert(createAVLNode(6));
obj.insert(createAVLNode(5));
obj.insert(createAVLNode(4));
obj.insert(createAVLNode(11));
obj.insert(createAVLNode(15));
obj.insert(createAVLNode(14));

obj.remove(11);

obj.show();