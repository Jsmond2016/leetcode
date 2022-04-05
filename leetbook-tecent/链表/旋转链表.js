/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !k) return head
    let len = 1
    let p = head;
    while (p.next) {
        p = p.next;
        len ++
    }
    p.next = head;
    k = k % len;
    let step = len - k;
    while (step > 0) {
        p = p.next
        step --
    }
    let t = p.next
    p.next = null;

    return t
};