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
// By definition a binary search treee is sorted where everything to the left of a node is less than and everything to
// the right of a node is greater than

// O(h) runtime where h is the height of the binary search tree
// O(1) space since we just search through the given tree
const lowestCommonAncestor = (root, p, q) => {
    // while we can validly search the binary tree nodes
    while (root !== null) {
        // when the current node is greater than p and q then we can safely assume that p and q will be on the left side or
        // less than side of the tree
        if (p.val < root.val && q.val < root.val) {
            root = root.left;
        } 
        // when the current node is less than p and q then we can safely assume that p and q will be on the right side or 
        // greater than side of the tree
        else if (p.val > root.val && q.val > root.val) {
            root = root.right;
        } 
        // otherwise current node must already be q or p meaning it is the LCA for both p and q
        else {
            return root;
        }
    }
};