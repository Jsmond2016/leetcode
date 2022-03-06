/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function (s) {
  // 思路：从中间开始向两边扩散来判断回文串
  let palindrome = (s, l, r) => {
    while (l >= 0 && r < s.length && s[l] == s[r]) {
      // 向两边展开
      l--;
      r++;
    }
    // 返回以 s[l] 和 s[r] 为中心的最长回文串
    return s.substr(l + 1, r - l - 1);
  };
  let res = "";
  for (let i = 0; i < s.length; i++) {
    // 以s[i]为中心的最长回文串
    let s1 = palindrome(s, i, i);
    // 以s[i]和s[i+1]为中心的最长回文串
    let s2 = palindrome(s, i, i + 1);
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }
  return res;
};

// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/longest-palindromic-substring/solution/si-lu-fei-chang-jian-ji-zhi-you-san-ju-h-bh86/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


// ------------------方法二-------------------

/**
 * @param {string} s
 * @return {string}
 * 做题思想：使用对称性 的方法解题，主要考虑 2 种情况
 * 情况1："aba" 返回最大回文子串为 "aba"
 * 情况2："aa" 以 2 个 a 中间的位置为中心，两个 a 都是对称的
 */
 var longestPalindrome = function(s) {

  if (s.length < 2) {
    return s
  }
  // 这里 maxLength 设置为 1 是因为 这种情况 [a, b] 输出的 最长子串 是 "a" 而不是 ""
  let start = 0, maxLength = 1;
  function expandCenterAround(left, right) {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
      // 为什么是 right - left + 1，因为 "aba" 的right为2，left为0，差值是2，实际长度应该为3
      if (right - left + 1 > maxLength) {
         maxLength = right - left + 1
         start = left
      }
      left --
      right ++
    }
  }

  for(let m=0; m<s.length; m++) {
    // 考虑情况1
    expandCenterAround(m -1, m + 1)
    // 考虑情况2
    expandCenterAround(m, m + 1)
  }

  return s.substring(start, start + maxLength)

};