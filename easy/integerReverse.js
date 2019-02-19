/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 示例
 * 
 * 输入：123
 * 输出：321
 * 
 * 输入：-123
 * 输出：-321
 * 
 * 输入：120
 * 输出：21
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isPositive = x >= 0 ? true : false // 是否是正数
    const reverseNum = reverseNumber(Math.abs(x))
    const result = Number(`${isPositive ? '' : '-'}${Number(reverseNum)}`)

    return result
};

function reverseNumber (num) {
    const MAX_VALUE = Math.pow(2, 31) - 1
    const MIN_VALUE = -Math.pow(2, 31)
    let rev = 0

    while (num !== 0) {
        // pop：弹出个位数
        const pop = num % 10
        num = Math.floor(num / 10)

        if (rev > MAX_VALUE / 10 || (rev === MAX_VALUE / 10 && pop > 7)) {
            return 0
        }
        if (rev < MIN_VALUE / 10 || (rev === MIN_VALUE / 10 && pop < -8)) {
            return 0
        }
        // push：推入个位数
        rev = rev * 10 + pop
    }
    return rev
}

console.log(reverse(-120))

// var reverse = function(x) {
//     const MIN_NUMBER = -Math.pow(2, 31)
//     const MAX_NUMBER = Math.pow(2, 31) - 1
//     const isPositive = x >= 0 ? true : false // 是否是正数
//     const absNum = Math.abs(x)
//     const reverseNum = absNum.toString().split('').reverse().join('')
//     const result = Number(`${isPositive ? '' : '-'}${Number(reverseNum)}`)

//     return result < MIN_NUMBER || result > MAX_NUMBER ? 0 : result
// };
