/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  // 双指针，左指针在开始的位置
  let left = 0;
  // 右指针右移
  for (let right=1; right<nums.length; right++) {
      // 两者不等，左指针右移，更新左指针的值，右指针进入下一循环 + 1
      if (nums[left] !== nums[right]) {
          left ++;
          nums[left] = nums[right]
      }
      // 两者若相等，左指针不动，因此这里没有额外的逻辑
  }
  return left + 1;
};