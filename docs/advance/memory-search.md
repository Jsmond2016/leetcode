# 记忆化搜索算法思想

就是递归的时候，用一个数组存取好每一个 递归项的值，这样求值的时候，O(1) 就查到了要的值。

例题推荐：

- 509 斐波那契数
- 322 零钱兑换

---

## 题型一

### [509. 斐波那契数](https://leetcode-cn.com/problems/fibonacci-number/)

难度简单

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

- 题解：https://leetcode-cn.com/problems/fibonacci-number/solution/4chong-jie-jue-fang-shi-du-ji-bai-liao-1-92ud/

- 递归法：

```js
public int fib(int n) {
    if (n < 2)
        return n;
    return fib(n - 1) + fib(n - 2);
}

作者：sdwwld
链接：https://leetcode-cn.com/problems/fibonacci-number/solution/4chong-jie-jue-fang-shi-du-ji-bai-liao-1-92ud/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

- 记忆化搜索



```js
var fib = function (n) {
    const map = new Map()
    return memorySearch(n, map)
}

function memorySearch(n, map) {
    if (n < 2) {
        return n == 1 ? 1 : 0
    }

    if (map.has(n)) return map.get(n)

    const first = memorySearch(n-1, map)
    const second = memorySearch(n -2, map)
    const res = first + second

    map.set(n, res)

    return res
}
```








### [322. 零钱兑换](https://leetcode-cn.com/problems/coin-change/)

难度中等

给定不同面额的硬币 `coins` 和一个总金额 `amount`。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 `-1`。

你可以认为每种硬币的数量是无限的。

 

**示例 1：**

```
输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
```

**示例 2：**

```
输入：coins = [2], amount = 3
输出：-1
```

**示例 3：**

```
输入：coins = [1], amount = 0
输出：0
```

**示例 4：**

```
输入：coins = [1], amount = 1
输出：1
```

**示例 5：**

```
输入：coins = [1], amount = 2
输出：2
```

 

**提示：**

- `1 <= coins.length <= 12`
- `1 <= coins[i] <= 231 - 1`
- `0 <= amount <= 104`





---

- 题解：https://leetcode-cn.com/problems/coin-change/solution/javadi-gui-ji-yi-hua-sou-suo-dong-tai-gui-hua-by-s/



- 记忆化搜索方法




```js
var coinChange = function(coins, amount) {
    let memo = []

    if (coins.length === 0) return -1

    memo = new Array(amount).fill(0)

    return findWay(coins, memo, amount)
}

// memo[n] 表示钱币n可以被换取的最少的硬币数，不能换取就为-1
// findWay 函数的目的是为了找到 amount 数量的零钱可以兑换的最少硬币数量，返回其值
function findWay(coins, memo, amount) {
    if (amount < 0) return -1

    if (amount == 0) return 0
	// 记忆化的处理，memo[n]用赋予了值，就不用继续下面的循环
    // 直接的返回memo[n] 的最优值
    if (memo[amount -1] !== 0) {
        return memo[amount -1]
    }

    let min = Infinity

    for (let i=0; i < coins.length; i++) {
        let res = findWay(coins, memo, amount - coins[i])

        if (res >= 0 && res < min) {
            min = res + 1  // 加1，是为了加上得到res结果的那个步骤中，兑换的一个硬币
        }
    }
    memo[amount -1] = min === Infinity ? -1 : min
    
    return memo[amount -1]
}

```


