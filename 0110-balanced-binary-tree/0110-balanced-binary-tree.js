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

   const getDepth = (node) => {
       if (!node) return 0;
       
       const leftHeight = getDepth(node.left);
       const rightHeight = getDepth(node.right);
       
       if (Math.abs(leftHeight - rightHeight) > 1) balanced = false;
       
       return Math.max(leftHeight, rightHeight) + 1;
   }
   getDepth(root);
   
   return balanced;
};