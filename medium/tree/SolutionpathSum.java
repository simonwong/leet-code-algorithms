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
/**
 * 使用了一个 sumList 维护当前层次每次累加数组
 */
class Solution {
  int count;
  public int pathSum(TreeNode root, int sum) {
    count = 0;

    ArrayList<Integer> sumList = new ArrayList<Integer>();
    dfs(root, sum, sumList);
    return count;
  }

  void dfs (TreeNode root, int sum, ArrayList<Integer> sumList) {
    if (root == null) {
      return;
    }
    for (int i = 0; i < sumList.size(); i++) {
      int curSum = sumList.get(i) + root.val;
      sumList.set(i, curSum);
      if (curSum == sum) {
        count++;
      }
    }
    sumList.add(root.val);
    if (root.val) {
      count++;
    }
    dfs(root.left, sum, (ArrayList<Integer>) sumList.clone());
    dfs(root.right, sum, (ArrayList<Integer>) sumList.clone());
  }
}

/**
 * 傻傻的双重dfs
 */
class SolutionDoubleDfs {
  int count;
  public int pathSum(TreeNode root, int sum) {
    count = 0;
    dfs(root, sum);
    return count;
  }

  void dfs (TreeNode root, int sum) {
    if (root == null) {
      return;
    }
    dfsCalculate(root, sum, 0);

    dfs(root.left, sum);
    dfs(root.right, sum);
  }

  void dfsCalculate (TreeNode root, int sum, int accumulate) {
    if (root == null) {
      return;
    }
    accumulate += root.val;
    if (accumulate == sum) {
      count++;
    }
    dfsCalculate(root.left, sum, accumulate);
    dfsCalculate(root.right, sum, accumulate);
  }
}
