/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
   let lca = null;
    
    const dfs = (node) => {
        if (node === null) {
            return false;
        }
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        let curr = node === p || node === q;
        if (left + right + curr >= 2) {
            lca = node;
        }
        
        return left || right || curr;
    }
    
    dfs(root);
    return lca;
};