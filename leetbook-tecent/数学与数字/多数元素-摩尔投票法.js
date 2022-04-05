/**
 * @param {number[]} nums
 * @return {number}
 * 摩尔投票法： https://leetcode-cn.com/problems/majority-element/solution/3chong-fang-fa-by-gfu-2/
 */
 var majorityElement = function(nums) {
  let back = nums[0], count = 1;
  for (let v of nums) {
      if (back === v) {
          count ++
      } else if (--count === 0){
          back = v;
          count = 1
      }
  }
  return back
};