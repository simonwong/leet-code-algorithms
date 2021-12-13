// 剑指 Offer 54. 二叉搜索树的第k大节点
// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/
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
function kthLargest(root: TreeNode | null, k: number): number {
  let ans: number
  const dfs = (node: TreeNode | null) => {
    if (node == null) {
      return
    }
    dfs(node.right)
    if (--k == 0) {
      ans = node.val
      return
    }
    dfs(node.left)
  }
  dfs(root)
  return ans
};
