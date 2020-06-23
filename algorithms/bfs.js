const BFS = (root, value) => {

    let queue = [root];

    while(queue.length !== 0) {

        const currentElement = queue[0];


        if(currentElement.value === value) {
            return currentElement;

        } else {
            queue.shift();

            for(const child of currentElement.childrens) {
                queue.push(child);
            }
        }

    }
}

export default BFS;