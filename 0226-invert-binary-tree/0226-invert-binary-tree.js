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
const invertTree = (root) => {
    // T: O(n)  S: O(1) or O(n) if taking into account stack frames/calls in rucursion
    
    if(root) {
        const left = invertTree(root.left);
        const right = invertTree(root.right);
        
        root.left = right;
        root.right = left;
    }
    
    return root;
};