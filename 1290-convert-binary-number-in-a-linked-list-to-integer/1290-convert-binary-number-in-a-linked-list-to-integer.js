/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = (head) => {
    let length = getLength(head) - 1;
    
    let res = 0;
    while(head) {
        if (head.val === 1) {
             res += 2**(length);
        }
        length -= 1;
        head = head.next;
    }
    
    return res;
};

const getLength = (node) => {
    let length = 0;
    while (node) {
        node = node.next;
        length += 1;
    }
    return length;
}