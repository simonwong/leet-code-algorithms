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
// 199. 二叉树的右视图
// https://leetcode-cn.com/problems/binary-tree-right-side-view/
function rightSideView(root: TreeNode | null): number[] {
  const ans: number[] = []
  bfs(root, ans, 0)
  return ans
};

function bfs (root: TreeNode | null, ans: number[], index: number) {
  if (root == null) {
    return
  }
  ans[index] = root.val

  bfs(root.left, ans, index + 1)
  bfs(root.right, ans, index + 1)
}
