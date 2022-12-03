/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
    // T: O(n+m) because worst case list1 and list2 are of different sizes
    // S: O(1) bc we are not creating new nodes
    
    let mergedList = new ListNode(); // the new merged sorted linked list
    let head = mergedList; // to save the head of the merged linked list
    
    // while list1 and list2 has valid nodes
    while (list1 && list2) {
        if (list1.val < list2.val) {
            mergedList.next = list1;
            list1 = list1.next;
        }
        else {
            mergedList.next = list2
            list2 = list2.next;
        }
        mergedList = mergedList.next;
    }
    // while loop ends when either list1 or list2 run out of elements
    
    // if list1 still has nodes left over just add the rest of the nodes into the merged linked list
    if (list1) {
        mergedList.next = list1;
    }
    // if list2 still has nodes left over just add the rest of the nodes into the merged linked list
    if (list2) {
        mergedList.next = list2;
    }
    
    return head.next;
};