# 分治法

分治法的本质：

- 递归：利用递归思想
- 分解：大问题分解成小问题



例题：

- 169
- 53
- 215

---

## 题型一

### [169. 多数元素](https://leetcode-cn.com/problems/majority-element/)

难度简单

给定一个大小为 *n* 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 **大于** `⌊ n/2 ⌋` 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 

**示例 1：**

```
输入：[3,2,3]
输出：3
```

**示例 2：**

```
输入：[2,2,1,1,1,2,2]
输出：2
```

 

**进阶：**

- 尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。

---

- 方法：
- 题解：
- 视频：https://www.bilibili.com/video/BV1sy4y1q79M?p=62
- 说明：
  - 拆分条件：获取每个区域内的高频值
  - 边界条件：下标相同，则到底了，改返回上一个栈结果了
- 代码：

<details>
  <summary>
      <mark><font>点击查看详细内容</font></mark></summary>

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    return getMajority(nums, 0, nums.length -1)
};

function getMajority(nums, left, right) {
    // 如果左边等于右边，说明到了最下面，即只有一个元素的时候，不可拆分了，则返回任意一个即可
    if (left === right) return nums[left]

    let mid = Math.floor(left + (right - left)/2)

    const leftMajority = getMajority(nums, left, mid)
    const rightMajority = getMajority(nums, mid + 1, right)

    // 如果左右两边的高频值都相等，则返回任意一个高频值即可 
    if (leftMajority === rightMajority) return leftMajority

    let leftCount = 0
    let rightCount = 0

    for(let i = left; i<= right; i++) {
        if (nums[i] === leftMajority) {
            leftCount ++
        } else if (nums[i] === rightMajority) {
            rightCount ++
        }
    }
    return Math.max(leftCount, rightCount) === leftCount ? leftMajority : rightMajority
}
```
</details>


### [53. 最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)

难度简单

给定一个整数数组 `nums` ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

 

**示例 1：**

```
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
```

**示例 2：**

```
输入：nums = [1]
输出：1
```

**示例 3：**

```
输入：nums = [0]
输出：0
```

**示例 4：**

```
输入：nums = [-1]
输出：-1
```

**示例 5：**

```
输入：nums = [-100000]
输出：-100000
```

 

**提示：**

- `1 <= nums.length <= 3 * 104`
- `-105 <= nums[i] <= 105`

 

**进阶：**如果你已经实现复杂度为 `O(n)` 的解法，尝试使用更为精妙的 **分治法** 求解。

---

- 方法：
- 题解：https://mp.weixin.qq.com/s/3GAD0a-aI_hQJo7IZMQTlQ
- 视频：https://www.bilibili.com/video/BV1sy4y1q79M?p=63
- 代码：

<details>
  <summary>
      <mark><font>点击查看详细内容</font></mark></summary>

```js
/**
 * // 暴力法，
 * // 动态规划法
 * // 双指针
 * 分治法（递归+拆解）
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
   if (!nums.length) return
   return getMax(nums, 0 , nums.length - 1 )
};

function getMax(nums, left, right) {
    if (left == right) return nums[left]

    const mid = Math.floor(left + (right - left) / 2)

    let leftMax = getMax(nums, left, mid)
    let rightMax = getMax(nums, mid + 1, right)
    let crossMAx = getCrossMax(nums, left, right)

    return Math.max(leftMax, rightMax, crossMAx)
}

function getCrossMax(nums, l, r) {

    const mid = Math.floor(l + (r - l) / 2)

    let leftSum = nums[mid];
    let leftMax = leftSum;

    for (let i = mid - 1; i >= l; i--) {
        leftSum += nums[i];
        leftMax = Math.max(leftMax, leftSum);
    }

    // from mid+1 to rightmost
    let rightSum = nums[mid+1];
    let rightMax = rightSum;
    
    // 这里是 mid + 2，是因为前面 let rightSum = nums[mid+1]; 已经加了一次
    for (let i = mid + 2; i <= r; i++) {
        rightSum += nums[i];
        rightMax = Math.max(rightMax, rightSum);
    }

    return leftMax + rightMax;
}
```
</details>