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
const isValidBST = (root) => {
    const dfs = (node, left, right) => {
        if (!node) return true; // a null node is a valid BST 
        
        //console.log(`${left} < ${node.val} < ${right}`);
        // if node.val is not within the valid range of values then it is not valid bst
        if (!(left < node.val && node.val < right)) {
            return false;
        }
        
        // having left and right ranges prevent subtree nodes from going beyond valid ranges
        // that take into account previous node values and its ranges as well
        
        return dfs(node.left, left, node.val) && dfs(node.right, node.val, right);
    }
    
    return dfs(root, -Infinity, Infinity)
};