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
            if (queue[0].left) queue.push(queue[0].left);
            if (queue[0].right) queue.push(queue[0].right);
            level.push(queue[0].val);
            queue.shift();
            qLen--;
        }
        
        res.push(level);
    }
    
    return res;
};