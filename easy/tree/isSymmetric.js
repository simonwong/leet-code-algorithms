// 101. 对称二叉树
// https://leetcode-cn.com/problems/symmetric-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root === null) return true
  return deepCompare(root.left, root.right)
};

function deepCompare(l, r) {
  if (l == null && r == null) {
    return true
  }
  if (l && r && l.val === r.val) {
    return deepCompare(l.left, r.right) && deepCompare(l.right, r.left)
  }
  return false
}
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var root = new TreeNode(1)

root.left = new TreeNode(2)
// root.left.left = new TreeNode(3)
root.left.right = new TreeNode(3)



root.right = new TreeNode(2)
// root.right.left = new TreeNode(4)
root.right.right = new TreeNode(3)
isSymmetric(root)
