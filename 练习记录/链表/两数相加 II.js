/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 参考题解：https://leetcode-cn.com/problems/add-two-numbers-ii/solution/fu-xue-ming-zhu-xiang-jie-qiu-jia-fa-xue-ofb5/
 */
 var addTwoNumbers = function(l1, l2) {
  let q1 = [], q2 = [];
  while (l1 != null) {
    q1.push(l1.val)
    l1 = l1.next;
  }
  while (l2 != null) {
    q2.push(l2.val)
    l2 = l2.next;
  }
  let carry = 0;
  let dummy = new ListNode(0);
  while (q1.length || q2.length || carry > 0) {
    let n1 = q1.length > 0 ? q1.pop() : 0;
    let n2 = q2.length > 0 ? q2.pop() : 0;
    let sum = n1 + n2 + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    let cur = new ListNode(sum);
    // 逆序拼接链表的方法：先定义了一个哑结点dummy ，然后每次把新构建的链表结点放到 dummy 和 dummy->next 之间，最后返回结果是 dummy->next 。
    cur.next = dummy.next;
    dummy.next = cur;
  }
  return dummy.next;
};