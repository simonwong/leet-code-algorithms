// 剑指 Offer 67. 把字符串转换成整数
// https://leetcode-cn.com/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof/

// 被 case 搞吐了，不想优化了....

function strToInt(str: string): number {
  let ans = ''

  enum State {
    STATE_START,
    STATE_SIGN,
    STATE_NUM,
  }
  let state = State.STATE_START
  for (let i = 0; i < str.length; i++) {
    if (state < State.STATE_SIGN && str[i] === ' ') {
      continue
    }
    if (str[i] === '-' || str[i] === '+') {
      if (state >= State.STATE_SIGN) {
        break
      }
      ans += str[i]
      state = State.STATE_SIGN
    } else if (/\d/.test(str[i])) {
      state = State.STATE_NUM
      ans += str[i]
    } else {
      if (state < State.STATE_NUM) {
        return 0
      } else {
        break
      }
    }
  }

  if (state < State.STATE_NUM) {
    return 0
  }

  const num = Number(ans)
  if (num < -2147483648) {
    return -2147483648
  }
  if (num > 2147483647) {
    return 2147483647
  }
  return num
};
