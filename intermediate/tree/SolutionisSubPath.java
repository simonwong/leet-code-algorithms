/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class SolutionisSubPath {
  public boolean isSubPath(ListNode head, TreeNode root) {
    if (head == null) {
      return true;
    }
    if (root == null) {
      return false;
    }
    if (root.val == head.val) {
      ListNode ot = head;
      boolean isSub = dfs(root, ot);
      if (isSub) {
        return true;
      }
    }
    return isSubPath(head, root.left) || isSubPath(head, root.right);
  }

  boolean dfs(TreeNode root, ListNode head) {
    if (head == null) {
      return true;
    }
    if (root == null) {
      return false;
    }
    if (root.val == head.val) {
      return dfs(root.left, head.next) || dfs(root.right, head.next);
    }
    return false;
  }
}
