/**
 * 最长回文子串
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 实例：
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (!s) {
        return ''
    }
    const romeArray = [] // 所有是回文的数组
    let longestPalindromeStr = '' // 最长的回文

    for (let baseIndex = 0; baseIndex < s.length; baseIndex++) {
        for (let i = baseIndex + 1; i < s.length; i++) {
            const currentStr = s.slice(baseIndex, i)

            /* 区字符串的前半段，和后半段，后半段反转比较 */
            const preStr = currentStr.slice(0, Math.floor(currentStr.length / 2))
            const nextStr = currentStr.slice(Math.ceil(currentStr.length / 2))

            if (preStr === nextStr.split('').reverse().join('')) {
                romeArray.push(currentStr)

                // 已经有最长的，就不再重新赋值
                if (longestPalindromeStr.length < currentStr.length) {
                    longestPalindromeStr = currentStr
                }
            }
        }
    }
    if (!longestPalindromeStr) {
        return s[0]
    }
    return longestPalindromeStr
};
// var longestPalindrome = function (s) {
//     if (s.length === 0) {
//         return s
//     }
//     let len = Math.min(s.length + 1, 1000)

//     for (let i = len; i > 0; i--) {
//         for (let t = 0; t <= len - i; t++) {
//             let x = s.slice(t, i + t);
//             if (res(x)) {
//                 return res(x)
//             }
//         }
//     }
// };

// function res(str) {
//     let arr = str.split('');
//     let s = [];
//     let state = str;
//     for (let i = 0; i < arr.length / 2; i++) {
//         if (arr[i] !== arr[arr.length - i - 1]) {
//             state = false;
//             return;
//         }
//     }
//     return state;
// }
console.time()
longestPalindrome("zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir")
console.timeEnd()