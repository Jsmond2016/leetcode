# 动态规划算法思想

核心流程：

- 初始态
- 方程式/状态转移方程式
- 终止态

**核心：** 找到状态转移方程式

以 斐波那契数列算法为例：

- 初始态：F(0) = 0; F(1) = 1
- 方程式：F(n) = F(n-1) + F(n-2)
- 终止态：F(5) ?

适用题型：

- 计数：有多少种方式/ 方法；例如：机器人从左上角到右下角有多少个路径
- 求最值：极大值/ 极小值：例如：机器人从左到右路径的最大数字和
- 求存在性：是否存在某个可能；例如：是否存在一条路径使得机器人...

推荐例题：

- 509 斐波那契数
- 62 不同路径
- 121 买卖股票的最佳时机
- 70 爬楼梯
- 279 完全平方数

---

##  题型一：

### [509. 斐波那契数](https://leetcode-cn.com/problems/fibonacci-number/)

难度简单260收藏分享切换为英文接收动态反馈

**斐波那契数**，通常用 `F(n)` 表示，形成的序列称为 **斐波那契数列** 。该数列由 `0` 和 `1` 开始，后面的每一项数字都是前面两项数字的和。也就是：

```
F(0) = 0，F(1) = 1
F(n) = F(n - 1) + F(n - 2)，其中 n > 1
```

给你 `n` ，请计算 `F(n)` 。

 

**示例 1：**

```
输入：2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1
```

**示例 2：**

```
输入：3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2
```

**示例 3：**

```
输入：4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3
```

 

**提示：**

- `0 <= n <= 30`

---

- 视频：
- 题解：
- 方法：动态规划

Code：


```js
var fib = function(n) {

    if (n <2) {
        return n === 1 ? 1 : 0
    }

    const sum = fib(n-1) + fib(n-2)

  return sum
};
```








### [62. 不同路径](https://leetcode-cn.com/problems/unique-paths/)

难度中等936收藏分享切换为英文接收动态反馈

一个机器人位于一个 `m x n` 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)

```
输入：m = 3, n = 7
输出：28
```

**示例 2：**

```
输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下
```

**示例 3：**

```
输入：m = 7, n = 3
输出：28
```

**示例 4：**

```
输入：m = 3, n = 3
输出：6
```

 

**提示：**

- `1 <= m, n <= 100`
- 题目数据保证答案小于等于 `2 * 109`

---

- 视频：
- 题解：https://leetcode-cn.com/problems/unique-paths/solution/bu-tong-lu-jing-by-leetcode-solution-hzjf/
- 方法：动态规划
- 思路：

> 我们用 f(i, j)f(i,j) 表示从左上角走到 (i, j)(i,j) 的路径数量，其中 ii 和 jj 的范围分别是 [0, m)[0,m) 和 [0, n)[0,n)。
>
> 由于我们每一步只能从向下或者向右移动一步，因此要想走到 (i, j)(i,j)，如果向下走一步，那么会从 (i-1, j)(i−1,j) 走过来；如果向右走一步，那么会从 (i, j-1)(i,j−1) 走过来。因此我们可以写出动态规划转移方程：
>
> f(i, j) = f(i-1, j) + f(i, j-1)
> f(i,j)=f(i−1,j)+f(i,j−1)
>
> 需要注意的是，如果 i=0i=0，那么 f(i-1,j)f(i−1,j) 并不是一个满足要求的状态，我们需要忽略这一项；同理，如果 j=0j=0，那么 f(i,j-1)f(i,j−1) 并不是一个满足要求的状态，我们需要忽略这一项。
>
> 初始条件为 f(0,0)=1f(0,0)=1，即从左上角走到左上角有一种方法。
>
> 最终的答案即为 f(m-1,n-1)f(m−1,n−1)。
>
> 细节
>
> 为了方便代码编写，我们可以将所有的 f(0, j)f(0,j) 以及 f(i, 0)f(i,0) 都设置为边界条件，它们的值均为 11。



Code：


```js
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // 初始化一个二维数组
    const f = [...new Array(m)].map(i => [])
    for (let i=0; i<m; i++) {
        f[i][0] = 1
    }
    for (let j = 0; j < n; j++) {
        f[0][j] = 1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j<n; j++) {
            f[i][j] = f[i-1][j] + f[i][j - 1]
        }
    }
    return f[m-1][n-1]
};
```







### [121. 买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)

难度简单1539收藏分享切换为英文接收动态反馈

给定一个数组 `prices` ，它的第 `i` 个元素 `prices[i]` 表示一支给定股票第 `i` 天的价格。

你只能选择 **某一天** 买入这只股票，并选择在 **未来的某一个不同的日子** 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 `0` 。

 

**示例 1：**

```
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
```

**示例 2：**

```
输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
```

 

**提示：**

- `1 <= prices.length <= 105`
- `0 <= prices[i] <= 104`



---

- 视频：
- 题解：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/121-mai-mai-gu-piao-de-zui-jia-shi-ji-by-leetcode-/
- 方法：一次遍历

Code：


```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices.length) return 0
  // 定义最小价格
  let minPrice = prices[0]
  // 定义最大利润
  let maxProfit = 0
  for (let i=0; i<prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice
    }
  }
  return maxProfit
};
```







### [70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)

难度简单1571收藏分享切换为英文接收动态反馈

假设你正在爬楼梯。需要 *n* 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**注意：**给定 *n* 是一个正整数。

**示例 1：**

```
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
```

**示例 2：**

```
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```

---

- 视频：
- 题解：https://leetcode-cn.com/problems/climbing-stairs/solution/pa-lou-ti-by-leetcode-solution/
- 方法：动态规划

Code：

- 方法1：



```js
var climbStairs = function(n) {
    let p = 0, q = 0, r = 1;
    for (let i = 1; i <= n; ++i) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
};

```




- 方法2：https://leetcode-cn.com/problems/climbing-stairs/solution/hua-jie-suan-fa-70-pa-lou-ti-by-guanpengchn/


```js
// 方法2
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
```








### [279. 完全平方数](https://leetcode-cn.com/problems/perfect-squares/)

难度中等816收藏分享切换为英文接收动态反馈

给定正整数 *n*，找到若干个完全平方数（比如 `1, 4, 9, 16, ...`）使得它们的和等于 *n*。你需要让组成和的完全平方数的个数最少。

给你一个整数 `n` ，返回和为 `n` 的完全平方数的 **最少数量** 。

**完全平方数** 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，`1`、`4`、`9` 和 `16` 都是完全平方数，而 `3` 和 `11` 不是。

 

**示例 1：**

```
输入：n = 12
输出：3 
解释：12 = 4 + 4 + 4
```

**示例 2：**

```
输入：n = 13
输出：2
解释：13 = 4 + 9
```

**提示：**

- `1 <= n <= 104`



---

- 视频：
- 思路：https://leetcode-cn.com/problems/perfect-squares/solution/hua-jie-suan-fa-279-wan-quan-ping-fang-shu-by-guan/
- 解法：

Code：



```js
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = [...Array(n+1)].map(_=>0); // 数组长度为n+1，值均为0
    for (let i = 1; i <= n; i++) {
        dp[i] = i; // 最坏的情况就是每次+1
        for (let j = 1; i - j * j >= 0; j++) { 
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1); // 动态转移方程
        }
    }
    return dp[n];
};

```

