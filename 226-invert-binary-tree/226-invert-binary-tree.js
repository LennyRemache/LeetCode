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
    if (root === null) {
        return root;
    }
    else if (!root.left && !root.right) { // if reach max depth node with no children
        return root;
    }
    let leftNode = invertTree(root.left);
    let rightNode = invertTree(root.right);
    
    root.right = leftNode;
    root.left = rightNode;
    
    return root;
};