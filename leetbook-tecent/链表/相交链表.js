/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 参考算法小抄：将 2 个链表合并，遍历，总有相交的地方
 */
 var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null
  let pa = headA, pb = headB;

  while (pa !== pb) {
      // headA 到了最后一个节点，则 下一节点为 headB；下面 headB 同理
      pa === null ? pa = headB : pa = pa.next;
      pb === null ? pb = headA : pb = pb.next;
  }

  return pa


};