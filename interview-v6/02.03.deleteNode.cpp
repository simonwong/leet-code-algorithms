#include <stdlib.h>

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

// 面试题 02.03. 删除中间节点
// https://leetcode-cn.com/problems/delete-middle-node-lcci/

class Solution {
public:
  void deleteNode(ListNode* node) {
    ListNode* next = node->next;
    node->val = next->val;
    node->next = next->next;
    next->next = NULL;
  }
};
