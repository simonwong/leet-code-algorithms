// 876. 链表的中间结点
// https://leetcode-cn.com/problems/middle-of-the-linked-list/
/* class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
} */

function middleNode(head: ListNode | null): ListNode | null {
  if (head == null) {
    return null
  }
  let quickNode = head
  let slowNode = head

  while (quickNode != null && quickNode.next != null) {
    quickNode = quickNode.next.next
    slowNode = slowNode.next
  }

  return slowNode
};
