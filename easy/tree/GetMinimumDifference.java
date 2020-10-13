import java.util.Stack;

// 530. 二叉搜索树的最小绝对差
// https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/
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
  public int getMinimumDifference(TreeNode root) {
    int result = Integer.MAX_VALUE;
    int pre = -1;

    Stack<TreeNode> stack = new Stack<>();
    TreeNode cur = root;

    while (cur != null || !stack.isEmpty()) {
      while (cur != null) {
        stack.push(cur);
        cur = cur.left;
      }
      cur = stack.pop();

      if (pre == -1) {
        pre = cur.val;
      } else {
        result = Math.min(cur.val - pre, result);
        pre = cur.val;
      }

      cur = cur.right;
    }

    return result;
  }
}
