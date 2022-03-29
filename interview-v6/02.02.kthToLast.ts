// 面试题 02.02. 返回倒数第 k 个节点
// https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/
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
function kthToLast(head: ListNode | null, k: number): number {
  const dummy = new ListNode(-1)
  dummy.next = head
  let slow = dummy
  let quick = dummy

  while (k > 0) {
    k--
    quick = quick.next
  }
  while (quick != null) {
    slow = slow.next
    quick = quick.next
  }
  return slow.val
};
