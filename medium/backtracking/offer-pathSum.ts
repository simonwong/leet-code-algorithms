// 剑指 Offer 34. 二叉树中和为某一值的路径
// https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/
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
export function pathSum(root: TreeNode | null, target: number): number[][] {
  const ans: number[][] = []
  if (root == null) {
    return ans
  }

  const dfs = (node: TreeNode | null, curNum: number, route: number[]) => {
    route.push(node.val)
    const curReset = curNum - node.val
    if (node.left == null && node.right == null && curReset === 0) {
      ans.push([...route])
      return
    }
    if (node.left) {
      dfs(node.left, curReset, route)
      route.pop()
    }
    if (node.right) {
      dfs(node.right, curReset, route)
      route.pop()
    }
  }

  dfs(root, target, [])

  return ans
};
