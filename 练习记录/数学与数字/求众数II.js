// 摩尔投票法。该算法用于1/2情况，它说：“在任何数组中，出现次数大于该数组长度一半的值只能有一个。”

// 那么，改进一下用于 1/3。可以着么说：“在任何数组中，出现次数大于该数组长度1/3的值最多只有两个。”

// 于是，需要定义两个变量。空间复杂度为O(1)。

// 摩尔投票法：https://mabusyao.iteye.com/blog/2223195

// 算法1/3改进：https://blog.csdn.net/weixin_42768679/article/details/81567231



/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 题解：https://leetcode-cn.com/problems/majority-element-ii/solution/tong-ge-lai-shua-ti-la-yi-ti-liang-jie-h-3o03/
 * 
 */
 var majorityElement = function(nums) {
  let cand1 = 0, count1 = 0;
  let cand2 = 0, count2 = 0;
  let res = [];
  for (let num of nums) {
      if (cand1 === num) {
          // 如果是第一个候选者
          count1++;
      } else if (cand2 === num) {
          // 如果是第二个候选者
          count2++;
      } else if (count1 === 0) {
          // 还没有第一个候选者，或者之前的次数已经归0了
          cand1 = num;
          count1 = 1;
      } else if (count2 === 0) {
          // 还没有第二个候选者，或者之前的次数已经归0了
          cand2 = num;
          count2 = 1;
      } else {
          // 当前数与两个候选者都不同
          count1--;
          count2--;
      }
  }
  
  // 再次统计两个候选者的总票数
  count1 = count2 = 0
  for (let num of nums) {
      if (cand1 === num) {
          count1 ++
      }
      if (cand2 === num) {
          count2 ++
      }
  }
  // 加入结果
  if (count1 > nums.length / 3) res.push(cand1);
  if (count2 > nums.length / 3) res.push(cand2);

  // 结去掉重复的，题目可能是 [0,0,0]，不去重的话得到结果为 [0, 0] 过不了用例
  return [...new Set(res)];

};