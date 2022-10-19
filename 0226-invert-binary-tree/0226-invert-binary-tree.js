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
    if (root === null) return root;
    
    const leftNode = invertTree(root.left);
    const rightNode = invertTree(root.right);
    
    root.right = leftNode;
    root.left = rightNode;
    
    return root;
};