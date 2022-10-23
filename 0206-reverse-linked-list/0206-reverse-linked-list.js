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
    let prevNode;
    
    while (currNode) {
        let next = currNode.next;
        
        if(currNode === head) {
            currNode.next = null;
        }
        else if(next === null) { // reached a tail node
            currNode.next = prevNode
            return currNode;
        } else {
            currNode.next = prevNode;
        }
            
        prevNode = currNode;
        currNode = next;
    }
    
    return head;
};