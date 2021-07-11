import{o as n,c as s,a}from"./app.5eff3ee2.js";const e='{"title":"双指针算法","description":"","frontmatter":{},"headers":[{"level":2,"title":"快慢指针","slug":"快慢指针"},{"level":3,"title":"141. 环形链表","slug":"_141-环形链表"},{"level":2,"title":"对撞指针","slug":"对撞指针"},{"level":3,"title":"881. 救生艇","slug":"_881-救生艇"}],"relativePath":"advance/dual-slidingpointer.md","lastUpdated":1625968497049}',p={},t=a('<h1 id="双指针算法"><a class="header-anchor" href="#双指针算法" aria-hidden="true">#</a> 双指针算法</h1><blockquote><p><a href="https://www.bilibili.com/video/BV1sy4y1q79M?p=46" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1sy4y1q79M?p=46</a></p></blockquote><p>常用策略：</p><ul><li>普通双指针：2个指针往同一个方向移动；</li><li>对撞指针：两个指针面对面移动 【<strong>有序</strong>数组题型】</li><li>快慢指针：快指针+慢指针【环形】</li></ul><p>练习题：</p><ul><li>141：快慢指针</li><li>881：将无序转换成有序，将有序换成对撞指针</li></ul><hr><h2 id="快慢指针"><a class="header-anchor" href="#快慢指针" aria-hidden="true">#</a> 快慢指针</h2><h3 id="_141-环形链表"><a class="header-anchor" href="#_141-环形链表" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/linked-list-cycle/" target="_blank" rel="noopener noreferrer">141. 环形链表</a></h3><p>难度简单</p><p>给定一个链表，判断链表中是否有环。</p><p>如果链表中有某个节点，可以通过连续跟踪 <code>next</code> 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 <code>pos</code> 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 <code>pos</code> 是 <code>-1</code>，则在该链表中没有环。<strong>注意：<code>pos</code> 不作为参数进行传递</strong>，仅仅是为了标识链表的实际情况。</p><p>如果链表中存在环，则返回 <code>true</code> 。 否则，返回 <code>false</code> 。</p><p><strong>进阶：</strong></p><p>你能用 <em>O(1)</em>（即，常量）内存解决此问题吗？</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png" alt="img"></p><div class="language-"><pre><code>输入：head = [3,2,0,-4], pos = 1\n输出：true\n解释：链表中有一个环，其尾部连接到第二个节点。\n</code></pre></div><p><strong>示例 2：</strong></p><p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png" alt="img"></p><div class="language-"><pre><code>输入：head = [1,2], pos = 0\n输出：true\n解释：链表中有一个环，其尾部连接到第一个节点。\n</code></pre></div><p><strong>示例 3：</strong></p><p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png" alt="img"></p><div class="language-"><pre><code>输入：head = [1], pos = -1\n输出：false\n解释：链表中没有环。\n</code></pre></div><p><strong>提示：</strong></p><ul><li>链表中节点的数目范围是 <code>[0, 104]</code></li><li><code>-105 &lt;= Node.val &lt;= 105</code></li><li><code>pos</code> 为 <code>-1</code> 或者链表中的一个 <strong>有效索引</strong> 。</li></ul><hr><ul><li>方法：快慢指针</li><li>题解：</li><li>答案</li></ul><div class="language-js"><pre><code><span class="token comment">/**\n * @param {ListNode} head\n * @return {boolean}\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">hasCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>\n    <span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">,</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>\n    <span class="token keyword">while</span><span class="token punctuation">(</span>fast <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next\n        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>slow <span class="token operator">===</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="对撞指针"><a class="header-anchor" href="#对撞指针" aria-hidden="true">#</a> 对撞指针</h2><h3 id="_881-救生艇"><a class="header-anchor" href="#_881-救生艇" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/boats-to-save-people/" target="_blank" rel="noopener noreferrer">881. 救生艇</a></h3><p>难度中等</p><p>第 <code>i</code> 个人的体重为 <code>people[i]</code>，每艘船可以承载的最大重量为 <code>limit</code>。</p><p>每艘船最多可同时载两人，但条件是这些人的重量之和最多为 <code>limit</code>。</p><p>返回载到每一个人所需的最小船数。(保证每个人都能被船载)。</p><p><strong>示例 1：</strong></p><div class="language-"><pre><code>输入：people = [1,2], limit = 3\n输出：1\n解释：1 艘船载 (1, 2)\n</code></pre></div><p><strong>示例 2：</strong></p><div class="language-"><pre><code>输入：people = [3,2,2,1], limit = 3\n输出：3\n解释：3 艘船分别载 (1, 2), (2) 和 (3)\n</code></pre></div><p><strong>示例 3：</strong></p><div class="language-"><pre><code>输入：people = [3,5,3,4], limit = 5\n输出：4\n解释：4 艘船分别载 (3), (3), (4), (5)\n</code></pre></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= people.length &lt;= 50000</code></li><li><code>1 &lt;= people[i] &lt;= limit &lt;= 30000</code></li></ul><hr><ul><li>方法：对撞指针</li><li>题解：</li><li>答案：</li></ul><p>解法： 将数组转换成有序，使用对对撞指针</p><div class="language-js"><pre><code><span class="token comment">/**\n * @param {number[]} people\n * @param {number} limit\n * @return {number}\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">numRescueBoats</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">people<span class="token punctuation">,</span> limit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>people <span class="token operator">||</span> <span class="token operator">!</span>people<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>\n    <span class="token keyword">const</span> arr <span class="token operator">=</span> people<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span>\n    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> people<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span>\n    <span class="token keyword">while</span><span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>people<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> people<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> limit<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            left <span class="token operator">++</span>\n        <span class="token punctuation">}</span>\n        right <span class="token operator">--</span>\n        res <span class="token operator">++</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> res\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div>',47);p.render=function(a,e,p,o,l,c){return n(),s("div",null,[t])};export default p;export{e as __pageData};
