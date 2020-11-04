// 590. N叉树的后序遍历
// https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/
/*
// Definition for a Node.

*/
import java.util.*;

class Node {
  public int val;
  public List<Node> children;

  public Node() {}

  public Node(int _val) {
      val = _val;
  }

  public Node(int _val, List<Node> _children) {
      val = _val;
      children = _children;
  }
};
/**
 * 使用迭代方式
 */
class Solution {
  public List<Integer> postorder(Node root) {
    LinkedList<Node> stack = new LinkedList<>();
    LinkedList<Integer> result = new LinkedList<>();

    if (root == null) {
      return result;
    }
    stack.add(root);
    while (!stack.isEmpty()) {
      Node node = stack.pollLast();

      result.addFirst(node.val);

      for (Node child : node.children) {
        if (child != null) {
          stack.add(child);
        }
      }
    }
    return result;
  }
}

// // 递归写法
// class Solution {
//   List<Integer> res = new ArrayList<>();

//   public List<Integer> postorder(Node root) {
//     recursiveTree(root);
//     return res;
//   }

//   public void recursiveTree (Node root) {
//     if (root == null) {
//       return;
//     }
//     root.children.forEach(item -> {
//       recursiveTree(item);
//     });
//     res.add(root.val);
//   }
// }
