// 113. 路径总和 II
// https://leetcode-cn.com/problems/path-sum-ii/
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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const res: number[][] = []

  const route: number[] = []
  function dfs (root: TreeNode | null, currentSum: number) {
    if (!root) {
      return
    }
    const nextSum = currentSum + root.val
    route.push(root.val)
    // 到达叶子节点
    if (!root.left && !root.right) {
      if (nextSum === targetSum) {
        res.push([...route])
      }
      return
    }
    dfs(root.left, nextSum)
    if (root.left) {
      route.pop()
    }
    dfs(root.right, nextSum)
    if (root.right) {
      route.pop()
    }
  }

  dfs(root, 0)

  return res
};

