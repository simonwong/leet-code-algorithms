// 剑指 Offer 25. 合并两个排序的链表
// https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
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
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(-1)
  let cur = dummy
  while (l1 != null || l2 != null) {
    let val1 = l1 ? l1.val : Number.MAX_SAFE_INTEGER
    let val2 = l2 ? l2.val : Number.MAX_SAFE_INTEGER
    if (val1 <= val2) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  return dummy.next
};


// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
