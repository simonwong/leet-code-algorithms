// 814. 二叉树剪枝
// https://leetcode-cn.com/problems/binary-tree-pruning/
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
  public TreeNode pruneTree(TreeNode root) {
    if (root == null) {
      return null;
    }
    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);

    if (root.left == null && root.right == null && root.val == 0) {
      return null;
    }

    return root;
  }
}

// 以后可以看看这个小傻子写的一大串的代码。。。。
class SolutionSolutionTwo {
  public TreeNode pruneTree(TreeNode root) {
    if (root == null) {
      return null;
    }
    int leftOneNum = findHasOne(root.left);
    int rightOneNum = findHasOne(root.right);
    if (root.val == 0 && leftOneNum == 0 && rightOneNum == 0) {
      return null;
    }
    findHasOne(root);

    return root;
  }

  int findHasOne (TreeNode root) {
    if (root == null) {
      return 0;
    }
    int leftOneNum = findHasOne(root.left);
    int rightOneNum = findHasOne(root.right);

    if (leftOneNum == 0) {
      root.left = null;
    }
    if (rightOneNum == 0) {
      root.right = null;
    }

    int cur = 0;
    if (root.val == 1) {
      cur = 1;
    }

    return leftOneNum + rightOneNum + cur;
  }
}
