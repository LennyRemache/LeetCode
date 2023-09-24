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
const isBalanced = (root) => {
    let balanced = true;
    
    const dfs = (node) => {
        if (node === null) return 0;
        
        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);
        
        if (Math.abs(leftHeight - rightHeight) > 1) {
            balanced = false;
        }
        return Math.max(leftHeight, rightHeight) + 1;
    }
    dfs(root);
    
    return balanced;
};