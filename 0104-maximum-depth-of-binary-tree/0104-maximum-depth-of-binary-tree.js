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
 * @return {number}
 */
const maxDepth = (root) => {
    const getMaxDepth = (node) => {
        if (node === null) return 0;
        
        const leftLength = getMaxDepth(node.left);
        const rightLength = getMaxDepth(node.right);
        
        return Math.max(leftLength, rightLength) + 1;
    }
    
    return getMaxDepth(root);
};