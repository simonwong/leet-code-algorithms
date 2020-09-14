// 1123. 最深叶节点的最近公共祖先
// https://leetcode-cn.com/problems/lowest-common-ancestor-of-deepest-leaves/
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
  TreeNode res;
  public TreeNode lcaDeepestLeaves(TreeNode root) {
    int leftDeep = this.treeDeep(root.left);
    int rightDeep = this.treeDeep(root.right);

    if (leftDeep == rightDeep) {
      return root;
    }
    return leftDeep > rightDeep ? lcaDeepestLeaves(root.left) : lcaDeepestLeaves(root.right);
  }

  int treeDeep (TreeNode root) {
    if (root == null) {
      return 0;
    }
    return Math.max(treeDeep(root.left), treeDeep(root.right)) + 1;
  }
}
