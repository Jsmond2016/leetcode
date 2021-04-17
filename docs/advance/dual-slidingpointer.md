# 双指针算法

> https://www.bilibili.com/video/BV1sy4y1q79M?p=46

常用策略：

- 普通双指针：2个指针往同一个方向移动；
- 对撞指针：两个指针面对面移动 【**有序**数组题型】
- 快慢指针：快指针+慢指针【环形】

练习题：

- 141：快慢指针
- 881：将无序转换成有序，将有序换成对撞指针

----

## 快慢指针

### [141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)

难度简单

给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 `pos` 是 `-1`，则在该链表中没有环。**注意：`pos` 不作为参数进行传递**，仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 `true` 。 否则，返回 `false` 。

 

**进阶：**

你能用 *O(1)*（即，常量）内存解决此问题吗？

 

**示例 1：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png)

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

**示例 2：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)

```
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

**示例 3：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)

```
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

 

**提示：**

- 链表中节点的数目范围是 `[0, 104]`
- `-105 <= Node.val <= 105`
- `pos` 为 `-1` 或者链表中的一个 **有效索引** 。

---

- 方法：快慢指针
- 题解：
- 答案

<details>
  <summary>
      <mark><font>点击查看详细内容</font></mark></summary>

```js
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    var hasCycle = function(head) {
        if (!head) return false
        let slow = head, fast = head;
        while(fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
            if (slow === fast) {
                return true
            }
        }
      return false
    };
```
</details>







## 对撞指针

### [881. 救生艇](https://leetcode-cn.com/problems/boats-to-save-people/)

难度中等

第 `i` 个人的体重为 `people[i]`，每艘船可以承载的最大重量为 `limit`。

每艘船最多可同时载两人，但条件是这些人的重量之和最多为 `limit`。

返回载到每一个人所需的最小船数。(保证每个人都能被船载)。

 

**示例 1：**

```
输入：people = [1,2], limit = 3
输出：1
解释：1 艘船载 (1, 2)
```

**示例 2：**

```
输入：people = [3,2,2,1], limit = 3
输出：3
解释：3 艘船分别载 (1, 2), (2) 和 (3)
```

**示例 3：**

```
输入：people = [3,5,3,4], limit = 5
输出：4
解释：4 艘船分别载 (3), (3), (4), (5)
```

**提示：**

- `1 <= people.length <= 50000`
- `1 <= people[i] <= limit <= 30000`

---

- 方法：对撞指针
- 题解：
- 答案：

解法： 将数组转换成有序，使用对对撞指针


<details>
  <summary>
      <mark><font>点击查看详细内容</font></mark></summary>

```js
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
   if (!people || !people.length) return 0
    const arr = people.sort((a, b) => a - b)
    let left = 0, right = people.length - 1;
    let res = 0
    while(left <= right) {
        if (people[left] + people[right] <= limit) {
            left ++
        }
        right --
        res ++
    }
    return res
};
```
</details>