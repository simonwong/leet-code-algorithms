// 剑指 Offer 26. 树的子结构
// https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
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

const isSubTree = (A: TreeNode | null, B: TreeNode | null) => {
  if (B == null) {
    return true
  }
  if (A == null) {
    return false
  }
  // 从匹配到根结点开始
  if (A.val === B.val) {
    return isSubTree(A.left, B.left) && isSubTree(A.right, B.right)
  }
  return false
}

function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if (B == null) {
    return false
  }
  if (A == null) {
    return false
  }
  if (A.val === B.val) {
    if (isSubTree(A, B)) {
      return true
    }
  }

  return isSubStructure(A.left, B) || isSubStructure(A.right, B)
};
