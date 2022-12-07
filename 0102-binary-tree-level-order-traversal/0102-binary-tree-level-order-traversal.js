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
 * @return {number[][]}
 */
const levelOrder = (root) => {
    if(!root) return [];
    
    let res = [];
    let queue = [root];
    
    while(queue.length > 0) {
        let level = [];
        let qLen = queue.length;
        while (qLen > 0) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            qLen--;
        }
        res.push(level);
    }
    
    return res;
};