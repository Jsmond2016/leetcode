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
 */
 var addTwoNumbers = function(l1, l2) {
  let p1 = l1, p2 = l2;
  // 构建返回的头结点
  let dummy = new ListNode(-1)
  let p = dummy;

  // 记录进位
  let carry = 0;

  while (p1 !== null || p2 !== null || carry > 0) {
      // 先加上上次的进位
      let val = carry;
      if (p1 !== null) {
          val += p1.val;
          p1 = p1.next;
      }
      if (p2 !== null) {
          val += p2.val
          p2 = p2.next
      }

      // 进位情况
      // 十位
      carry = Math.floor(val / 10)
      // 个位
      val = val % 10

      p.next = new ListNode(val)
      p = p.next;
  }

  return dummy.next;
};