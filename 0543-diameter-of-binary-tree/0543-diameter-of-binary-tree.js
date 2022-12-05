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
    let diameter = 0;
    
    const getMaxDiameter = (node) => {
        if (!node) return 0;
        
        let leftHeight = getMaxDiameter(node.left);
        let rightHeight = getMaxDiameter(node.right);
        
        diameter = Math.max(diameter, leftHeight + rightHeight);
        
        return Math.max(leftHeight, rightHeight) + 1;
        
    }
    getMaxDiameter(root);
    
    return diameter
};