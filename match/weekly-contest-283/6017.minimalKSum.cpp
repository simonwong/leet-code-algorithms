// 2195. 向数组中追加 K 个整数
// https://leetcode-cn.com/problems/append-k-integers-with-minimal-sum/
#include <iostream>
#include <vector>
#include <algorithm>
#include <stdio.h>
#include <math.h>
using namespace std;

class Solution {
  public:
    long long minimalKSum(vector<int>& nums, int k) {
      sort(nums.begin(), nums.end());
      int n = unique(nums.begin(), nums.end()) - nums.begin();

      long long d = 0;

      for (int i = 0; i < n; i++) {
        if (nums[i] <= k) {
          d += nums[i];
          k++;
        }
      }
      return (1LL + k) * k / 2 - d;
    }
};
