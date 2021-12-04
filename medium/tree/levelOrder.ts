// 剑指 Offer 32 - I. 从上到下打印二叉树
// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/
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
export function levelOrder(root: TreeNode | null): number[] {
  if (root === null) {
    return []
  }

  const cur = root
  const queue: TreeNode[] = []
  queue.push(cur)
  const ans: number[] = []

  while (queue.length > 0) {
    let len = queue.length
    while (len > 0) {
      const top = queue.shift()
      ans.push(top.val)
      if (top.left) {
        queue.push(top.left)
      }
      if (top.right) {
        queue.push(top.right)
      }
      len--
    }
  }

  return ans
};
