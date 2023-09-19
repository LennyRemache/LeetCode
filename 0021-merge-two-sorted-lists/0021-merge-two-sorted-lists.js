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
    let mergedList = new ListNode();
    const headPtr = mergedList;
    
    while (list1 && list2) {
        if(list1.val <= list2.val) {
            mergedList.next = list1;
            list1 = list1.next;
        } else if(list1.val > list2.val) {
            mergedList.next = list2;
            list2 = list2.next;
        }
        mergedList = mergedList.next;
    }
    
    if (list1) mergedList.next = list1;
    else if (list2) mergedList.next = list2;
    
    return headPtr.next;
};