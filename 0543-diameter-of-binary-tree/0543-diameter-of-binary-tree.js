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
const diameterOfBinaryTree = (root) => {
    let longestPath = 0;
    
    const getDepth = (node) => {
        if(node === null) return 0;
        
        const left = getDepth(node.left);
        const right = getDepth(node.right);

        longestPath = Math.max(longestPath, left + right);
        
        return Math.max(left, right) + 1;
        
    }
    
    getDepth(root);
    
    return longestPath;
};