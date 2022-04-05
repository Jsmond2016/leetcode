/**
 * @param {number} n
 * @return {boolean}
 * 题解：https://labuladong.gitee.io/algo/4/31/118/
 * 
 * n&(n-1) 这个操作是算法中常见的，作用是消除数字 n 的二进制表示中的最后一个 1
 * 
 * 个人理解：数字转换成二进制：(1).toString(2) = '1', (0).toString(2) = '0'

 * 
 * 只要是 2 的幂次方，递归除以 2 一定是 2^0 = 1, 那么 1 的二进制是 1，0的二进制是 0，
 * 
 * 而 0&0=0,0&1=0,1&0=0,1&1=1
 * 
 * 所以1&0 => 01&&00 => 00 => 0，也就是说 & 后结果为 0才 表示这个数是 2 的幂次方
 */
 var isPowerOfTwo = function(n) {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
};