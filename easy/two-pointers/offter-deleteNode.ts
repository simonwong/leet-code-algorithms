// 剑指 Offer 18. 删除链表的节点
// https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function deleteNode(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode(-1)
  dummy.next = head

  let cur = dummy
  while (cur != null && cur.next != null) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
    }
    cur = cur.next
  }

  return dummy.next
};
