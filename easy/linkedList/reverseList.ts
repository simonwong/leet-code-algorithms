// 206. 反转链表
// https://leetcode-cn.com/problems/reverse-linked-list/
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

function reverseList(head: ListNode | null, current?: ListNode | null): ListNode | null {
  if (head == null) {
    return current || null
  }
  const next = current || null
  current = new ListNode(head.val)
  current.next = next
  return reverseList(head.next, current)
};
