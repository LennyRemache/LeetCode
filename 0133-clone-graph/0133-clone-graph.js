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
    console.log(node)
    if(!node) return node;
    
    // used to check if we already made a clone of the visiting node
    let visited = {};
    const clone = (node) => {
        // base case
        if (visited[node.val] !== undefined) {
            return visited[node.val];
        }
        
        let copy = new Node(node.val);
        visited[node.val] = copy;
        
        // recurrence relation
        for(let neighbor of node.neighbors) {
            copy.neighbors.push(clone(neighbor));
        }
        
        return copy;
    }
    
    return clone(node);
};