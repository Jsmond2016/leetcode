/**
 * @param {number} x
 * @return {boolean}
 * 
 * 这题和 整数反转思路一样
 * 
 */
 var isPalindrome = function(x) {
    
  if (x < 0) return false

  let bak = x;
  let res = 0
  while (x) {
      res = res * 10 + x % 10
      if (res > Math.pow(2, 31) -1 || res < -Math.pow(2, 31)) return 0
      x = ~~(x / 10)
  }
  return res === bak
};