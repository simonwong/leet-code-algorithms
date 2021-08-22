// 139. 单词拆分
// https://leetcode-cn.com/problems/word-break/
function wordBreak(s: string, wordDict: string[]): boolean {
  const wordMap: Record<string, number> = wordDict.reduce((prevObj, nextStr) => {
    return {
      ...prevObj,
      [nextStr]: 1,
    }
  }, {})

  const dp: boolean[] = new Array(s.length + 1).fill(false)
  dp[0] = true

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordMap[s.substring(j, i)]) {
        dp[i] = true
        break
      }
    }
  }
  return dp[s.length]
};

wordBreak("aaaaaaa", ["aaaa","aaa"])
