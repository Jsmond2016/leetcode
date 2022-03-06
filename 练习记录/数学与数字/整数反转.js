/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  let res = 0
  while (x) {
      // 结果每次 * 10 + x 的模
      res = res * 10 + x % 10
      if (res > Math.pow(2, 31) -1 || res < -Math.pow(2, 31)) return 0
      // x 每次 除以 10 取整；
      x = ~~(x / 10)
  }
  return res
};