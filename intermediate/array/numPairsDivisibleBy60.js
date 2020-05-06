// 1010. 总持续时间可被 60 整除的歌曲
// https://leetcode-cn.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  let count = 0
  const residueMap = {}

  for (let i = 0; i < time.length; i++) {
    let residue = time[i] % 60

    if (residue === 0) {
      count += residueMap[0] || 0
    } else {
      count += residueMap[60 - residue] || 0
    }

    if (residueMap[residue] != null) {
      residueMap[residue] = residueMap[residue] += 1
    } else {
      residueMap[residue] = 1
    }
  }
  return count
};

numPairsDivisibleBy60([60, 60, 60])


// var numPairsDivisibleBy60 = function(time) {
//   let count = 0
//   const residueArr = []

//   for (let i = 0; i < time.length; i++) {
//     residueArr.forEach(r => {
//       if (r === 60) {
//         r = 0
//       }
//       if (r === time[i] % 60) {
//         count ++
//       }
//     })

//     let residue = 60 - time[i] % 60
//     residueArr.push(residue)
//   }
//   return count
// };
