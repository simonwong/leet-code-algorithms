// 257. 二叉树的所有路径
// https://leetcode-cn.com/problems/binary-tree-paths/

import java.util.*;

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
  List<String> res;
  public List<String> binaryTreePaths(TreeNode root) {
    this.res = new ArrayList<String>();

    dfc(root, "");

    return this.res;
  }

  void dfc(TreeNode root, String path) {
    if (root == null) {
      return;
    }

    if (path == "") {
      path = "" + root.val;
    } else {
      path += "->" + root.val;
    }

    if (root.left == null && root.right == null) {
      this.res.add(path);
      return;
    }

    dfc(root.left, path);
    dfc(root.right, path);
  }
}
