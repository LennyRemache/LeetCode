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
    while(root) { // while we are able to traverse through the current node
        if(p.val > root.val && q.val > root.val) { 
            root = root.right; // if the current node value is less than p and q
        }
        else if(p.val < root.val && q.val < root.val) {
            root = root.left;
        }
        else {
            return root;
        }
    }
};