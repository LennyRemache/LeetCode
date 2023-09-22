/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// O(n) runtime where n is the # of nodes in the binary tree
// O(1) since we only use the provided binary tree data structure
const invertTree = (root) => { 
    if (root === null) return root; // base case is when we find the deepest node
    
    const left = invertTree(root.left); // retrieve the deepest left node currently
    const right = invertTree(root.right); // retrieve the deepest right node currently
    
    // swap after both curr deepest left and right nodes of the same parent are found
    root.left = right;
    root.right = left;
    
    // retrieve the inverted sub binary tree until we invert the main inverted binary tree
    return root;
};