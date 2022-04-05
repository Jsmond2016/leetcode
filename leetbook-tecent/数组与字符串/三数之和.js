/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  var result = []
  //特殊情况直接返回
  if(nums[0] > 0 || nums.length < 3){
      return result
  }
  for (let i = 0; i < nums.length; i++) {
      //两个一样的值跳过
      if(i > 0 && nums[i] === nums[i - 1]){
          continue
      }
      var left = i + 1
      var right = nums.length - 1
      while(left < right){
          var sum = nums[i] + nums[left] + nums[right]
          if(sum > 0){
              right--
          } else if(sum < 0){
              left++
          } else{
              //如果两个值一样，继续++
              result.push([nums[i], nums[left], nums[right]])
              // ！！！！以下情况容易忽略
              while(left < right && nums[left] === nums[left + 1]) left ++
              while(left < right && nums[right] === nums[right -1]) right --

              left ++
              right -- 
          }
      }
  }
  return result
};

// 作者：风
// 链接：https://leetcode-cn.com/leetbook/read/tencent/xxst6e/?discussion=JMv2MR
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。