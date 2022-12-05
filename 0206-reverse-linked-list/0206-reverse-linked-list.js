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
        // 1. Reversing the linked list connection
        prevNode = currNode.next; // save the node after for a safe disconnection
        currNode.next = nextNode; // now we can safely break the connection and assign it the new next node that reverses the linked list here
        
        // 2. Preparing for the next iteration of reversing the linked list
        nextNode = currNode; // setting up for the next connection that that the node we disconnect from will connect to
        currNode = prevNode; // getting access back to the prev node we lost connection of which we will reverse its connection next
    }
    return nextNode;
};