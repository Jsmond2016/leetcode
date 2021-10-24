# 树

> 参考教程：[树专题](https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/thinkings/tree)

dfs 模板:

- 使用颜色标记节点的状态，新节点为白色，已访问的节点为灰色。
- 如果遇到的节点为白色，则将其标记为灰色，然后将其右子节点、自身、左子节点依次入栈。
- 如果遇到的节点为灰色，则将节点的值输出。

使用栈：

```python
class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        WHITE, GRAY = 0, 1
        res = []
        stack = [(WHITE, root)]
        while stack:
            color, node = stack.pop()
            if node is None: continue
            if color == WHITE:
                stack.append((WHITE, node.right))
                stack.append((GRAY, node))
                stack.append((WHITE, node.left))
            else:
                res.append(node.val)
        return res
```

使用递归：

```js
const visited = {}
function dfs(i) {
    if (满足特定条件）{
        // 返回结果 or 退出搜索空间
    }

    visited[i] = true // 将当前状态标为已搜索
    for (根据i能到达的下个状态j) {
        if (!visited[j]) { // 如果状态j没有被搜索过
            dfs(j)
        }
    }
}


// or

// 前序遍历
function dfs(root) {
    if (满足特定条件）{
        // 返回结果 or 退出搜索空间
    }
    // 主要逻辑
    dfs(root.left)
    dfs(root.right)
}



// 后续遍历
function dfs(root) {
    if (满足特定条件）{
        // 返回结果 or 退出搜索空间
    }
    dfs(root.left)
    dfs(root.right)
    // 主要逻辑
}

```

bfs 模板：

- 首先将根节点放入队列中。
- 从队列中取出第一个节点，并检验它是否为目标。如果找到目标，则结束搜索并回传结果。否则将它所有尚未检验过的直接子节点加入队列中。
- 若队列为空，表示整张图都检查过了——亦即图中没有欲搜索的目标。结束搜索并回传“找不到目标”。
- 重复步骤 2。

使用队列：

```javascript
const visited = {}
function bfs() {
    let q = new Queue()
    q.push(初始状态)
    while(q.length) {
        let i = q.pop()
        if (visited[i]) continue
        if (i 是我们要找的目标) return 结果
        for (i的可抵达状态j) {
            if (j 合法) {
                q.push(j)
            }
        }
    }
    return 没找到
}

```

详细版：

```python
class Solution:
    def bfs(k):
        # 使用双端队列，而不是数组。因为数组从头部删除元素的时间复杂度为 N，双端队列的底层实现其实是链表。
        queue = collections.deque([root])
        # 记录层数
        steps = 0
        # 需要返回的节点
        ans = []
        # 队列不空，生命不止！
        while queue:
            size = len(queue)
            # 遍历当前层的所有节点
            for _ in range(size):
                node = queue.popleft()
                if (step == k) ans.append(node)
                if node.right:
                    queue.append(node.right)
                if node.left:
                    queue.append(node.left)
            # 遍历完当前层所有的节点后 steps + 1
            steps += 1
        return ans
```


推荐大家先把本文提到的题目都做一遍，然后用本文学到的知识做一下下面十道练习题，检验一下自己的学习成果吧！

- 剑指 Offer 55 - I.
- 二叉树的深度
- 剑指 Offer 34. 二叉树中和为某一值的路径
- 101. 对称二叉树
- 226. 翻转二叉树
- 543. 二叉树的直径
- 662. 二叉树最大宽度
- 971. 翻转二叉树以匹配先序遍历
- 987. 二叉树的垂序遍历
- 863. 二叉树中所有距离为 K 的结点
- [面试题 04.06. 后继者](https://leetcode-cn.com/problems/successor-lcci/)