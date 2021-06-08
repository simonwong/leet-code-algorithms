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
// 61. 旋转链表
// https://leetcode-cn.com/problems/rotate-list/
function getLength (head: ListNode | null) {
  let i = 0
  let cur = head
  while (cur) {
    cur = cur.next
    i++
  }
  return i
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  const l = getLength(head)
  let realK = k % getLength(head)

  if (realK === 0 || head === null || l === 1) {
    return head
  }

  let current: ListNode | null = head
  let i = l - realK
  while (i > 1) {
    i--
    current = current.next
  }
  const newHead = current.next
  current.next = null
  let curNew = newHead
  while (curNew.next) {
    curNew = curNew.next
  }
  curNew.next = head
  return newHead
};
