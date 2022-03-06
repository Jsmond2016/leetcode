/**
 * 题目：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * 
 * @param {string} s
 * @return {number}
 * 
 * 滑动窗口：左指针和右指针，维护不重复字符的窗口
 * 
 */
 var lengthOfLongestSubstring = function(s) {
  const set = new Set()

  let i=0, j=0, maxLength = 0

  if (!s.length) return 0

  for (i; i< s.length; i ++) {
    if (!set.has(s[i])) {
      set.add(s[i])
      maxLength = Math.max(maxLength, set.size)
    } else { 
      while (set.has(s[i])) {
        set.delete(s[j])
        j++
      }
      set.add(s[i])
    }
  }

  return maxLength
};

// ------- 法二 --------------

/**
 * @param {string} s
 * @return {number}
 * 
 * 滑动窗口 + hash 
 * 
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/longest-substring-without-repeating-characters-b-2/
 */
 var lengthOfLongestSubstring = function(s) {
  let hash = {}
  let i = res = 0;
  const { max } = Math;
  for (let j=0; j < s.length; j++) {
      let c = s[j]
      i = max(i, hash[c] || 0)
      // 核心在这里，如果有重复的值，每次都会更新 hash[重复值] 的 位置，方便计算 无重复子串的 长度
      // 有个疑惑，这里 hash[c] 为什么是 j + 1 ? 
      // 举例：dvdf 四个字母，r=2，时，原本 l=0 应该更新为d 的后一个字母 v，所以位置 + 1；
      // 对于正常的数字，所有值下标都 + 1，不影响最终的减法 j - i + 1 的差值
      hash[c] = j + 1
      res = max(res, j - i + 1)
  }
  return res
};