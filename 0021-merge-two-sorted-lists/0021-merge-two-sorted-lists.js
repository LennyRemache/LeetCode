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

// T: O(n) or O(m) since the while loop will run only the shortest length of the two lists
// S: O(n + m) since list1 and list2 are not always the same size when merging them into the new linked list

const mergeTwoLists = (list1, list2) => {
    let node = new ListNode(); // the head node of the new merged sorted linked list
    let head = node; // save the head to return in the end
    
    // loop only if list1 and list2 are valid nodes that can be compared
    while (list1 && list2) {
        // list1.val is less so add the node to the new merged linked list
        // and increment list1 to the next list1 node
        if (list1.val < list2.val) {
            node.next = list1;
            list1 = list1.next;
        } else if (list2.val < list1.val) {
            // list2.val is less so add the node to the new merged linked list
            // and increment list2 to the next list2 node
            node.next = list2;
            list2 = list2.next;
        } else {
            // list2.val and list1.val are equal so add whichever node to the new merged linked list
            // and increment whichever list node was used to the next list node
            node.next = list1;
            list1 = list1.next;
        }
        // increment the new merged linked list to the next node
        node = node.next;
    }
    
    // if list 1 has leftover nodes that were not checked bc list2 made loop coindition false then simply add the rest to the end of the merged linked list
    if (list1) {
        node.next = list1;
    }
    
    // if list 2 has leftover nodes that were not checked bc list1 made loop coindition false then simply add the rest to the end of the merged linked list
    if (list2) {
        node.next = list2;
    }
    
    return head.next; // return head.next since head on its own is just the initial dummy node that was created
};