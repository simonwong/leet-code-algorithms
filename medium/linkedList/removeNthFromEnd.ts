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
// 19. 删除链表的倒数第 N 个结点
// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let nodeList = []

  while (head) {
    nodeList.push(head)
    head = head.next
  }

  if (nodeList[nodeList.length - n - 1]) {
    nodeList[nodeList.length - n - 1].next = nodeList[nodeList.length - n + 1] || null
    return nodeList[0]
  } else {
    return nodeList[nodeList.length - n + 1] || null
  }
}
