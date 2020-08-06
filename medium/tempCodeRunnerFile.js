/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const result = []
    // const maxSpace = numRows - 2 < 0 ? 0 : numRows - 2
    let diffIndex = Math.max(numRows + numRows - 2, 1)

    for (let rowNum = 0; rowNum < numRows; rowNum++) {
        let index = rowNum
        
        // 最后一行和第一行，每次之间没有间隔
        if (rowNum === 0 || rowNum === numRows - 1 || numRows < 3) {
            while (s[index]) {
                result.push(s[index])

                index = diffIndex + index
            }
        } else {
            const middleDiffIndex = rowNum * 2
            while (s[index] || (index - middleDiffIndex > rowNum && s[index - middleDiffIndex])) {
                if (index === rowNum) {
                    result.push(s[index])
                } else {
                    result.push(s[index - middleDiffIndex] || '')
                    result.push(s[index] || '')
                }
                index = diffIndex + index
            }
        }
    }
    console.log(result.join(''))
    return result.join('')
};


convert('AB', 1)
