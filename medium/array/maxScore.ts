// 1423. 可获得的最大点数
// https://leetcode-cn.com/problems/maximum-points-you-can-obtain-from-cards/

function maxScore(cardPoints: number[], k: number): number {
  const length = cardPoints.length
  let left = k - 1;
  let right = length

  let res = 0
  for (let i = 0; i <= left; i++) {
    res += cardPoints[i];
  }
  let cur = res

  while (left > -1 && right <= length) {
    const curLeftPoint = cardPoints[left] ?? 0
    const nextRightPoint = cardPoints[right - 1] ?? 0

    cur = cur - curLeftPoint + nextRightPoint

    res = Math.max(res, cur)
    left--
    right--
  }
  return res
};

maxScore([1,2,3,4,5,6,1], 3)
