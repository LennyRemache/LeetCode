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
    let prevNode = null;
    let currNode = head;
    let nextNode = null;
    
    while(currNode){
        prevNode = currNode.next;
        currNode.next = nextNode;
        nextNode = currNode;
        currNode = prevNode;
    }
    
    return nextNode;
};