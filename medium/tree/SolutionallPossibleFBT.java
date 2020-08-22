// 894. 所有可能的满二叉树
// https://leetcode-cn.com/problems/all-possible-full-binary-trees/
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
  public List<TreeNode> allPossibleFBT(int N) {
    List<TreeNode> result = new ArrayList();
    if (N == 1) {
      result.add(new TreeNode(0));
      return result;
    }
    if (N % 2 == 0) {
      return result;
    }

    int leftNum = 1;
    int rightNum = N - 2;

    while (rightNum > 0) {
      List<TreeNode> leftTree = this.allPossibleFBT(leftNum);
      List<TreeNode> rightTree = this.allPossibleFBT(rightNum);

      for (int i = 0; i < leftTree.size(); i++) {
        for (int j = 0; j < rightTree.size(); j++) {
          TreeNode root = new TreeNode(0);
          root.left = leftTree.get(i);
          root.right = rightTree.get(j);
          result.add(root);
        }
      }
      leftNum += 2;
      rightNum -= 2;
    }
    return result;
  }
}
