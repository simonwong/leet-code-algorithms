// 面试题 04.03. 特定深度节点链表
// https://leetcode-cn.com/problems/list-of-depth-lcci/

// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}



// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}


function listOfDepth(tree: TreeNode | null): Array<ListNode | null> {
  const ans: Array<ListNode | null> = []
  const bfc = (node: TreeNode | null, curLayer: number) => {
    if (!node) {
      return
    }

    if (ans[curLayer]) {
      let cur = ans[curLayer]
      while (cur) {
        if (cur.next == null) {
          cur.next = new ListNode(node.val)
          break
        }
        cur = cur.next
      }
    } else {
      ans[curLayer] = new ListNode(node.val)
    }
    bfc(node.left, curLayer + 1)
    bfc(node.right, curLayer + 1)
  }
  bfc(tree, 0)
  return ans
};

const ttt = new TreeNode(1)
ttt.left = new TreeNode(2)
ttt.left.left = new TreeNode(4)
ttt.left.left.left = new TreeNode(8)
ttt.left.right = new TreeNode(5)
ttt.right = new TreeNode(3)
ttt.right.right = new TreeNode(7)


listOfDepth(ttt)
