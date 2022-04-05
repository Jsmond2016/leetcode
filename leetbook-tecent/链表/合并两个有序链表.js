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
 var mergeTwoLists = function(list1, list2) {
  let p = new ListNode(-1)
  let dummy = p;

  while (list1 && list2) {
      if (list1.val < list2.val) {
          p.next = list1;
          list1 = list1.next;
          p = p.next;
      } else {
          p.next = list2;
          list2 = list2.next;
          p = p.next;
      }
  }

  p.next = list1 ?  list1 : list2

  return dummy.next


};