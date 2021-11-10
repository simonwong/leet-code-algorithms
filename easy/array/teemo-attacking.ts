// 495. 提莫攻击
// https://leetcode-cn.com/problems/teemo-attacking/
function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let ans = 0
  let expired = 0
  for (let i = 0; i < timeSeries.length; i++) {
    if (timeSeries[i] >= expired) {
      ans += duration
    } else {
      ans += timeSeries[i] + duration - expired
    }
    expired = timeSeries[i] + duration
  }
  return ans
};

findPoisonedDuration([1,2], 2)
