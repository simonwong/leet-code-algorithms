// 剑指 Offer 55 - II. 平衡二叉树
// https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/
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
function isBalanced(root: TreeNode | null): boolean {
  let ans = true
  const getDepth = (node: TreeNode | null) => {
    if (node == null) {
      return 0
    }
    const leftDep = getDepth(node.left)
    const rightDep = getDepth(node.right)

    if (Math.abs(leftDep - rightDep) > 1) {
      ans = false
    }
    return Math.max(leftDep, rightDep) + 1
  }
  getDepth(root)
  return ans
};
