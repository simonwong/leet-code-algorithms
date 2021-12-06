// 剑指 Offer 28. 对称的二叉树
// https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
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
function isSymmetric(root: TreeNode | null): boolean {
  if (root == null) {
    return true
  }

  const isMirror = (left: TreeNode | null, right: TreeNode | null) => {
    if (left == null || right == null) {
      if (left == right) {
        return true
      }
      return false
    }
    if (left.val === right.val) {
      return isMirror(left.left, right.right) && isMirror(left.right, right.left)
    }
    return false
  }

  return isMirror(root.left, root.right)
};

//       1
//      / \
//     2   2
//    / \ / \
//   3  4 4  3
//  /\ /\ /\ /\
// 5 6 78 87 6 5

  //     1
  //    / \
  //   2   2
  //  / \ / \
  // N  3 N  3
