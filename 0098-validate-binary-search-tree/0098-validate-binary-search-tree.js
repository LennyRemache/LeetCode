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
    // T: O(n)
    const dfs = (node, min, max) => {
        if (!node) return true; // a null node is a valid BST 
    
        // if node.val is not within the valid range of values then it is not valid bst
        if (!(min < node.val && node.val < max)) {
            return false;
        }
        
        // having min and max ranges prevent subtree nodes from going beyond valid ranges
        
        // left dfs traversal takes -> node.left, overall min from curr node, the max value it can be which is the nodes curr value 
        // right dfs traversal takes -> node.right, the min value it can be which is the nodes curr value, overall max from curr node
        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
    }
    
    return dfs(root, -Infinity, Infinity)
};