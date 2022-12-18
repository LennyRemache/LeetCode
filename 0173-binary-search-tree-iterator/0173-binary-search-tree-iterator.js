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
 */

class BSTIterator {
    constructor(root) {
        this.stack = [];
        while(root) {
            this.stack.push(root);
            root = root.left;
        }
        
    }
    
    hasNext() {
        return this.stack.length;
    }
    
    next() {
        let res = this.stack.pop();
        let cur = res.right;
        while(cur) {
            this.stack.push(cur);
            cur = cur.left;
        }
        return res.val;
    }
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */