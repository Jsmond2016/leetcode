/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 视频：https://www.bilibili.com/video/av372738687?from=search&seid=14371625435310642949
 * 原理：
    - 准备 3 个节点：pre, cur, nextNode
    - 反转操作：cur.next = pre，但是会断开 cur.next = nextNode，因此需要暂存 nextNode，记为 temp
    - pre 节点遍历后移：pre = pre.next ==> pre = cur
    - cur 节点遍历后移：cur = cur.next ==> cur = temp

 */
    var reverseList = function(head) {
      if (!head) return null;
      let pre = null, cur = head;
      while (cur !== null) {
          let temp = cur.next;
          cur.next = pre
          pre = cur;
          cur = temp;
      }
      return pre;
  };