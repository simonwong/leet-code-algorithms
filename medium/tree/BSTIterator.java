// 173. 二叉搜索树迭代器
// https://leetcode-cn.com/problems/binary-search-tree-iterator/
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class BSTIterator {
  Stack<TreeNode> stack;

  public BSTIterator(TreeNode root) {
    this.stack = new Stack<TreeNode>();

    this._leftmostInorder(root);
  }

  private void _leftmostInorder (TreeNode root) {
    while (root != null) {
      this.stack.add(root);
      root = root.left;
    }
  }

  /** @return the next smallest number */
  public int next() {
    TreeNode current = this.stack.pop();

    if (current.right != null) {
      this._leftmostInorder(current.right);
    }

    return current.val;
  }

  /** @return whether we have a next smallest number */
  public boolean hasNext() {
    return this.stack.size() > 0;
  }
}

/**
* Your BSTIterator object will be instantiated and called as such:
* BSTIterator obj = new BSTIterator(root);
* int param_1 = obj.next();
* boolean param_2 = obj.hasNext();
*/

/**
 * 普通的解法
 * 空间复杂度是 O(n)
 */
class BSTIteratorT2 {
  ArrayList<Integer> nodeSorted;
  int index;

  public BSTIterator(TreeNode root) {
    this.nodeSorted = new ArrayList<Integer>();
    this.index = -1;
    this.initSorted(root);
  }

  private void initSorted (TreeNode root) {
    if (root == null) {
      return;
    }
    this.initSorted(root.left);
    this.nodeSorted.add(root.val);
    this.initSorted(root.right);
  }

  /** @return the next smallest number */
  public int next() {
    this.index += 1;
    return this.nodeSorted.get(this.index);
  }

  /** @return whether we have a next smallest number */
  public boolean hasNext() {
    return this.index + 1 < this.nodeSorted.size();
  }
}
