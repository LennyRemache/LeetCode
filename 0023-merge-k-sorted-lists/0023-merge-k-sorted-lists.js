/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
    if (!lists || lists.length === 0) return null;
    
    while (lists.length > 1) {
        let mergedList = [];
        
        for(let i = 0; i < lists.length; i+=2) {
            let l1 = lists[i];
            let l2 = i+1 < lists.length ? lists[i+1] : null;
            mergedList.push(mergeList(l1,l2));
        }
        lists = mergedList;
    }
    
    return lists[0];
};


const mergeList = (l1, l2) => {
    let head = new ListNode();
    let node = head;
    while(l1 && l2) {
        if (l1.val < l2.val) {
            node.next = l1;
            l1 = l1.next;
        } else {
            node.next = l2;
            l2 = l2.next;
        }
        node = node.next
    }
    
    if (l1) node.next = l1;
    if (l2) node.next = l2;
    
    return head.next;
}