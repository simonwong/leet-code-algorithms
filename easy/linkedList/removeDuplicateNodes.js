// https://leetcode-cn.com/problems/remove-duplicate-node-lcci/
// 面试题 02.01. 移除重复节点
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function(head) {
  const cacheMap = {}

  if (!head) return head

  let cur = head
  cacheMap[cur.val] = 1
  while (cur && cur.next) {
    if (cacheMap[cur.next.val]) {
      cur.next = cur.next.next
    } else {
      cacheMap[cur.next.val] = 1
      cur = cur.next
    }
  }

  return head
};
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const hhh = new ListNode(1)
hhh.next = new ListNode(2)
hhh.next.next = new ListNode(3)
hhh.next.next.next = new ListNode(3)
hhh.next.next.next.next = new ListNode(2)
hhh.next.next.next.next.next = new ListNode(1)

removeDuplicateNodes(hhh)
