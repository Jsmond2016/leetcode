/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 方法：使用一个 hash 即可
 * 
 */
 var singleNumber = function(nums) {
  let hashMap = new Map();

  for (let v of nums) {
      if (hashMap.has(v)) {
          hashMap.set(v, hashMap.get(v) + 1)
      } else {
          hashMap.set(v, 1)
      }
      
  }
  return  [...hashMap].filter(([k, v]) => v === 1)[0][0]
};