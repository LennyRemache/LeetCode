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

// T: O(n) since we travel through each node and its children at most once
// S: O(1) since we do not create any additional data structure

const isBalanced = (root) => {
    let balanced = true; // used to keep track of which sections of the tree make the whole tree unbalanced or not
    
    const dfs = (node) => {
        if (!node) return 0; // when a null node is reached then the height should be 0
        
        let leftHeight = dfs(node.left);
        let rightHeight = dfs(node.right);
        
        if(Math.abs(leftHeight-rightHeight) > 1) balanced = false; // balance is false when left height and right height have a difference of more than 1
        
        return Math.max(leftHeight, rightHeight) + 1; // the max height between left and right is the new height of the parent node + 1 since we are traversing back up the tree by height of 1
    }
    
    dfs(root);
    
    return balanced
};