// 92. 反转链表 II
// https://leetcode-cn.com/problems/reverse-linked-list-ii/
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
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (left === right) {
    return head
  }
  const dummyNode = new ListNode(-1)
  dummyNode.next = head

  let pre = dummyNode

  for (let i = 1; i < left; i++) {
    pre = pre.next
  }

  let current = pre.next
  for (let i = 0; i < right - left; i++) {
    const next = current.next
    current.next = next.next
    next.next = pre.next
    pre.next = next
  }

  return dummyNode.next
};
