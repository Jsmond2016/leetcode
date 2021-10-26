import{o as n,c as s,b as a,d as e}from"./app.a0fc6f0b.js";const t='{"title":"双指针算法","description":"","frontmatter":{},"headers":[{"level":2,"title":"双指针模板","slug":"双指针模板"},{"level":3,"title":"剑指 Offer 57 - II. 和为s的连续正数序列","slug":"剑指-offer-57-ii-和为s的连续正数序列"},{"level":2,"title":"普通双指针","slug":"普通双指针"},{"level":3,"title":"26. 删除有序数组中的重复项","slug":"_26-删除有序数组中的重复项"},{"level":2,"title":"快慢指针","slug":"快慢指针"},{"level":3,"title":"141. 环形链表","slug":"_141-环形链表"},{"level":2,"title":"对撞指针","slug":"对撞指针"},{"level":3,"title":"881. 救生艇","slug":"_881-救生艇"}],"relativePath":"advance/dual-slidingpointer.md","lastUpdated":1635257730415}',l={},o=a("h1",{id:"双指针算法"},[a("a",{class:"header-anchor",href:"#双指针算法","aria-hidden":"true"},"#"),e(" 双指针算法")],-1),p=a("p",null,[a("img",{src:"/leetcode/assets/2-pointers.8496d8f5.png",alt:""})],-1),c=a("blockquote",null,[a("p",null,[a("a",{href:"https://www.bilibili.com/video/BV1sy4y1q79M?p=46",target:"_blank",rel:"noopener noreferrer"},"https://www.bilibili.com/video/BV1sy4y1q79M?p=46")])],-1),u=a("p",null,"常用策略：",-1),r=a("ul",null,[a("li",null,"普通双指针：2个指针往同一个方向移动；"),a("li",null,[e("对撞指针：两个指针面对面移动 【"),a("strong",null,"有序"),e("数组题型】")]),a("li",null,"快慢指针：快指针+慢指针【环形】")],-1),k=a("p",null,"练习题：",-1),i=a("ul",null,[a("li",null,"26: 普通双指针"),a("li",null,"141：快慢指针"),a("li",null,"881：将无序转换成有序，将有序换成对撞指针"),a("li",null,"剑指 Offer 57 - II. 和为s的连续正数序列")],-1),d=a("hr",null,null,-1),m=a("h2",{id:"双指针模板"},[a("a",{class:"header-anchor",href:"#双指针模板","aria-hidden":"true"},"#"),e(" 双指针模板")],-1),h=a("h3",{id:"剑指-offer-57-ii-和为s的连续正数序列"},[a("a",{class:"header-anchor",href:"#剑指-offer-57-ii-和为s的连续正数序列","aria-hidden":"true"},"#"),e(),a("a",{href:"https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/",target:"_blank",rel:"noopener noreferrer"},"剑指 Offer 57 - II. 和为s的连续正数序列")],-1),f=a("p",null,"输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。",-1),g=a("p",null,"序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。",-1),w=a("p",null,"示例 1：",-1),b=a("p",null,"输入：target = 9 输出：[[2,3,4],[4,5]] 示例 2：",-1),y=a("p",null,"输入：target = 15 输出：[[1,2,3,4,5],[4,5,6],[7,8]]",-1),v=a("div",{class:"language-js"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"/**\n * @param {number} target\n * @return {number[][]}\n */"),e("\n"),a("span",{class:"token comment"},"// 没有参照物数组 但是可以根据下标"),e("\n"),a("span",{class:"token comment"},"// 滑动窗口（双指针）"),e("\n"),a("span",{class:"token keyword"},"var"),e(),a("span",{class:"token function-variable function"},"findContinuousSequence"),e(),a("span",{class:"token operator"},"="),e(),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"target"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n    "),a("span",{class:"token keyword"},"let"),e(" l"),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"1"),e("\n    "),a("span",{class:"token keyword"},"let"),e(" r"),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"2"),e("\n    "),a("span",{class:"token keyword"},"let"),e(" sum "),a("span",{class:"token operator"},"="),e(),a("span",{class:"token number"},"3"),e("\n    "),a("span",{class:"token keyword"},"let"),e(" res"),a("span",{class:"token operator"},"="),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"]"),e("\n    "),a("span",{class:"token comment"},"// 滑动窗口框架"),e("\n    "),a("span",{class:"token keyword"},"while"),a("span",{class:"token punctuation"},"("),e("l"),a("span",{class:"token operator"},"<"),e("r"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"{"),e("\n        "),a("span",{class:"token keyword"},"if"),a("span",{class:"token punctuation"},"("),e("sum"),a("span",{class:"token operator"},"==="),e("target"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"{"),e("\n            "),a("span",{class:"token keyword"},"let"),e(" ans "),a("span",{class:"token operator"},"="),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"]"),e("\n            "),a("span",{class:"token keyword"},"for"),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"let"),e(" k"),a("span",{class:"token operator"},"="),e("l"),a("span",{class:"token punctuation"},";"),e("k"),a("span",{class:"token operator"},"<="),e("r"),a("span",{class:"token punctuation"},";"),e("k"),a("span",{class:"token operator"},"++"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"{"),e("\n                ans"),a("span",{class:"token punctuation"},"["),e("k"),a("span",{class:"token operator"},"-"),e("l"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token operator"},"="),e("k\n            "),a("span",{class:"token punctuation"},"}"),e("\n            res"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"push"),a("span",{class:"token punctuation"},"("),e("ans"),a("span",{class:"token punctuation"},")"),e("\n            "),a("span",{class:"token comment"},"// 等于的情况 我们可以继续窗口往右搜索 同时缩小左边的"),e("\n             sum"),a("span",{class:"token operator"},"="),e("sum"),a("span",{class:"token operator"},"-"),e("l\n             l"),a("span",{class:"token operator"},"++"),e("\n        "),a("span",{class:"token punctuation"},"}"),e(),a("span",{class:"token keyword"},"else"),e(),a("span",{class:"token keyword"},"if"),a("span",{class:"token punctuation"},"("),e("sum"),a("span",{class:"token operator"},">"),e("target"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"{"),e("\n            "),a("span",{class:"token comment"},"// 大于的条件 缩小窗口 sum已经加过了"),e("\n            sum"),a("span",{class:"token operator"},"="),e("sum"),a("span",{class:"token operator"},"-"),e("l\n            l"),a("span",{class:"token operator"},"++"),e("\n        "),a("span",{class:"token punctuation"},"}"),e(),a("span",{class:"token keyword"},"else"),e(),a("span",{class:"token punctuation"},"{"),e("\n            "),a("span",{class:"token comment"},"// 小于的情况 滑动窗口继续扩大"),e("\n            r"),a("span",{class:"token operator"},"++"),e("\n            sum"),a("span",{class:"token operator"},"="),e("sum"),a("span",{class:"token operator"},"+"),e("r\n        "),a("span",{class:"token punctuation"},"}"),e("\n    "),a("span",{class:"token punctuation"},"}"),e("\n    "),a("span",{class:"token keyword"},"return"),e(" res\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),e("\n\n")])])],-1),_=a("p",null,[e("参考题解："),a("a",{href:"https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/solution/song-gei-qian-duan-tong-xue-tong-su-yi-d-u7z9/",target:"_blank",rel:"noopener noreferrer"})],-1),x=a("hr",null,null,-1),q=a("h2",{id:"普通双指针"},[a("a",{class:"header-anchor",href:"#普通双指针","aria-hidden":"true"},"#"),e(" 普通双指针")],-1),z=a("h3",{id:"_26-删除有序数组中的重复项"},[a("a",{class:"header-anchor",href:"#_26-删除有序数组中的重复项","aria-hidden":"true"},"#"),e(),a("a",{href:"https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/",target:"_blank",rel:"noopener noreferrer"},"26. 删除有序数组中的重复项")],-1),I=a("p",null,"给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。",-1),O=a("p",null,"不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。",-1),j=a("p",null,"说明:",-1),M=a("p",null,"为什么返回数值是整数，但输出的答案是数组呢?",-1),D=a("p",null,"请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。",-1),N=a("p",null,"你可以想象内部操作如下:",-1),B=a("p",null,"// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝 int len = removeDuplicates(nums);",-1),C=a("p",null,"// 在函数里修改输入数组对于调用者是可见的。 // 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。 for (int i = 0; i < len; i++) {     print(nums[i]); }   示例 1：",-1),U=a("p",null,"输入：nums = [1,1,2] 输出：2, nums = [1,2] 解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。 示例 2：",-1),V=a("p",null,"输入：nums = [0,0,1,1,1,2,2,3,3,4] 输出：5, nums = [0,1,2,3,4] 解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。",-1),L=a("p",null,"提示：",-1),P=a("p",null,"0 <= nums.length <= 3 * 104 -104 <= nums[i] <= 104 nums 已按升序排列",-1),R=a("hr",null,null,-1),S=a("ul",null,[a("li",null,"方法：普通双指针-同向，利用数组有序"),a("li",null,"题解：")],-1),A=a("div",{class:"language-js"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"/**\n * @param {number[]} nums\n * @return {number}\n */"),e("\n"),a("span",{class:"token keyword"},"var"),e(),a("span",{class:"token function-variable function"},"removeDuplicates"),e(),a("span",{class:"token operator"},"="),e(),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"nums"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n    "),a("span",{class:"token keyword"},"let"),e(" n "),a("span",{class:"token operator"},"="),e(" nums"),a("span",{class:"token punctuation"},"."),e("length\n    "),a("span",{class:"token keyword"},"let"),e(" l "),a("span",{class:"token operator"},"="),e(),a("span",{class:"token number"},"0"),e("\n    "),a("span",{class:"token keyword"},"for"),e(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"let"),e(" r "),a("span",{class:"token operator"},"="),e(),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},";"),e(" r "),a("span",{class:"token operator"},"<"),e(" n"),a("span",{class:"token punctuation"},";"),e(" r "),a("span",{class:"token operator"},"++"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n        "),a("span",{class:"token keyword"},"if"),e(),a("span",{class:"token punctuation"},"("),e("nums"),a("span",{class:"token punctuation"},"["),e("l"),a("span",{class:"token punctuation"},"]"),e(),a("span",{class:"token operator"},"!=="),e(" nums"),a("span",{class:"token punctuation"},"["),e("r"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n            nums"),a("span",{class:"token punctuation"},"["),a("span",{class:"token operator"},"++"),e("l"),a("span",{class:"token punctuation"},"]"),e(),a("span",{class:"token operator"},"="),e(" nums"),a("span",{class:"token punctuation"},"["),e("r"),a("span",{class:"token punctuation"},"]"),e("\n        "),a("span",{class:"token punctuation"},"}"),e("\n    "),a("span",{class:"token punctuation"},"}"),e("\n    "),a("span",{class:"token keyword"},"return"),e(" l "),a("span",{class:"token operator"},"+"),e(),a("span",{class:"token number"},"1"),e("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),e("\n\n")])])],-1),E=a("p",null,[e("参考资料："),a("a",{href:"https://mp.weixin.qq.com/s?__biz=MzU0ODMyNDk0Mw==&mid=2247490683&idx=1&sn=a9e7f705947bbad5a3fb98fdb664d828&chksm=fb418f5bcc36064d9d9535dc9b2176d66d8acf48ff8cd272c40e1e3ec68bf3d484fd235eaecd&token=1392348003&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"},"双指针解删除有序数组中的重复项")],-1),F=a("h2",{id:"快慢指针"},[a("a",{class:"header-anchor",href:"#快慢指针","aria-hidden":"true"},"#"),e(" 快慢指针")],-1),G=a("h3",{id:"_141-环形链表"},[a("a",{class:"header-anchor",href:"#_141-环形链表","aria-hidden":"true"},"#"),e(),a("a",{href:"https://leetcode-cn.com/problems/linked-list-cycle/",target:"_blank",rel:"noopener noreferrer"},"141. 环形链表")],-1),H=a("p",null,"难度简单",-1),J=a("p",null,"给定一个链表，判断链表中是否有环。",-1),K=a("p",null,[e("如果链表中有某个节点，可以通过连续跟踪 "),a("code",null,"next"),e(" 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 "),a("code",null,"pos"),e(" 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 "),a("code",null,"pos"),e(" 是 "),a("code",null,"-1"),e("，则在该链表中没有环。"),a("strong",null,[e("注意："),a("code",null,"pos"),e(" 不作为参数进行传递")]),e("，仅仅是为了标识链表的实际情况。")],-1),Q=a("p",null,[e("如果链表中存在环，则返回 "),a("code",null,"true"),e(" 。 否则，返回 "),a("code",null,"false"),e(" 。")],-1),T=a("p",null,[a("strong",null,"进阶：")],-1),W=a("p",null,[e("你能用 "),a("em",null,"O(1)"),e("（即，常量）内存解决此问题吗？")],-1),X=a("p",null,[a("strong",null,"示例 1：")],-1),Y=a("p",null,[a("img",{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png",alt:"img"})],-1),Z=a("div",{class:"language-"},[a("pre",null,[a("code",null,"输入：head = [3,2,0,-4], pos = 1\n输出：true\n解释：链表中有一个环，其尾部连接到第二个节点。\n")])],-1),$=a("p",null,[a("strong",null,"示例 2：")],-1),nn=a("p",null,[a("img",{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png",alt:"img"})],-1),sn=a("div",{class:"language-"},[a("pre",null,[a("code",null,"输入：head = [1,2], pos = 0\n输出：true\n解释：链表中有一个环，其尾部连接到第一个节点。\n")])],-1),an=a("p",null,[a("strong",null,"示例 3：")],-1),en=a("p",null,[a("img",{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png",alt:"img"})],-1),tn=a("div",{class:"language-"},[a("pre",null,[a("code",null,"输入：head = [1], pos = -1\n输出：false\n解释：链表中没有环。\n")])],-1),ln=a("p",null,[a("strong",null,"提示：")],-1),on=a("ul",null,[a("li",null,[e("链表中节点的数目范围是 "),a("code",null,"[0, 104]")]),a("li",null,[a("code",null,"-105 <= Node.val <= 105")]),a("li",null,[a("code",null,"pos"),e(" 为 "),a("code",null,"-1"),e(" 或者链表中的一个 "),a("strong",null,"有效索引"),e(" 。")])],-1),pn=a("hr",null,null,-1),cn=a("ul",null,[a("li",null,"方法：快慢指针"),a("li",null,"题解："),a("li",null,"答案")],-1),un=a("div",{class:"language-js"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"/**\n * @param {ListNode} head\n * @return {boolean}\n */"),e("\n"),a("span",{class:"token keyword"},"var"),e(),a("span",{class:"token function-variable function"},"hasCycle"),e(),a("span",{class:"token operator"},"="),e(),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"head"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n    "),a("span",{class:"token keyword"},"if"),e(),a("span",{class:"token punctuation"},"("),a("span",{class:"token operator"},"!"),e("head"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token keyword"},"return"),e(),a("span",{class:"token boolean"},"false"),e("\n    "),a("span",{class:"token keyword"},"let"),e(" slow "),a("span",{class:"token operator"},"="),e(" head"),a("span",{class:"token punctuation"},","),e(" fast "),a("span",{class:"token operator"},"="),e(" head"),a("span",{class:"token punctuation"},";"),e("\n    "),a("span",{class:"token keyword"},"while"),a("span",{class:"token punctuation"},"("),e("fast "),a("span",{class:"token operator"},"&&"),e(" fast"),a("span",{class:"token punctuation"},"."),e("next"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n        slow "),a("span",{class:"token operator"},"="),e(" slow"),a("span",{class:"token punctuation"},"."),e("next\n        fast "),a("span",{class:"token operator"},"="),e(" fast"),a("span",{class:"token punctuation"},"."),e("next"),a("span",{class:"token punctuation"},"."),e("next\n        "),a("span",{class:"token keyword"},"if"),e(),a("span",{class:"token punctuation"},"("),e("slow "),a("span",{class:"token operator"},"==="),e(" fast"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n            "),a("span",{class:"token keyword"},"return"),e(),a("span",{class:"token boolean"},"true"),e("\n        "),a("span",{class:"token punctuation"},"}"),e("\n    "),a("span",{class:"token punctuation"},"}"),e("\n    "),a("span",{class:"token keyword"},"return"),e(),a("span",{class:"token boolean"},"false"),e("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),e("\n")])])],-1),rn=a("h2",{id:"对撞指针"},[a("a",{class:"header-anchor",href:"#对撞指针","aria-hidden":"true"},"#"),e(" 对撞指针")],-1),kn=a("h3",{id:"_881-救生艇"},[a("a",{class:"header-anchor",href:"#_881-救生艇","aria-hidden":"true"},"#"),e(),a("a",{href:"https://leetcode-cn.com/problems/boats-to-save-people/",target:"_blank",rel:"noopener noreferrer"},"881. 救生艇")],-1),dn=a("p",null,"难度中等",-1),mn=a("p",null,[e("第 "),a("code",null,"i"),e(" 个人的体重为 "),a("code",null,"people[i]"),e("，每艘船可以承载的最大重量为 "),a("code",null,"limit"),e("。")],-1),hn=a("p",null,[e("每艘船最多可同时载两人，但条件是这些人的重量之和最多为 "),a("code",null,"limit"),e("。")],-1),fn=a("p",null,"返回载到每一个人所需的最小船数。(保证每个人都能被船载)。",-1),gn=a("p",null,[a("strong",null,"示例 1：")],-1),wn=a("div",{class:"language-"},[a("pre",null,[a("code",null,"输入：people = [1,2], limit = 3\n输出：1\n解释：1 艘船载 (1, 2)\n")])],-1),bn=a("p",null,[a("strong",null,"示例 2：")],-1),yn=a("div",{class:"language-"},[a("pre",null,[a("code",null,"输入：people = [3,2,2,1], limit = 3\n输出：3\n解释：3 艘船分别载 (1, 2), (2) 和 (3)\n")])],-1),vn=a("p",null,[a("strong",null,"示例 3：")],-1),_n=a("div",{class:"language-"},[a("pre",null,[a("code",null,"输入：people = [3,5,3,4], limit = 5\n输出：4\n解释：4 艘船分别载 (3), (3), (4), (5)\n")])],-1),xn=a("p",null,[a("strong",null,"提示：")],-1),qn=a("ul",null,[a("li",null,[a("code",null,"1 <= people.length <= 50000")]),a("li",null,[a("code",null,"1 <= people[i] <= limit <= 30000")])],-1),zn=a("hr",null,null,-1),In=a("ul",null,[a("li",null,"方法：对撞指针"),a("li",null,"题解："),a("li",null,"答案：")],-1),On=a("p",null,"解法： 将数组转换成有序，使用对对撞指针",-1),jn=a("div",{class:"language-js"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"/**\n * @param {number[]} people\n * @param {number} limit\n * @return {number}\n */"),e("\n"),a("span",{class:"token keyword"},"var"),e(),a("span",{class:"token function-variable function"},"numRescueBoats"),e(),a("span",{class:"token operator"},"="),e(),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},[e("people"),a("span",{class:"token punctuation"},","),e(" limit")]),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n   "),a("span",{class:"token keyword"},"if"),e(),a("span",{class:"token punctuation"},"("),a("span",{class:"token operator"},"!"),e("people "),a("span",{class:"token operator"},"||"),e(),a("span",{class:"token operator"},"!"),e("people"),a("span",{class:"token punctuation"},"."),e("length"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token keyword"},"return"),e(),a("span",{class:"token number"},"0"),e("\n    "),a("span",{class:"token keyword"},"const"),e(" arr "),a("span",{class:"token operator"},"="),e(" people"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"sort"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},[e("a"),a("span",{class:"token punctuation"},","),e(" b")]),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token operator"},"=>"),e(" a "),a("span",{class:"token operator"},"-"),e(" b"),a("span",{class:"token punctuation"},")"),e("\n    "),a("span",{class:"token keyword"},"let"),e(" left "),a("span",{class:"token operator"},"="),e(),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},","),e(" right "),a("span",{class:"token operator"},"="),e(" people"),a("span",{class:"token punctuation"},"."),e("length "),a("span",{class:"token operator"},"-"),e(),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},";"),e("\n    "),a("span",{class:"token keyword"},"let"),e(" res "),a("span",{class:"token operator"},"="),e(),a("span",{class:"token number"},"0"),e("\n    "),a("span",{class:"token keyword"},"while"),a("span",{class:"token punctuation"},"("),e("left "),a("span",{class:"token operator"},"<="),e(" right"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n        "),a("span",{class:"token keyword"},"if"),e(),a("span",{class:"token punctuation"},"("),e("people"),a("span",{class:"token punctuation"},"["),e("left"),a("span",{class:"token punctuation"},"]"),e(),a("span",{class:"token operator"},"+"),e(" people"),a("span",{class:"token punctuation"},"["),e("right"),a("span",{class:"token punctuation"},"]"),e(),a("span",{class:"token operator"},"<="),e(" limit"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n            left "),a("span",{class:"token operator"},"++"),e("\n        "),a("span",{class:"token punctuation"},"}"),e("\n        right "),a("span",{class:"token operator"},"--"),e("\n        res "),a("span",{class:"token operator"},"++"),e("\n    "),a("span",{class:"token punctuation"},"}"),e("\n    "),a("span",{class:"token keyword"},"return"),e(" res\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),e("\n")])])],-1);l.render=function(a,e,t,l,Mn,Dn){return n(),s("div",null,[o,p,c,u,r,k,i,d,m,h,f,g,w,b,y,v,_,x,q,z,I,O,j,M,D,N,B,C,U,V,L,P,R,S,A,E,F,G,H,J,K,Q,T,W,X,Y,Z,$,nn,sn,an,en,tn,ln,on,pn,cn,un,rn,kn,dn,mn,hn,fn,gn,wn,bn,yn,vn,_n,xn,qn,zn,In,On,jn])};export default l;export{t as __pageData};