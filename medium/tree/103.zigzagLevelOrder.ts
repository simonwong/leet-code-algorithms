// 103. 二叉树的锯齿形层序遍历
// https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root == null) {
    return []
  }
  const queue: TreeNode[] = new Array()
  queue.push(root)
  const ans: number[][] = []
  let reverse = false

  while (queue.length > 0) {
    let len = queue.length
    const temp: number[] = []
    while (len > 0) {
      const child = queue.shift()
      if (reverse) {
        temp.unshift(child.val)
      } else {
        temp.push(child.val)
      }

      if (child.left) {
        queue.push(child.left)
      }
      if (child.right) {
        queue.push(child.right)
      }
      len--
    }
    reverse = !reverse
    ans.push(temp)
  }

  return ans
};
