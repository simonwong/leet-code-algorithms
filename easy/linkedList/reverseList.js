// 206. 反转链表
// https://leetcode-cn.com/problems/reverse-linked-list/
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
var reverseList = function(head) {
  if (!head) return null

  const valArr = []
  let current = head
  while (current != null) {
    valArr.push(current.val)
    current = current.next
  }
  const newLink = new ListNode(valArr[valArr.length - 1])
  let newCur = newLink
  for (let i = valArr.length - 2; i >= 0; i--) {
    newCur.next = new ListNode(valArr[i])
    newCur = newCur.next
  }
  return newLink
};


function ListNode(val) {
  this.val = val;
  this.next = null;
}

const linkd = null

console.log(reverseList(linkd))


// var reverseList = function(head) {
//   if (!head) return null

//   const valArr = []
//   let current = head
//   while (current != null) {
//     valArr.push(current.val)
//     current = current.next
//   }
//   const newLink = new ListNode(valArr[valArr.length - 1])
//   let newCur = newLink
//   for (let i = valArr.length - 2; i >= 0; i--) {
//     newCur.next = new ListNode(valArr[i])
//     newCur = newCur.next
//   }
//   return newLink
// };

