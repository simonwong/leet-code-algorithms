// 面试题 02.01. 移除重复节点
// https://leetcode-cn.com/problems/remove-duplicate-node-lcci/
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
function removeDuplicateNodes(head: ListNode | null): ListNode | null {
  if (head == null) {
    return null
  }
  const stash = {}
  const dummy = new ListNode(-1)
  dummy.next = head
  let prev = dummy
  let cur = dummy.next

  while (cur !== null) {
    if (stash[cur.val]) {
      cur = cur.next
      prev.next.next = null
      prev.next = cur
    } else {
      stash[cur.val] = true
      prev = prev.next
      cur = cur.next
    }
  }
  return dummy.next
};

