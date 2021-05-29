# 数组和字符串



## 数组简介

### 724-寻找数组的中心索引

难度简单

给你一个整数数组 `nums`，请编写一个能够返回数组 **“中心下标”** 的方法。

数组 **中心下标** 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。

如果数组不存在中心下标，返回 `-1` 。如果数组有多个中心下标，应该返回最靠近左边的那一个。

**注意：** 中心下标可能出现在数组的两端。

 

**示例 1：**

```
输入：nums = [1, 7, 3, 6, 5, 6]
输出：3
解释：
中心下标是 3 。
左侧数之和 (1 + 7 + 3 = 11)，
右侧数之和 (5 + 6 = 11) ，二者相等。
```

**示例 2：**

```
输入：nums = [1, 2, 3]
输出：-1
解释：
数组中不存在满足此条件的中心下标。
```

**示例 3：**

```
输入：nums = [2, 1, -1]
输出：0
解释：
中心下标是 0 。
下标 0 左侧不存在元素，视作和为 0 ；
右侧数之和为 1 + (-1) = 0 ，二者相等。
```

 

**提示：**

- `nums` 的长度范围为 `[0, 10000]`。
- 任何一个 `nums[i]` 将会是一个范围在 `[-1000, 1000]`的整数。

---

- 题解： https://leetcode-cn.com/problems/find-pivot-index/solution/xun-zhao-shu-zu-de-zhong-xin-suo-yin-by-gzjle/
- 方法：前缀和方法
- 代码：

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // 前缀和方法 https://leetcode-cn.com/problems/find-pivot-index/solution/xun-zhao-shu-zu-de-zhong-xin-suo-yin-by-gzjle/
    // 假设 左侧和为 sum，nums 总和为 total, 则右侧 sum = total - sum - nums[i]，推倒公式：2 * sum + nums[i] === total
    // 已知 num[i], total, 求 sum ?
    // sum 为动态的，所以在 for 循环中累加即可

    const total = nums.reduce((a, b) => a + b)
    let sum = 0

    for (let i=0; i< nums.length; i++) {
        if (2 * sum + nums[i] === total) {
            return i
        }
        sum += nums[i]
    }
    return -1
};
```

---

- 方法2：时间复杂度比较高

一开始我的方法比较粗暴，每次循环求 左右两侧判断相等得到 index

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    let index = -1
    let left = []
    let right = []
    let getTotal = (arr) => arr.reduce((t, i) => i + t, 0)
    for (let i=0; i< nums.length; i++) {
        left = nums.slice(0, i)
        right = nums.slice(i+1)
        if (getTotal(left) === getTotal(right)) {
            index = i
            break;
        }
    }

    return index
};
```

### 35-搜索插入位置

难度简单

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

**示例 1:**

```
输入: [1,3,5,6], 5
输出: 2
```

**示例 2:**

```
输入: [1,3,5,6], 2
输出: 1
```

**示例 3:**

```
输入: [1,3,5,6], 7
输出: 4
```

**示例 4:**

```
输入: [1,3,5,6], 0
输出: 0
```

---

- 题解：https://leetcode-cn.com/problems/search-insert-position/solution/
- 方法：二分法
- 代码：

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (!nums || !nums.length) return 0
    let l = 0, r = nums.length - 1;
    
    // 先用 二分法做
    while(l <= r) {
        let mid = Math.floor(l + (r-l)/2)

        if (nums[mid] === target) return mid
        if (nums[mid] < target) {
            l = mid + 1
        } else {
            r = mid -1
        }
    }
    // 二分法没找到，说明不存在，那么此时 左指针和右指针中间，就是 target 该插入的位置，因为 l = mid + 1，所以直接取 l
    return l
};
```



### 03-56-合并区间

难度中等

以数组 `intervals` 表示若干个区间的集合，其中单个区间为 `intervals[i] = [starti, endi]` 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

 

**示例 1：**

```
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
```

**示例 2：**

```
输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
```

 

**提示：**

- `1 <= intervals.length <= 104`
- `intervals[i].length == 2`
- `0 <= starti <= endi <= 104`



---

- 题解：
  - 题解1：https://leetcode-cn.com/problems/merge-intervals/solution/merge-intervals-by-ikaruga/
  - 题解2：https://leetcode-cn.com/problems/merge-intervals/solution/chi-jing-ran-yi-yan-miao-dong-by-sweetiee/
- 方法：排序 + 双指针
- 代码：

```js

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 思路：排序 + 双指针
 * 参考题解：https://leetcode-cn.com/problems/merge-intervals/solution/merge-intervals-by-ikaruga/
 */
var merge = function(intervals) {
    // 排序
    intervals = intervals.sort((a, b) => a[0] - b[0])
    let ans = []
    for (let i=0; i< intervals.length;) {
        // 当前元组的第二个值（尾巴）
        let t = intervals[i][1]
        // 下一个元组
        let j = i + 1
        // 下一个元组的第一个值比当前元组的第二个值小（尾巴比下一个头小），说明需要合并
        while (j < intervals.length && intervals[j][0] <= t) {
            t = Math.max(t, intervals[j][1])
            j ++
        }
        ans.push([intervals[i][0], t])
        i = j
    }
    return ans
};
```



## 二维数组简介



### 48-旋转数组

- [面试题 01.07. 旋转矩阵](https://leetcode-cn.com/problems/rotate-matrix-lcci/)

难度中等

给你一幅由 `N × N` 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。

不占用额外内存空间能否做到？

 

**示例 1:**

```
给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
```

**示例 2:**

```
给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
```

**注意**：本题与主站 48 题相同：https://leetcode-cn.com/problems/rotate-image/

---

- 题解：https://leetcode-cn.com/problems/rotate-matrix-lcci/solution/xuan-zhuan-ju-zhen-by-leetcode-solution/
- 方法：
  - 直接使用辅助数组，总结公式置换
  - 先水平翻转，然后对角线翻转
- 代码：

```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 参考：https://leetcode-cn.com/problems/rotate-matrix-lcci/solution/xuan-zhuan-ju-zhen-by-leetcode-solution/
 */
var rotate = function(matrix) {
    const n = matrix.length
    let matrixArr = new Array(n).fill(0).map(item => new Array(n).fill(0))
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            matrixArr[j][n-i-1] = matrix[i][j]
        }
    }
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            matrix[i][j] = matrixArr[i][j]
        }
    }
    return matrix
};
```



### 面试题-08-零矩阵

[面试题 01.08. 零矩阵](https://leetcode-cn.com/problems/zero-matrix-lcci/)

难度中等

编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。

 

**示例 1：**

```
输入：
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出：
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
```

**示例 2：**

```
输入：
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出：
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
```

---

- 题解：https://leetcode-cn.com/problems/zero-matrix-lcci/solution/
- 方法：各种循环
- 代码：

```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const set = new Set()
    const x = matrix.length
    const y = matrix[0].length
    function clear(nums, m, n) {
        for (let i=0; i<x; i++) {
            set.add([i,n])
        }
        for (let j=0; j<y; j++) {
            set.add([m,j])
        }
    }
    for(let i=0; i< x; i++) {
        for (let j=0; j< y; j++) {
            if (matrix[i][j] === 0) {
                clear(matrix, i, j)
            }
        }
    }
    Array.from(set).forEach(item => {
        matrix[item[0]][item[1]] = 0
    })
    return matrix
};
```



### 498-对角线遍历

[498. 对角线遍历](https://leetcode-cn.com/problems/diagonal-traverse/)

难度中等

给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。

 

**示例:**

```
输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

输出:  [1,2,4,7,5,3,6,8,9]

解释:
```

 

**说明:**

1. 给定矩阵中的元素总数不会超过 100000 。



---

- 题解：https://leetcode-cn.com/problems/diagonal-traverse/solution/xiao-bai-kan-guo-lai-zui-zhi-bai-yi-li-jie-ban-ben/
- 方法：需要总结几个公式
  - 遍历总次数：行数 + 列数 -1
  - 遍历方向：通过每次遍历的次数 取 的2 余数 判断遍历的方向
  - 边界情况
- 代码：

```js
/**
 * @param {number[][]} mat
 * @return {number[]}
 * 
 * 题解：https://leetcode-cn.com/problems/diagonal-traverse/solution/xiao-bai-kan-guo-lai-zui-zhi-bai-yi-li-jie-ban-ben/
 */
var findDiagonalOrder = function(mat) {
    if (mat.length === 0) return
    const res = []
    let x = 0, y = 0
    // n 表示它需要遍历的次数，关系为：遍历次数 = 行 + 列 -1
    let row = mat.length, col = mat[0].length, n = row + col - 1
    for (let i=0; i<n; i++) {
        // 向左下方遍历
        if (i % 2 === 0) {
            while (x >= 0 && y < col) {
                res.push(mat[x][y])
                x--
                y++
            }
            // 越界情况
            if (y < col) {
                x ++
            } else {
                x += 2
                y --
            }
        } else {
            // 向右上方遍历
            while ( x < row && y >= 0) {
                res.push(mat[x][y])
                x ++
                y --
            }
            // 越界情况
            if (x < row) {
                y ++
            } else {
                x--
                y += 2
            }
        }
    }
    return res
};
```



## 字符串简介

### [14. 最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix/)

难度简单

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 `""`。

 

**示例 1：**

```
输入：strs = ["flower","flow","flight"]
输出："fl"
```

**示例 2：**

```
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
```

 

**提示：**

- `0 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` 仅由小写英文字母组成

---

- 题解：
- 方法：
- 代码：

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  const strsCopy = strs.concat([])
  // 拿到最短的字符串
  const firstItem = strsCopy.sort((a, b) => a.length - b.length)[0]
  
  let result = ''
  for (let i=0; i<= firstItem.length; i++) {
    const str = firstItem.substring(0, i);
    const flag = strs.every(item => item.indexOf(str) === 0)
    if (flag) result = str
  }

  return result
  
};

```



### [5. 最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/)

难度中等

给你一个字符串 `s`，找到 `s` 中最长的回文子串。

 

**示例 1：**

```
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
```

**示例 2：**

```
输入：s = "cbbd"
输出："bb"
```

**示例 3：**

```
输入：s = "a"
输出："a"
```

**示例 4：**

```
输入：s = "ac"
输出："a"
```

 

**提示：**

- `1 <= s.length <= 1000`
- `s` 仅由数字和英文字母（大写和/或小写）组成

---

- 题解：
- 方法：
- 代码：

```js
/**
 * @param {string} s
 * @return {string}
 * 做题思想：使用对称性 的方法解题，主要考虑 2 种情况
 * 情况1："aba" 返回最大回文子串为 "aba"
 * 情况2："aa" 以 2 个 a 中间的位置为中心，两个 a 都是对称的
 */
var longestPalindrome = function(s) {

  if (s.length < 2) {
    return s
  }
  // 这里 maxLength 设置为 1 是因为 这种情况 [a, b] 输出的 最长子串 是 "a" 而不是 ""
  let start = 0, maxLength = 1;
  function expandCenterAround(left, right) {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
      // 为什么是 right - left + 1，因为 "aba" 的right为2，left为0，差值是2，实际长度应该为3
      if (right - left + 1 > maxLength) {
         maxLength = right - left + 1
         start = left
      }
      left --
      right ++
    }
  }

  for(let m=0; m<s.length; m++) {
    // 考虑情况1
    expandCenterAround(m -1, m + 1)
    // 考虑情况2
    expandCenterAround(m, m + 1)
  }

  return s.substring(start, start + maxLength)

};

```



### [剑指 Offer 58 - I. 翻转单词顺序](https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/)

难度简单

输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。

 

**示例 1：**

```
输入: "the sky is blue"
输出: "blue is sky the"
```

**示例 2：**

```
输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
```

**示例 3：**

```
输入: "a good   example"
输出: "example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
```

 

**说明：**

- 无空格字符构成一个单词。
- 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
- 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

**注意：**本题与主站 151 题相同：https://leetcode-cn.com/problems/reverse-words-in-a-string/

---

- 题解：
- 方法：
- 代码：

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let ss = s.trim()
    return ss.split(" ").filter(i => i !== "").reverse().join(" ")
};
```

### [28. 实现 strStr()](https://leetcode-cn.com/problems/implement-strstr/)

难度简单

实现 [strStr()](https://baike.baidu.com/item/strstr/811469) 函数。

给你两个字符串 `haystack` 和 `needle` ，请你在 `haystack` 字符串中找出 `needle` 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回 `-1` 。

 

**说明：**

当 `needle` 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 `needle` 是空字符串时我们应当返回 0 。这与 C 语言的 [strstr()](https://baike.baidu.com/item/strstr/811469) 以及 Java 的 [indexOf()](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String)) 定义相符。

 

**示例 1：**

```
输入：haystack = "hello", needle = "ll"
输出：2
```

**示例 2：**

```
输入：haystack = "aaaaa", needle = "bba"
输出：-1
```

**示例 3：**

```
输入：haystack = "", needle = ""
输出：0
```

 

**提示：**

- `0 <= haystack.length, needle.length <= 5 * 104`
- `haystack` 和 `needle` 仅由小写英文字符组成

---

- 题解：
- 方法：
- 代码：

```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 题解：https://leetcode-cn.com/problems/implement-strstr/solution/shua-chuan-lc-shuang-bai-po-su-jie-fa-km-tb86/
 */
var strStr = function(haystack, needle) {
    let hLen = haystack.length, nLen = needle.length
    for (let i=0; i<= hLen - nLen; i++) {
        // 每一次都从原串的发起点和匹配串的首位开始，尝试匹配
        let a = i, b=0;
        while (b < nLen && haystack[a] === needle[b]) {
            a ++
            b ++
        }
        // 若能完全匹配，返回原串的 起始点 下标
        if (b === nLen) return i
    }
    return -1
};
```



## 双指针法

### [344. 反转字符串](https://leetcode-cn.com/problems/reverse-string/)

难度简单

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 `char[]` 的形式给出。

不要给另外的数组分配额外的空间，你必须**[原地](https://baike.baidu.com/item/原地算法)修改输入数组**、使用 O(1) 的额外空间解决这一问题。

你可以假设数组中的所有字符都是 [ASCII](https://baike.baidu.com/item/ASCII) 码表中的可打印字符。

 

**示例 1：**

```
输入：["h","e","l","l","o"]
输出：["o","l","l","e","h"]
```

**示例 2：**

```
输入：["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]
```

---

- 题解：
- 方法：
- 代码：

```js
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const swap = (i,j, nums) => [nums[i], nums[j]] = [nums[j], nums[i]]
    let i = 0, j = s.length -1
    while (i < j) {
       swap(i, j, s)
       i ++
       j -- 
    }
    return s
};
```





### [561. 数组拆分 I](https://leetcode-cn.com/problems/array-partition-i/)

难度简单

给定长度为 `2n` 的整数数组 `nums` ，你的任务是将这些数分成 `n` 对, 例如 `(a1, b1), (a2, b2), ..., (an, bn)` ，使得从 `1` 到 `n` 的 `min(ai, bi)` 总和最大。

返回该 **最大总和** 。

 

**示例 1：**

```
输入：nums = [1,4,3,2]
输出：4
解释：所有可能的分法（忽略元素顺序）为：
1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
所以最大总和为 4
```

**示例 2：**

```
输入：nums = [6,2,6,5,1,2]
输出：9
解释：最优的分法为 (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9
```

 

**提示：**

- `1 <= n <= 104`
- `nums.length == 2 * n`
- `-104 <= nums[i] <= 104`

---

- 题解：
- 方法：
- 代码：

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    return nums.sort((a, b) => a - b).reduce((total, curr, index) => {
        return index % 2 === 0 ? total + curr : total
    }, 0)
};
```



### [167. 两数之和 II - 输入有序数组](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)

难度简单

给定一个已按照 **升序排列** 的整数数组 `numbers` ，请你从数组中找出两个数满足相加之和等于目标数 `target` 。

函数应该以长度为 `2` 的整数数组的形式返回这两个数的下标值*。*`numbers` 的下标 **从 1 开始计数** ，所以答案数组应当满足 `1 <= answer[0] < answer[1] <= numbers.length` 。

你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。

**示例 1：**

```
输入：numbers = [2,7,11,15], target = 9
输出：[1,2]
解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
```

**示例 2：**

```
输入：numbers = [2,3,4], target = 6
输出：[1,3]
```

**示例 3：**

```
输入：numbers = [-1,0], target = -1
输出：[1,2]
```

 

**提示：**

- `2 <= numbers.length <= 3 * 104`
- `-1000 <= numbers[i] <= 1000`
- `numbers` 按 **递增顺序** 排列
- `-1000 <= target <= 1000`
- 仅存在一个有效答案

---

- 题解：
- 方法：
- 代码：

```js
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0, r = numbers.length - 1
    while (l < r) {
        if (numbers[l] + numbers[r] < target) {
            l ++
        } else if (numbers[l] + numbers[r] > target) {
            r--
        } else {
            return [++l, ++r]
        }
        
    }
};
```





### [27. 移除元素](https://leetcode-cn.com/problems/remove-element/)

难度简单

给你一个数组 `nums` 和一个值 `val`，你需要 **[原地](https://baike.baidu.com/item/原地算法)** 移除所有数值等于 `val` 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 `O(1)` 额外空间并 **[原地 ](https://baike.baidu.com/item/原地算法)修改输入数组**。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

 

**说明:**

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以**「引用」**方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

```
// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

 

**示例 1：**

```
输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
```

**示例 2：**

```
输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
```

 

**提示：**

- `0 <= nums.length <= 100`
- `0 <= nums[i] <= 50`
- `0 <= val <= 100`

---

- 题解：
- 方法：
- 代码：

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    let j = 0;
    for (let i=0; i<nums.length; i++) {
        if (nums[i] !== val) {
            nums[j++] = nums[i]
        }
    }
    return j
};
```



### [485. 最大连续 1 的个数](https://leetcode-cn.com/problems/max-consecutive-ones/)

难度简单

给定一个二进制数组， 计算其中最大连续 1 的个数。

 

**示例：**

```
输入：[1,1,0,1,1,1]
输出：3
解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
```

 

**提示：**

- 输入的数组只包含 `0` 和 `1` 。
- 输入数组的长度是正整数，且不超过 10,000。

---

- 题解：
- 方法：
- 代码：

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let count = 0
  let result = 0
  for (let i = 0; i< nums.length; i++) {
    if (nums[i] === 1) {
      count ++
    } else {
      result = Math.max(result, count)
      count = 0
    }
  }
  return Math.max(result, count)
};
```



### [209. 长度最小的子数组](https://leetcode-cn.com/problems/minimum-size-subarray-sum/)

难度中等

给定一个含有 `n` 个正整数的数组和一个正整数 `target` **。**

找出该数组中满足其和 `≥ target` 的长度最小的 **连续子数组** `[numsl, numsl+1, ..., numsr-1, numsr]` ，并返回其长度**。**如果不存在符合条件的子数组，返回 `0` 。

 

**示例 1：**

```
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
```

**示例 2：**

```
输入：target = 4, nums = [1,4,4]
输出：1
```

**示例 3：**

```
输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
```

 

**提示：**

- `1 <= target <= 109`
- `1 <= nums.length <= 105`
- `1 <= nums[i] <= 105`

 

**进阶：**

- 如果你已经实现 `O(n)` 时间复杂度的解法, 请尝试设计一个 `O(n log(n))` 时间复杂度的解法。

---

- 题解：
- 方法：
- 代码：

```js
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    if (!nums.length) return 0
    let res = nums.length + 1
    let total = 0
    let i = j = 0;
    
    while(j < nums.length) {
        total += nums[j]
        j ++

        while(total >= target) {
            res = Math.min(res, j - i)
            total = total - nums[i]
            i ++
        }
    }
    if (res === nums.length + 1) return 0
    return res
};
```



## 小结

### [118. 杨辉三角](https://leetcode-cn.com/problems/pascals-triangle/)

难度简单

给定一个非负整数 *numRows，*生成杨辉三角的前 *numRows* 行。

![img](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

在杨辉三角中，每个数是它左上方和右上方的数的和。

**示例:**

```
输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```

---

- 题解：
- 方法：
- 代码：

```js
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const arr = []
    for (let i=0; i< numRows; i++) {
        const temp = []
        for (let j=0; j<=i; j++) {
            if (j === 0) {
                temp.push(1)
            } else {
                const upLeft = arr[i-1][j-1] || 0
                const upRight = arr[i-1][j] || 0
                temp.push(upLeft + upRight)
            }
        }
        arr.push(temp)
    }
    return arr
};
```



### [119. 杨辉三角 II](https://leetcode-cn.com/problems/pascals-triangle-ii/)

难度简单

给定一个非负索引 *k*，其中 *k* ≤ 33，返回杨辉三角的第 *k* 行。

![img](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

在杨辉三角中，每个数是它左上方和右上方的数的和。

**示例:**

```
输入: 3
输出: [1,3,3,1]
```

**进阶：**

你可以优化你的算法到 *O*(*k*) 空间复杂度吗？

---

- 题解：
- 方法：
- 代码：

```js
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const arr = []
    for (let i=0; i< rowIndex + 1; i++) {
        const temp = []
        for (let j=0; j<=i; j++) {
            if (j === 0) {
                temp.push(1)
            } else {
                const upLeft = arr[i-1][j-1] || 0
                const upRight = arr[i-1][j] || 0
                temp.push(upLeft + upRight)
            }
        }
        arr.push(temp)
    }
    return arr[rowIndex]
};
```



### [557. 反转字符串中的单词 III](https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/)

难度简单

给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

 

**示例：**

```
输入："Let's take LeetCode contest"
输出："s'teL ekat edoCteeL tsetnoc"
```

 

***\**\*\*\*提示：\*\*\*\*\****

- 在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

---

- 题解：
- 方法：
- 代码：

```js
/**
 * @param {string} s
 * @return {string}
 * 题解：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/solution/fan-zhuan-zi-fu-chuan-zhong-de-dan-ci-iii-by-lee-2/
 */
var reverseWords = function(s) {
        return s.split(" ").map(item => item.split("").reverse().join("")).join(" ")
};
```



### [153. 寻找旋转排序数组中的最小值](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/)

难度中等

已知一个长度为 `n` 的数组，预先按照升序排列，经由 `1` 到 `n` 次 **旋转** 后，得到输入数组。例如，原数组 `nums = [0,1,2,4,5,6,7]` 在变化后可能得到：

- 若旋转 `4` 次，则可以得到 `[4,5,6,7,0,1,2]`
- 若旋转 `7` 次，则可以得到 `[0,1,2,4,5,6,7]`

注意，数组 `[a[0], a[1], a[2], ..., a[n-1]]` **旋转一次** 的结果为数组 `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]` 。

给你一个元素值 **互不相同** 的数组 `nums` ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 **最小元素** 。

 

**示例 1：**

```
输入：nums = [3,4,5,1,2]
输出：1
解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。
```

**示例 2：**

```
输入：nums = [4,5,6,7,0,1,2]
输出：0
解释：原数组为 [0,1,2,4,5,6,7] ，旋转 4 次得到输入数组。
```

**示例 3：**

```
输入：nums = [11,13,15,17]
输出：11
解释：原数组为 [11,13,15,17] ，旋转 4 次得到输入数组。
```

 

**提示：**

- `n == nums.length`
- `1 <= n <= 5000`
- `-5000 <= nums[i] <= 5000`
- `nums` 中的所有整数 **互不相同**
- `nums` 原来是一个升序排序的数组，并进行了 `1` 至 `n` 次旋转

---

- 题解：
- 方法：
- 代码：

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let len = nums.length

    let left = 0, right = len - 1;

    while (left < right) {
        let mid = left + right + 1 >>1
        if (nums[mid] >= nums[0]) {
            left = mid
        }else {
            right = mid - 1
        }
    }
    return right + 1 < len ? nums[right + 1] : nums[0]
};
```



### [26. 删除有序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)

难度简单

给你一个有序数组 `nums` ，请你**[ 原地](http://baike.baidu.com/item/原地算法)** 删除重复出现的元素，使每个元素 **只出现一次** ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 **[原地 ](https://baike.baidu.com/item/原地算法)修改输入数组** 并在使用 O(1) 额外空间的条件下完成。

 

**说明:**

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以**「引用」**方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

```
// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

**示例 1：**

```
输入：nums = [1,1,2]
输出：2, nums = [1,2]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
```

**示例 2：**

```
输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
```

 

**提示：**

- `0 <= nums.length <= 3 * 104`
- `-104 <= nums[i] <= 104`
- `nums` 已按升序排列

---

- 题解：
- 方法：
- 代码：

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let n = nums.length;
    let j = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] != nums[j]) {
            nums[++j] = nums[i];
        }
    }
    return j + 1;
};
```



### [283. 移动零](https://leetcode-cn.com/problems/move-zeroes/)

难度简单

给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

**示例:**

```
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
```

**说明**:

1. 必须在原数组上操作，不能拷贝额外的数组。
2. 尽量减少操作次数。

---

- 题解：
- 方法：
- 代码：

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0

    for (let i=0; i< nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i]
            j ++
        }
    }
    while (j < nums.length) {
        nums[j] = 0
        j ++
    }
    return nums
};
```

