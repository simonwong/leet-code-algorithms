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
// 25. K 个一组翻转链表
// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (k <= 1) {
    return head
  }
  const dummyHead = new ListNode(-1)
  dummyHead.next = head
  let current = dummyHead
  while (isEnough(current.next, k)) {
    current = sectionReverse(current, k)
    let i = k
    while (i > 0) {
      i--
      current = current.next
    }
  }

  return dummyHead.next
};


function isEnough (head: ListNode | null, k: number) {
  let current = head
  while (current && k > 0) {
    current = current.next
    k--
  }
  return k === 0
}

function sectionReverse(startHead: ListNode | null, k: number) {
  const preHead = startHead
  const current = preHead.next
  while (k > 1) {
    const next = current.next
    current.next = next.next
    next.next = preHead.next
    preHead.next = next
    k--
  }
  return preHead
}
