// 109. 有序链表转换二叉搜索树
// https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
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
 * 这个是比较傻的方式，先将链表转成数组
 */
class ASolution {
  public TreeNode sortedListToBST(ListNode head) {
    ArrayList<Integer> sortedArr = this.listNodeToArrayList(head);
    return generateTreeNode(sortedArr, 0, sortedArr.size() - 1);
  }

  TreeNode generateTreeNode (ArrayList<Integer> array, int i, int j) {
    if (i > j) {
      return null;
    }
    int mid = (int) Math.ceil(((double) i + (double) j) / 2);
    TreeNode root = new TreeNode(array.get(mid));
    root.left = generateTreeNode(array, i, mid - 1);
    root.right = generateTreeNode(array, mid + 1, j);

    return root;
  }

  ArrayList<Integer> listNodeToArrayList (ListNode head) {
    ArrayList<Integer> array = new ArrayList();

    while (head != null) {
      array.add(head.val);
      head = head.next;
    }

    return array;
  }
}
