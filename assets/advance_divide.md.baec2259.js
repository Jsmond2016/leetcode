import{o as n,c as s,a}from"./app.5eff3ee2.js";const t='{"title":"分治法","description":"","frontmatter":{},"headers":[{"level":2,"title":"题型一","slug":"题型一"},{"level":3,"title":"169. 多数元素","slug":"_169-多数元素"},{"level":3,"title":"53. 最大子序和","slug":"_53-最大子序和"}],"relativePath":"advance/divide.md","lastUpdated":1625968497049}',p={},o=a('<h1 id="分治法"><a class="header-anchor" href="#分治法" aria-hidden="true">#</a> 分治法</h1><p>分治法的本质：</p><ul><li>递归：利用递归思想</li><li>分解：大问题分解成小问题</li></ul><p>例题：</p><ul><li>169</li><li>53</li><li>215</li></ul><hr><h2 id="题型一"><a class="header-anchor" href="#题型一" aria-hidden="true">#</a> 题型一</h2><h3 id="_169-多数元素"><a class="header-anchor" href="#_169-多数元素" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/majority-element/" target="_blank" rel="noopener noreferrer">169. 多数元素</a></h3><p>难度简单</p><p>给定一个大小为 <em>n</em> 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 <strong>大于</strong> <code>⌊ n/2 ⌋</code> 的元素。</p><p>你可以假设数组是非空的，并且给定的数组总是存在多数元素。</p><p><strong>示例 1：</strong></p><div class="language-"><pre><code>输入：[3,2,3]\n输出：3\n</code></pre></div><p><strong>示例 2：</strong></p><div class="language-"><pre><code>输入：[2,2,1,1,1,2,2]\n输出：2\n</code></pre></div><p><strong>进阶：</strong></p><ul><li>尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。</li></ul><hr><ul><li>方法：</li><li>题解：</li><li>视频：<a href="https://www.bilibili.com/video/BV1sy4y1q79M?p=62" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1sy4y1q79M?p=62</a></li><li>说明： <ul><li>拆分条件：获取每个区域内的高频值</li><li>边界条件：下标相同，则到底了，改返回上一个栈结果了</li></ul></li><li>代码：</li></ul><div class="language-js"><pre><code><span class="token comment">/**\n * @param {number[]} nums\n * @return {number}\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">majorityElement</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">getMajority</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">getMajority</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 如果左边等于右边，说明到了最下面，即只有一个元素的时候，不可拆分了，则返回任意一个即可</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> right<span class="token punctuation">)</span> <span class="token keyword">return</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span>\n\n    <span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">const</span> leftMajority <span class="token operator">=</span> <span class="token function">getMajority</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> left<span class="token punctuation">,</span> mid<span class="token punctuation">)</span>\n    <span class="token keyword">const</span> rightMajority <span class="token operator">=</span> <span class="token function">getMajority</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span>\n\n    <span class="token comment">// 如果左右两边的高频值都相等，则返回任意一个高频值即可 </span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>leftMajority <span class="token operator">===</span> rightMajority<span class="token punctuation">)</span> <span class="token keyword">return</span> leftMajority\n\n    <span class="token keyword">let</span> leftCount <span class="token operator">=</span> <span class="token number">0</span>\n    <span class="token keyword">let</span> rightCount <span class="token operator">=</span> <span class="token number">0</span>\n\n    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> left<span class="token punctuation">;</span> i<span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> leftMajority<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            leftCount <span class="token operator">++</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> rightMajority<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            rightCount <span class="token operator">++</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftCount<span class="token punctuation">,</span> rightCount<span class="token punctuation">)</span> <span class="token operator">===</span> leftCount <span class="token operator">?</span> leftMajority <span class="token operator">:</span> rightMajority\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="_53-最大子序和"><a class="header-anchor" href="#_53-最大子序和" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/maximum-subarray/" target="_blank" rel="noopener noreferrer">53. 最大子序和</a></h3><p>难度简单</p><p>给定一个整数数组 <code>nums</code> ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。</p><p><strong>示例 1：</strong></p><div class="language-"><pre><code>输入：nums = [-2,1,-3,4,-1,2,1,-5,4]\n输出：6\n解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。\n</code></pre></div><p><strong>示例 2：</strong></p><div class="language-"><pre><code>输入：nums = [1]\n输出：1\n</code></pre></div><p><strong>示例 3：</strong></p><div class="language-"><pre><code>输入：nums = [0]\n输出：0\n</code></pre></div><p><strong>示例 4：</strong></p><div class="language-"><pre><code>输入：nums = [-1]\n输出：-1\n</code></pre></div><p><strong>示例 5：</strong></p><div class="language-"><pre><code>输入：nums = [-100000]\n输出：-100000\n</code></pre></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 3 * 104</code></li><li><code>-105 &lt;= nums[i] &lt;= 105</code></li></ul><p>**进阶：**如果你已经实现复杂度为 <code>O(n)</code> 的解法，尝试使用更为精妙的 <strong>分治法</strong> 求解。</p><hr><ul><li>方法：</li><li>题解：<a href="https://mp.weixin.qq.com/s/3GAD0a-aI_hQJo7IZMQTlQ" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/3GAD0a-aI_hQJo7IZMQTlQ</a></li><li>视频：<a href="https://www.bilibili.com/video/BV1sy4y1q79M?p=63" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1sy4y1q79M?p=63</a></li><li>代码：</li></ul><div class="language-js"><pre><code><span class="token comment">/**\n * // 暴力法，\n * // 动态规划法\n * // 双指针\n * 分治法（递归+拆解）\n * \n * @param {number[]} nums\n * @return {number}\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">maxSubArray</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span>\n   <span class="token keyword">return</span> <span class="token function">getMax</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">getMax</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">==</span> right<span class="token punctuation">)</span> <span class="token keyword">return</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span>\n\n    <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">let</span> leftMax <span class="token operator">=</span> <span class="token function">getMax</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> left<span class="token punctuation">,</span> mid<span class="token punctuation">)</span>\n    <span class="token keyword">let</span> rightMax <span class="token operator">=</span> <span class="token function">getMax</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span>\n    <span class="token keyword">let</span> crossMAx <span class="token operator">=</span> <span class="token function">getCrossMax</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">)</span>\n\n    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftMax<span class="token punctuation">,</span> rightMax<span class="token punctuation">,</span> crossMAx<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">getCrossMax</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>l <span class="token operator">+</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">let</span> leftSum <span class="token operator">=</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> leftMax <span class="token operator">=</span> leftSum<span class="token punctuation">;</span>\n\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> l<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        leftSum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        leftMax <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftMax<span class="token punctuation">,</span> leftSum<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// from mid+1 to rightmost</span>\n    <span class="token keyword">let</span> rightSum <span class="token operator">=</span> nums<span class="token punctuation">[</span>mid<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> rightMax <span class="token operator">=</span> rightSum<span class="token punctuation">;</span>\n    \n    <span class="token comment">// 这里是 mid + 2，是因为前面 let rightSum = nums[mid+1]; 已经加了一次</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> r<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        rightSum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        rightMax <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>rightMax<span class="token punctuation">,</span> rightSum<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> leftMax <span class="token operator">+</span> rightMax<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',39);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};
