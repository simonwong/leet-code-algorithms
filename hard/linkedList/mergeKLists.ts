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
// 23. 合并K个升序链表
// https://leetcode-cn.com/problems/merge-k-sorted-lists/

// 大概 O(mn²) ？
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const ans = new ListNode(-1)
  let curAns = ans
  while (lists.some(node => node !== null)) {
    let minNum = Number.MAX_SAFE_INTEGER
    let minIndex = null
    for (let i = 0; i < lists.length; i++) {
      const cur = lists[i];
      if (cur && cur.val < minNum) {
        minNum =cur.val
        minIndex = i
      }
    }
    curAns.next = new ListNode(minNum)
    curAns = curAns.next
    lists[minIndex] = lists[minIndex].next
  }

  return ans.next
};
