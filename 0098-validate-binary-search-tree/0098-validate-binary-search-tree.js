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
    const dfs = (node, min, max) => {
        if (!node) return true; // a null node is a valid BST 
        
        //console.log(`${left} < ${node.val} < ${right}`);
        // if node.val is not within the valid range of values then it is not valid bst
        if (!(min < node.val && node.val < max)) {
            return false;
        }
        
        // having min and max ranges prevent subtree nodes from going beyond valid ranges
        // that take into account its root node value and its ranges as well
        
        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
    }
    
    return dfs(root, -Infinity, Infinity)
};