/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  const res = []
  const map = {
      "(": ")",
      "[": "]",
      "{": "}",
  }
  for (let item of s) {
      // 左半部分进入循环
      if (map[item]) {
          // 放入右半部分
          res.push(map[item])
      } else {
          // 右半部分进入循环
          if (res.length === 0 || item !== res.pop()) {
              return false;
          };
      }
  }
  return res.length === 0
};