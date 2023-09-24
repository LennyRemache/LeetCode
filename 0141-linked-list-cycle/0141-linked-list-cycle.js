/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
    let slowPtr = head;
    let fastPtr = head;
    
    while (fastPtr && fastPtr.next) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
        if (slowPtr === fastPtr) {
            return true;
        }
    }
    
    return false;
};