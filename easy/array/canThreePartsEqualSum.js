// 1013. 将数组分成和相等的三个部分
// https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  if (A.length < 3) {
    return false
  }
  const averageNum = A.reduce((a, b) => a + b, 0) / 3
  if (averageNum.toString().includes('.')) {
    return false
  }
  let count = 0
  let times = 0

  for (let i = 0; i < A.length; i++) {
    count += A[i]

    if (count === averageNum && times <= 1) {
      times += 1
      count = 0

      if (times === 2 && i === A.length - 1) {
        return false
      }
    }
    if (count === averageNum && times === 2 && i === A.length - 1) {
      return true
    }
  }
  return false
};

console.log(canThreePartsEqualSum([1,-1,1,-1]))
