// 278. 第一个错误的版本
// https://leetcode-cn.com/problems/first-bad-version/
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

  return function(n: number): number {
    let s = 1
    let e = n

    while (s < e) {
      const m = s + ((e - s) >> 1)

      if (!isBadVersion(m)) {
        s = m + 1
      } else {
        e = m
      }
    }
    return s
  };
};
