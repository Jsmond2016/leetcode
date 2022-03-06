/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {

  const hash = new Set();
  for (let value of nums) {
      if (hash.has(value)) return true;
      hash.add(value)
  }
  return false
};

// ------ 法二 ----------------

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  let set = new Set(nums)
  return set.size !== nums.length
};

// --------- 法三 ---------------

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  nums = nums.sort();
  for (let i=1; i<nums.length; i++) {
      if (nums[i] === nums[i-1]) {
          return true
      }
  }
  return false
};