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
    
    let currNode = head; // pointers when using linked list
    let prevNode = null;
    let nextNode = null;
    
    while (currNode) {       
        nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }
    
    return prevNode;
};