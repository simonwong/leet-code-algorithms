// 剑指 Offer 55 - I. 二叉树的深度
// https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/
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
function maxDepth(root: TreeNode | null): number {
  if (root == null) {
    return 0
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

// function maxDepth(root: TreeNode | null): number {
//   let ans = 0
//   const dfs = (node: TreeNode | null, dep: number) => {
//     if (node == null) {
//       return
//     }
//     dep++
//     ans = Math.max(ans, dep)
//     dfs(node.left, dep)
//     dfs(node.right, dep)
//   }
//   dfs(root, 0)

//   return ans
// };
