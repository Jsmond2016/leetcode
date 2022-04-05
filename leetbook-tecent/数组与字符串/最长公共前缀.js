/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  // 先排序，从最短的字符串开始截取前缀
  let pre = strs[0]
  let index = 1
  while (index < strs.length) {
      // 不断截取
      while (strs[index].indexOf(pre) !== 0) {
          pre = pre.substring(0, pre.length -1)
      }
      index ++
  }
  return pre;
};