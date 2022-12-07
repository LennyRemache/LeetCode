/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = (node) => {
    // T: O(n + e) where n is the number of nodes and e is the number of edges
    // T: O(v) where v is number values in visited hashMap
    
    if(!node) return node;
    
    // used to check if we already made a clone of the visiting node
    let visited = {};
    const createClone = (node) => {
        // base case
        // if we already visited the current node, then that means we already made a clone of it
        // so we can just return the clone stored in our visited hashMap
        if (visited[node.val] !== undefined) {
            return visited[node.val];
        }
        
        // else we havent visited the current node so we make a copy and store it in the visited hashMap
        let copy = new Node(node.val);
        visited[node.val] = copy;
        
        // recurrence relation
        // now for each copy/clone we need to add each of its neighbors which have to be clones aswell
        for(let neighbor of node.neighbors) {
            copy.neighbors.push(createClone(neighbor));
        }
        
        return copy;
    }
    
    return createClone(node);
};