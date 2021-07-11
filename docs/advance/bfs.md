# 广度优先遍历算法思想

对比：DFS VS. BFS

- DFS：侧重点，分支
- BFS：侧重点，层

如果遇到可以用 DFS 解决的题目，尝试也可以使用 BFS 解决

BFS 常用工具：

队列：先进先出

- queue.push() 入队
- queue.shift() 出队



推荐练习题：

- 102
- 104
- 200

---


## 题型一

### [102. 二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

难度中等

给你一个二叉树，请你返回其按 **层序遍历** 得到的节点值。 （即逐层地，从左到右访问所有节点）。

 

**示例：**
二叉树：`[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

返回其层序遍历结果：

```
[
  [3],
  [9,20],
  [15,7]
]
```

通过次数272,234

提交次数423,926

---

- 视频：https://www.bilibili.com/video/BV1sy4y1q79M?p=71&spm_id_from=pageDriver
- 题解：https://mp.weixin.qq.com/s/aYvJ3cBSBhtrcsiOsUjLyA
- 方法：
- 使用 BFS 


```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = []

    if (!root) return result

    const queue = []
    queue.push(root)
    // 开启一个新的层级
    while(queue.length) {
        let length = queue.length
        let list = []
        // 开启遍历当层元素的循环
        while(length) {
            let cur = queue.shift()
            if (cur.val !== null) list.push(cur.val)

            if (cur.left !== null) queue.push(cur.left)
            if (cur.right !== null) queue.push(cur.right)

            length -= 1
        }

        result.push(list.concat([]))
    }
    return result
};
```

- 使用 DFS

核心：利用 层级 进行处理，每一个层级就是一个子数组，往里面插入当层的元素

Code：


```js
 var levelOrder = function(root) {
     let result = []
     if (root === null) return result
    
     dfs(root, result, 0)
     return result
 }

 function dfs(node, result, level) {

     // 返回终止条件
     if (node === null) return
     // 若当前 level 是 1，那么对应层级是 1，result 应该有(length) 2 个子数组。若 小于，则说明需要加一个子数组
     if (level > result.length - 1) result.push([])

     result[level].push(node.val)


     if (node.left !== null) {
         dfs(node.left, result, level + 1)
     }

     if (node.right !== null) {
        dfs(node.right, result, level + 1)
     }
 }

```





### [107. 二叉树的层序遍历 II](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)

难度中等422

给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

返回其自底向上的层序遍历为：

```
[
  [15,7],
  [9,20],
  [3]
]
```

---

视频：https://www.bilibili.com/video/BV1sy4y1q79M?p=72

题解：https://mp.weixin.qq.com/s/NjQfu0asTnhtxs7R7HnYgA

说明：和 102 题类似，方法倒置即可



解法一：使用链表 + BFS 解

技巧：因为 链表可以快速 插入，时间复杂度 O(1)，如果使用 数组，则时间复杂度为 O(n)

Code：


```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// 以下部分为伪代码
var levelOrderBottom = function(root) {
    let result = []

    if (root === null) return result
	
    // 定义空链表
    let temp = new ListNode()
    
    let que = []
    que.push(root)

    while(que.length) {
        let len = que.length

        let list = []

        while(len > 0) {
            let cur  = que.shift()

            list.push(cur.val)

            if (cur.left !== null ) que.push(cur.left)

            if (cur.right !== null ) que.push(cur.right)

            len -= 1

        }
        // 头插法
        temp.addFirst(list.concat([]))
    }
	// 将 链表转换成线性表
    result = list(temp)
    return result
};
```


实际为：

Code：

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let result = []

    if (root === null) return result

    let que = []
    que.push(root)

    while(que.length) {
        let len = que.length

        let list = []

        while(len > 0) {
            let cur  = que.shift()

            list.push(cur.val)

            if (cur.left !== null ) que.push(cur.left)

            if (cur.right !== null ) que.push(cur.right)

            len -= 1

        }
        result.unshift(list.concat([]))
    }

    return result
};
```


- DFS + reverse

Code：

```js
var levelOrderBottom = function(root) {
    let result = []
    if (root === null) return result
    dfs(root, result, 0)
    return result.reverse()
}


function dfs(node, result, level) {
    if (node === null) return

    if (level > result.length -1) {
        result.push([])
    } 

    result[level].push(node.val)

    if (node.left !== null) {
        dfs(node.left, result, level +1)
    }

    if (node.right !== null) {
        dfs(node.right, result, level + 1)
    }
}
```


