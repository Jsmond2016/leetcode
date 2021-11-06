# 滑动窗口

- 算法思想：
- 常用策略/模板：


```js
let left = 0, right = 0;

while (right < s.size()) {
    // 增大窗口
    window.add(s[right]);
    right++;

    while (window needs shrink) {
        // 缩小窗口
        window.remove(s[left]);
        left++;
    }
}

//作者：gang-feng
//链接：https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/solution/song-gei-qian-duan-tong-xue-tong-su-yi-d-u7z9/
//来源：力扣（LeetCode）
//著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

- 适用题型：

  - 定长数组
  - 目的：减少 while 循环的次数

如图：如果 3 个为一组，第一组为 `[1,4,2]` ，第二组为 `[4.2.3]` 这里 `[4,2]` 重复计算了。使用滑动窗口就是为了避免这种重复计算。

![](./img/pic-002.png)



- 例题：

  - 209 长度最小的子数组
  - 1456 定长子串中元音的最大数目


---

- [剑指 Offer 57 - II. 和为s的连续正数序列](https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/)

输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

 

示例 1：

输入：target = 9
输出：[[2,3,4],[4,5]]
示例 2：

输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]

```js
/**
 * @param {number} target
 * @return {number[][]}
 */
// 没有参照物数组 但是可以根据下标
// 滑动窗口（双指针）
var findContinuousSequence = function(target) {
    let l=1
    let r=2
    let sum = 3
    let res=[]
    // 滑动窗口框架
    while(l<r){
        if(sum===target){
            let ans =[]
            for(let k=l;k<=r;k++){
                ans[k-l]=k
            }
            res.push(ans)
            // 等于的情况 我们可以继续窗口往右搜索 同时缩小左边的
             sum=sum-l
             l++
        } else if(sum>target){
            // 大于的条件 缩小窗口 sum已经加过了
            sum=sum-l
            l++
        } else {
            // 小于的情况 滑动窗口继续扩大
            r++
            sum=sum+r
        }
    }
    return res
};

```

参考题解：[](https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/solution/song-gei-qian-duan-tong-xue-tong-su-yi-d-u7z9/)

