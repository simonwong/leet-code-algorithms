// 354. 俄罗斯套娃信封问题
// https://leetcode-cn.com/problems/russian-doll-envelopes/
function maxEnvelopes(envelopes: number[][]): number {
  if (envelopes.length === 0) return 0
  // 先进行排序
  const sorted: number[][] = envelopes.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0]
    }
    return b[1] - a[1]
  })
  const len = envelopes.length
  const f = new Array(len).fill(1);
  let res = 1
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (envelopes[j][1] < envelopes[i][1]) {
        f[i] = Math.max(f[i], f[j] + 1)
      }
    }
    res = Math.max(res, f[i])
  }

  return res
};
// function maxEnvelopes(envelopes: number[][]): number {
//   if (envelopes.length === 0) return 0
//   // 先进行排序
//   const sorted: number[][] = envelopes.sort((a, b) => {
//     if (a[0] !== b[0]) {
//       return a[0] - b[0]
//     }
//     return b[1] - a[1]
//   })
//   const len = envelopes.length
//   const f = new Array(len).fill(1);
//   let res = 1
//   for (let i = 1; i < len; i++) {
//     for (let j = 0; j < i; j++) {
//       if (envelopes[j][1] < envelopes[i][1]) {
//         f[i] = Math.max(f[i], f[j] + 1)
//       }
//     }
//     res = Math.max(res, f[i])
//   }

//   return res
// };
