// 剑指 Offer 43. 1～n 整数中 1 出现的次数
// https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/

function countDigitOne(n: number): number {
  let mulk = 1
  let ans = 0
  for (let k = 0; n >= mulk; ++k) {
    ans += (Math.floor(n / (mulk * 10))) * mulk + Math.min(Math.max(n % (mulk * 10) - mulk + 1, 0), mulk);
    mulk *= 10;
  }
  return ans
};

countDigitOne(10)




// 100
// 0-100

// xx1
// x1x
// 1xx

// x11
// 1x1
// 11x

// 111
