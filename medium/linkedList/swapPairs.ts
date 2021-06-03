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
// 24. 两两交换链表中的节点
// https://leetcode-cn.com/problems/swap-nodes-in-pairs/
function swapPairs(head: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(-1)
  dummyHead.next = head

  let pre = dummyHead
  let current = dummyHead.next
  let next = current?.next

  while (next) {
    pre.next = next
    current.next = next.next
    next.next = current

    pre = current
    current = pre.next
    next = pre.next?.next
  }

  return dummyHead.next
};
