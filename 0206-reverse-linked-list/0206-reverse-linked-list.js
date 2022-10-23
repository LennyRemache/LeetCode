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
    let node = head;
    let prev = head;
    
    while (node) {
        let next = node.next;
        
        if(node === head) {
            node.next = null;
        }
        else if(next === null) { // reached a tail node
            node.next = prev
            return node;
        } else {
            node.next = prev;
        }
            
        prev = node;
        node = next;
    }
    
    return head;
};