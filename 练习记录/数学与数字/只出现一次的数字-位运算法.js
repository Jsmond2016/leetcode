/**
 * @param {number[]} nums
 * @return {number}
 * 一个数和它本身做异或运算结果为 0，即 a ^ a = 0；
 * 一个数和 0 做异或运算的结果为它本身，即 a ^ 0 = a。
 *
 * 资料来源：常用的位操作 https://labuladong.gitee.io/algo/4/31/118/
 * 
 */

var singleNumber = function(nums) {
    let res = 0
    for (let v of nums) {
        res ^= v
    }
    return res
 };