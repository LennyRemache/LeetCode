/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
    let prev = null;
    let curr = head;
    let next = null;
    
    while (curr) {
        prev = curr.next;
        curr.next = next;
        next = curr;
        curr = prev;
        
    }
    
    return next;
};