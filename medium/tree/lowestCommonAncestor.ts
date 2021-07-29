// 236. 二叉树的最近公共祖先
// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!p || !q || !root) {
    return p ?? q ?? root
  }

  let res: TreeNode | null = null
  function dfs(node: TreeNode | null): boolean {
    if (!node) {
      return false
    }
    const left = dfs(node.left)
    const right = dfs(node.right)

    const isMatch = node.val === p.val || node.val === q.val

    if ((left && right) || (isMatch && (left || right))) {
      res = node
      return
    }
    return left || right || isMatch
  }
  dfs(root)

  return res
};
