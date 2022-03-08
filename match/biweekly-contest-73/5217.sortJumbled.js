/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */

var sortJumbled = function(mapping, nums) {
  var getNum = (num) => {
    num = String(num)
    let newNum = ''
    for (let j = 0; j < num.length; j++) {
      newNum += String(mapping[num[j]])
    }
    return Number(newNum)
  }
  nums.sort((a, b) => getNum(a) - getNum(b))
  return nums
};

sortJumbled([8,9,4,0,2,1,3,5,7,6], [991,338,38])
