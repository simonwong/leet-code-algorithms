// 剑指 Offer 22. 链表中倒数第k个节点
// https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
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

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  const dummy = new ListNode(-1)
  dummy.next = head
  let slow = dummy
  let quick = dummy
  while (k > 0) {
    quick = quick.next
    k--
  }
  while (quick != null && quick.next != null) {
    slow = slow.next
    quick = quick.next
  }
  return slow.next
};
