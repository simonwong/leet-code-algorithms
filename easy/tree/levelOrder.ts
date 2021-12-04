// 剑指 Offer 32 - II. 从上到下打印二叉树 II
// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
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
function levelOrder(root: TreeNode | null): number[][] {
  const ans: number[][] = []
  const bfs = (node: TreeNode | null, level: number) => {
    if (node == null) {
      return
    }
    ans[level] = [...(ans[level] || []), node.val]
    bfs(node.left, level + 1)
    bfs(node.right, level + 1)
  }
  bfs(root, 0)

  return ans
};
