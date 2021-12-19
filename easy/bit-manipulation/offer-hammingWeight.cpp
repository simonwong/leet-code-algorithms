// 剑指 Offer 15. 二进制中1的个数
// https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/
class Solution {
public:
    int hammingWeight(uint64_t n) {
      n -= (n >> 1) & 0x5555555555555555;
      n = (n & 0x3333333333333333) + ((n >> 2) & 0x3333333333333333);
      n = (n + (n >> 4)) & 0x0f0f0f0f0f0f0f0f;
      return (n * 0x0101010101010101) >> 56;
    }
};
