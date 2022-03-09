// 124. 二叉树中的最大路径和
// https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
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

function maxPathSum(root: TreeNode | null): number {
  let ans = Number.MIN_SAFE_INTEGER
  const dfs = (node: TreeNode | null): number => {
    if (node == null) {
      return 0
    }
    const left = Math.max(0, dfs(node.left))
    const right = Math.max(0, dfs(node.right))
    ans = Math.max(ans, left + right + node.val)
    return Math.max(left, right) + node.val
  }

  dfs(root)
  return ans
};
