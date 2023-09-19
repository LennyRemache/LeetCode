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

// O(n+m) runtime where n is size of list 1 and m is size of list2
// O(1) space because we only create one new ListNode() regardless of input size. 
// the rest of the nodes that are assigned to next are predefined lListNode()'s from the input lists
const mergeTwoLists = (list1, list2) => {
    const mergedList = new ListNode();
    let node = mergedList; // shallow copy or reference to the head of the mergedList, 
                           // any modifications done to node's properties will reflect on mergedList's properties
                           // except mergedList will remain pointing to the start of the merged linked list
    
    // O(n+m) runtime based on list1 and list2 length
    // while list1 and list2 contain valid nodes
    while (list1 && list2) {
        if(list1.val <= list2.val) {
            node.next = list1; // list1 curr node is next node in mergedList
            list1 = list1.next; // increment list1 node
        } else if(list1.val > list2.val) {
            node.next = list2; // list2 curr node is next node in mergedList
            list2 = list2.next; // increment list2 node
        }
        node = node.next; // increment curr node to its recently assigned next node
    }
    
    // edge case where one list is shorter than the other, so loop prematurely ends before merging all nodes
    // if list1 still has nodes to merge
    if (list1) node.next = list1;
    // if list2 still has nodes to merge
    else if (list2) node.next = list2;
    
    return mergedList.next;
};