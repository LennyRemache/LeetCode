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
    // base case
    if (root === null) { // handle if empty binary tree ||
        return root;                                    // max depth node without children reached
    }
    let leftNode = invertTree(root.left);
    let rightNode = invertTree(root.right);
    
    root.right = leftNode;
    root.left = rightNode;
    
    return root;
};