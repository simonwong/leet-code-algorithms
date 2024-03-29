// 190. 颠倒二进制位
// https://leetcode-cn.com/problems/reverse-bits/
function reverseBits(n: number): number {
  const M1 = 0x55555555 // 01010101010101010101010101010101
  const M2 = 0x33333333 // 00110011001100110011001100110011
  const M4 = 0x0f0f0f0f // 00001111000011110000111100001111
  const M8 = 0x00ff00ff // 00000000111111110000000011111111

  n = n >>> 1 & M1 | (n & M1) << 1
  n = n >>> 2 & M2 | (n & M2) << 2
  n = n >>> 4 & M4 | (n & M4) << 4
  n = n >>> 8 & M8 | (n & M8) << 8
  return (n >>> 16 | n << 16) >>> 0
}
