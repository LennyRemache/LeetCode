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

// T: O(n) since we are travelling through all the nodes once
// S: O(1) since we do not create any additional data structure. We invert the binary tree in place rather than creating a new binary tree

const invertTree = (root) => {
    // base case to end recursion when node reached is null
    if (!root) return root;
    
    // traverse as far left as possible
    let left = invertTree(root.left);
    // then travel to the right of the current node
    let right = invertTree(root.right);
    
    // simply swap the current found left and right nodes that are children of the same parent node
    root.left = right;
    root.right = left;
    
    return root;
};