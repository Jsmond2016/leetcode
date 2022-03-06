/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let n = nums.length;
  const hash = new Map();

  for (let i=0; i<n; i++) {
      const diff = target - nums[i]
      if (hash.get(diff) !== undefined) {
          return [hash.get(diff), i]
      } else {
          hash.set(nums[i], i)
      }
  }

  return []

  
};