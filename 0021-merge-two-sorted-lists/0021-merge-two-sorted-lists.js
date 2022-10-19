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
    let res = new ListNode()
    const head = res;
    
    while (list1 && list2) {
        if (list1.val < list2.val) {
            res.next = list1;
            list1 = list1.next
        }
        else if (list2.val < list1.val) {
            res.next = list2;
            list2 = list2.next;
        }
        else {
            res.next = list1;
            list1 = list1.next;
        }
        
        res = res.next;
        
    }
    
    if (list1 !== null) {
        res.next = list1;
    }
    if (list2) {
        res.next = list2;
    }
    
    return head.next;
};