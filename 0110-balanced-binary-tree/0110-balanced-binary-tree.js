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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let res = true;
    
    let maxDepth = (node) => {
        if (!node) return 0;
        
        let left = maxDepth(node.left);
        let right = maxDepth(node.right);
        
        if (Math.abs(left- right) > 1) res = false;
        
        return 1 + Math.max(left, right);
    }
    
    maxDepth(root)
   
    return res;
};