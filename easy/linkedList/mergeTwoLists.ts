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
// 21. 合并两个有序链表
// https://leetcode-cn.com/problems/merge-two-sorted-lists/
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let ans: ListNode = new ListNode(-1)
  let current: ListNode = ans

  while (l1 || l2) {
    const iVal = l1 ? l1.val : Number.MAX_SAFE_INTEGER
    const jVal = l2 ? l2.val : Number.MAX_SAFE_INTEGER

    let curVal: number

    if (iVal < jVal) {
      curVal = iVal
      l1 = l1.next
    } else {
      curVal = jVal
      l2 = l2.next
    }

    current.next = new ListNode(curVal)
    current = current.next
  }

  return ans.next
};
