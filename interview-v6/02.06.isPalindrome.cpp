// 面试题 02.06. 回文链表
// https://leetcode-cn.com/problems/palindrome-linked-list-lcci/
#include <stdlib.h>
#include <vector>

struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
  bool isPalindrome(ListNode* head) {
    std::vector<int> arr;

    while (head != nullptr) {
      arr.emplace_back(head->val);
      head = head->next;
    }
    int i = 0;
    int j = arr.size() - 1;

    while (i < j) {
      if (arr[i++] != arr[j--]) {
        return false;
      }
    }
    return true;
  }
};
