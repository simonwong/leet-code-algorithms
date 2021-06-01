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
  let curI = l1
  let curJ = l2

  let mergedList: ListNode | null = null
  let current: ListNode | null = null

  while (curI || curJ) {
    const iVal = curI ? curI.val : Number.MAX_SAFE_INTEGER
    const jVal = curJ ? curJ.val : Number.MAX_SAFE_INTEGER

    let curVal: number

    if (iVal < jVal) {
      curVal = iVal
      curI = curI.next
    } else {
      curVal = jVal
      curJ = curJ.next
    }

    if (!current) {
      current = mergedList = new ListNode(curVal)
    } else {
      current.next = new ListNode(curVal)
      current = current.next
    }
  }
  return mergedList
};
