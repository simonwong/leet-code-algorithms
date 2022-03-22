const baseCode = 'a'.charCodeAt(0)

function isUnique(astr: string): boolean {
  let flag = 0

  for (let i = 0; i < astr.length; i++) {
    let moved = 1 << (astr.charCodeAt(i) - baseCode + 1)

    // flag & moved 为 0 就说明没有重复，比如  (0b0000 | 0b0001) & 0b0001 = 1 说明有重复
    if ((flag & moved) !== 0) {
      return false
    }
    flag |= moved
  }
  return true
};

/**
 * 通过异或的方式使得 flag 越来越大，一旦突然变小，就可以确定有重复值了
 */
// const baseCode = 'a'.charCodeAt(0)

// function isUnique(astr: string): boolean {
//   let flag = 0

//   for (let i = 0; i < astr.length; i++) {
//     const moved = 1 << (astr.charCodeAt(i) - baseCode + 1)
//     if ((flag ^ moved) < flag) {
//       return false
//     }
//     flag ^= moved
//   }
//   return true
// };
