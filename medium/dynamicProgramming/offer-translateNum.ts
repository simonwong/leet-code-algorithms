// 剑指 Offer 46. 把数字翻译成字符串
// https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/

// dp[i] num[i] 位数字可以转成的字符串种数
// dp[i] = dp[i-1] + `${num[i-1]}${nums[i]}` < 26 ? dp[i-2] : 0

function translateNum(num: number): number {
  const str = String(num)
  let dp_0 = 1
  let dp_1 = 1

  for (let i = 1; i < str.length; i++) {
    const next = dp_1 + (Number(str[i-1]) > 0 && Number(str[i-1] + str[i]) < 26 ? dp_0 : 0)
    dp_0 = dp_1
    dp_1 = next
  }
  return dp_1
};
