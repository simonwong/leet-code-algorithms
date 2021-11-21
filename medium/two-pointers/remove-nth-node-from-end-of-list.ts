// 19. 删除链表的倒数第 N 个结点
// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let soldier = new ListNode(-1)
  soldier.next = head
  let slow = soldier
  let fast = soldier

  while (n > 0) {
    fast = fast.next
    n--
  }
  while (fast.next != null) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return soldier.next
};
