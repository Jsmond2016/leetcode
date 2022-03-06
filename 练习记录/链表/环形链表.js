/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  if (!head) return false
  let set = new Set();
  while (head && head.next) {
      if (set.has(head)) {
          return true
      }
      set.add(head)
      head = head.next
  }
  return false
};

// --------法二-----------------

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  let slow = head, fast = head;
  while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) return true
  }
  return false;
};