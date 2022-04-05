/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
  // 先把下一个节点的值给自己
  node.val = node.next.val
  // 删除下一个节点
  node.next = node.next.next;
};