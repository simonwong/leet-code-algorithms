// void slidingWindow(string s, string t) {
//   unordered_map<char, int> need, window;
//   for (char c : t) need[c]++;

//   int left = 0, right = 0;
//   int valid = 0;
//   while (right < s.size()) {
//       // c 是将移入窗口的字符
//       char c = s[right];
//       // 右移窗口
//       right++;
//       // 进行窗口内数据的一系列更新
//       ...

//       /*** debug 输出的位置 ***/
//       printf("window: [%d, %d)\n", left, right);
//       /********************/

//       // 判断左侧窗口是否要收缩
//       while (window needs shrink) {
//           // d 是将移出窗口的字符
//           char d = s[left];
//           // 左移窗口
//           left++;
//           // 进行窗口内数据的一系列更新
//           ...
//       }
//   }
// }

// 滑动窗口思路

// 1. 在字符串 s 上使用双指针，初始化 `left = right = 0`，**左闭右开区间** `[left, right)` 为一个【窗口】
// 2. 先不断增加 `right` 扩大窗口，直到窗口的字符串满足要求
// 3. 停止增加 `right` ，转而不断增加 `left` 指针，缩小窗口，直到窗口中的字符不再符合要求。同时每次增加 `left` ， 更新一轮结果
// 4. 重复 2、3 ，直到 `right` 达到尽头

// 76. 最小覆盖子串
// https://leetcode-cn.com/problems/minimum-window-substring/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const window = {}
  const need = {}

  for (let i = 0; i < t.length; i++) {
    const str = t[i]
    need[str] = need[str] ? need[str] + 1 : 1
    window[str] = 0
  }

  let left = 0
  let right = 0
  let valid = 0 // 记录 window 和 need 的一样个数

  let start = 0
  let len = Number.MAX_SAFE_INTEGER

  while (right < s.length) {
    const cur = s[right]
    right++

    if (need[cur]) {
      window[cur]++

      if (window[cur] == need[cur]) {
        valid++
      }
    }


    // 左侧窗口是否要收缩
    while (valid === Object.keys(need).length) {
      // 更新最小覆盖子串
      if (right - left < len) {
        start = left
        len = right - left
      }
      const del = s[left]
      left++

      if (need[del]) {
        if (window[del] === need[del]) {
          valid--
        }
        window[del]--
      }
    }
  }
  return len === Number.MAX_SAFE_INTEGER ? '' : s.substring(start, len + start)
}
