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
        // iterative DFS using a stack
        // travel as far left as possible
        // last node in stack is the first node to be visited inorderly
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
        // iterative DFS using a stack
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