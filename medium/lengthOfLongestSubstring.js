/**
 * 无重复的最长字符串
 * 例子
 * 
 * in "abcabcbb"
 * out 3
 * 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * in "bbbbb"
 * out 1
 * 最长子串是 "b"
 * 
 * in "pwwkew"
 * out 3
 * 最长子串是 "wke"
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    sArr = s.split('')
    const resultArr = []
    let current = []
    let maxArr = []

    for (let i = 0; i < sArr.length; i++) {
        const curStr = sArr[i]

        // 如果又重复的，归入result，
        if (current.indexOf(curStr) >= 0) {
            resultArr.push([...current])
            // 进行current，从前面去除来去重
            const index = current.indexOf(curStr)
            current.push(curStr)
            current = current.slice(index + 1)
        } else {
            current.push(curStr)

            if (i === sArr.length - 1) {
                resultArr.push([...current])
            }
        }
    }
    resultArr.forEach(res => {
        if (res.length > maxArr.length) {
            maxArr = res
        }
    })
    console.log(maxArr)
    return maxArr.length
};

lengthOfLongestSubstring(' ')
