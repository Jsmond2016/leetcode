/**
 * @param {number[]} nums
 * @return {number[]}

    左乘和右乘
    先做左乘的累计left
    在做右乘（倒序）*左乘累计=最终值

    注意：首尾的数字，第 0 个没有左侧，第 n-1 个没有右侧；因此需要借用临时变量 a=1

 */
    var productExceptSelf = function(nums) {
      let n = nums.length;
      let a = 1;
      let res = new Array(n).fill(1);
      for (let i=1; i<n; i++) {
          res[i] = nums[i-1] * res[i-1]
      }
      // 难点： 右乘，把j左边的积和右边的积相乘就是除了该数的积
      // 难点在于，右侧 a 的作用：记录从后往前的 累计乘积
      for (let j=n-1; j>=0; j--) {
          res[j] = res[j] * a
          a *= nums[j]
      }
  
      return res
  };