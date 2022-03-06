/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
  // 1. 丢弃空格
  s = s.trim()
  let sign
  // 2. 读取符号
  if (s[0] === '-') {
      sign = -1
  } else if (s[0] === '+') {
      sign = 1
  }
  const startIndex = sign ? 1 : 0
  let res = 0
  // 3. 读到非数字或结尾
  for (let i = startIndex; i < s.length; i++) {
      if (s[i].match(/\d/)) {
          res = res * 10 + +s[i]
      } else {
          break
      }
  }
  // 4. 符号补充
  if (sign) res *= sign
  // 5. 整数范围
  if (res > 2**31 - 1) return 2**31 - 1
  if (res < -(2**31)) return -(2**31)
  // 6. 返回结果
  return res
};

// 作者：Daniel
// 链接：https://leetcode-cn.com/leetbook/read/tencent/xxgggc/?discussion=jX5Z7K
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。