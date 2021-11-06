import{o as n,c as s,a}from"./app.35dd8900.js";const p='{"title":"广度优先遍历算法思想","description":"","frontmatter":{},"headers":[{"level":2,"title":"题型一","slug":"题型一"}],"relativePath":"advance/bfs.md","lastUpdated":1636186098265}',t={},o=a('<h1 id="广度优先遍历算法思想"><a class="header-anchor" href="#广度优先遍历算法思想" aria-hidden="true">#</a> 广度优先遍历算法思想</h1><p>对比：DFS VS. BFS</p><ul><li>DFS：侧重点，分支</li><li>BFS：侧重点，层</li></ul><p>如果遇到可以用 DFS 解决的题目，尝试也可以使用 BFS 解决</p><p>BFS 常用工具：</p><p>队列：先进先出</p><ul><li>queue.push() 入队</li><li>queue.shift() 出队</li></ul><p>推荐练习题：</p><ul><li>102 二叉树的层序遍历</li><li>104 二叉树的最大深度</li><li>200 岛屿数量</li></ul><hr><h2 id="题型一"><a class="header-anchor" href="#题型一" aria-hidden="true">#</a> 题型一</h2><ul><li><a href="https://leetcode-cn.com/problems/binary-tree-level-order-traversal/" target="_blank" rel="noopener noreferrer">102. 二叉树的层序遍历</a></li></ul><p>难度中等</p><p>给你一个二叉树，请你返回其按 <strong>层序遍历</strong> 得到的节点值。 （即逐层地，从左到右访问所有节点）。</p><p><strong>示例：</strong> 二叉树：<code>[3,9,20,null,null,15,7]</code>,</p><div class="language-"><pre><code>    3\n   / \\\n  9  20\n    /  \\\n   15   7\n</code></pre></div><p>返回其层序遍历结果：</p><div class="language-"><pre><code>[\n  [3],\n  [9,20],\n  [15,7]\n]\n</code></pre></div><p>通过次数272,234</p><p>提交次数423,926</p><hr><ul><li>视频：<a href="https://www.bilibili.com/video/BV1sy4y1q79M?p=71&amp;spm_id_from=pageDriver" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1sy4y1q79M?p=71&amp;spm_id_from=pageDriver</a></li><li>题解：<a href="https://mp.weixin.qq.com/s/aYvJ3cBSBhtrcsiOsUjLyA" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/aYvJ3cBSBhtrcsiOsUjLyA</a></li><li>方法：</li><li>使用 BFS</li></ul><div class="language-js"><pre><code><span class="token comment">/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */</span>\n<span class="token comment">/**\n * @param {TreeNode} root\n * @return {number[][]}\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">levelOrder</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> result\n\n    <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>\n    <span class="token comment">// 开启一个新的层级</span>\n    <span class="token keyword">while</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> length <span class="token operator">=</span> queue<span class="token punctuation">.</span>length\n        <span class="token keyword">let</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n        <span class="token comment">// 开启遍历当层元素的循环</span>\n        <span class="token keyword">while</span><span class="token punctuation">(</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> cur <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span>\n\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">)</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">)</span>\n\n            length <span class="token operator">-=</span> <span class="token number">1</span>\n        <span class="token punctuation">}</span>\n\n        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> result\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><ul><li>使用 DFS</li></ul><p>核心：利用 层级 进行处理，每一个层级就是一个子数组，往里面插入当层的元素</p><p>Code：</p><div class="language-js"><pre><code> <span class="token keyword">var</span> <span class="token function-variable function">levelOrder</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n     <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n     <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> result\n    \n     <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> result<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n     <span class="token keyword">return</span> result\n <span class="token punctuation">}</span>\n\n <span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> result<span class="token punctuation">,</span> level</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n     <span class="token comment">// 返回终止条件</span>\n     <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>\n     <span class="token comment">// 若当前 level 是 1，那么对应层级是 1，result 应该有(length) 2 个子数组。若 小于，则说明需要加一个子数组</span>\n     <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">&gt;</span> result<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n     result<span class="token punctuation">[</span>level<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>\n\n\n     <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n         <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> result<span class="token punctuation">,</span> level <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>\n     <span class="token punctuation">}</span>\n\n     <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> result<span class="token punctuation">,</span> level <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>\n     <span class="token punctuation">}</span>\n <span class="token punctuation">}</span>\n\n</code></pre></div><ul><li><a href="https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/" target="_blank" rel="noopener noreferrer">107. 二叉树的层序遍历 II</a></li></ul><p>难度中等422</p><p>给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）</p><p>例如： 给定二叉树 <code>[3,9,20,null,null,15,7]</code>,</p><div class="language-"><pre><code>    3\n   / \\\n  9  20\n    /  \\\n   15   7\n</code></pre></div><p>返回其自底向上的层序遍历为：</p><div class="language-"><pre><code>[\n  [15,7],\n  [9,20],\n  [3]\n]\n</code></pre></div><hr><p>视频：<a href="https://www.bilibili.com/video/BV1sy4y1q79M?p=72" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1sy4y1q79M?p=72</a></p><p>题解：<a href="https://mp.weixin.qq.com/s/NjQfu0asTnhtxs7R7HnYgA" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/NjQfu0asTnhtxs7R7HnYgA</a></p><p>说明：和 102 题类似，方法倒置即可</p><p>解法一：使用链表 + BFS 解</p><p>技巧：因为 链表可以快速 插入，时间复杂度 O(1)，如果使用 数组，则时间复杂度为 O(n)</p><p>Code：</p><div class="language-js"><pre><code><span class="token comment">/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */</span>\n<span class="token comment">/**\n * @param {TreeNode} root\n * @return {number[][]}\n */</span>\n\n<span class="token comment">// 以下部分为伪代码</span>\n<span class="token keyword">var</span> <span class="token function-variable function">levelOrderBottom</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> result\n\t\n    <span class="token comment">// 定义空链表</span>\n    <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    \n    <span class="token keyword">let</span> que <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    que<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>\n\n    <span class="token keyword">while</span><span class="token punctuation">(</span>que<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> len <span class="token operator">=</span> que<span class="token punctuation">.</span>length\n\n        <span class="token keyword">let</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n        <span class="token keyword">while</span><span class="token punctuation">(</span>len <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> cur  <span class="token operator">=</span> que<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n            list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span>\n\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token punctuation">)</span> que<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">)</span>\n\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token punctuation">)</span> que<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">)</span>\n\n            len <span class="token operator">-=</span> <span class="token number">1</span>\n\n        <span class="token punctuation">}</span>\n        <span class="token comment">// 头插法</span>\n        temp<span class="token punctuation">.</span><span class="token function">addFirst</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\t<span class="token comment">// 将 链表转换成线性表</span>\n    result <span class="token operator">=</span> <span class="token function">list</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span>\n    <span class="token keyword">return</span> result\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><p>实际为：</p><p>Code：</p><div class="language-js"><pre><code><span class="token comment">/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */</span>\n<span class="token comment">/**\n * @param {TreeNode} root\n * @return {number[][]}\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">levelOrderBottom</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> result\n\n    <span class="token keyword">let</span> que <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    que<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>\n\n    <span class="token keyword">while</span><span class="token punctuation">(</span>que<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> len <span class="token operator">=</span> que<span class="token punctuation">.</span>length\n\n        <span class="token keyword">let</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n        <span class="token keyword">while</span><span class="token punctuation">(</span>len <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> cur  <span class="token operator">=</span> que<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n            list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span>\n\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token punctuation">)</span> que<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">)</span>\n\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token punctuation">)</span> que<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">)</span>\n\n            len <span class="token operator">-=</span> <span class="token number">1</span>\n\n        <span class="token punctuation">}</span>\n        result<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> result\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><ul><li>DFS + reverse</li></ul><p>Code：</p><div class="language-js"><pre><code><span class="token keyword">var</span> <span class="token function-variable function">levelOrderBottom</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> result\n    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> result<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> result<span class="token punctuation">,</span> level</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">&gt;</span> result<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> \n\n    result<span class="token punctuation">[</span>level<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> result<span class="token punctuation">,</span> level <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> result<span class="token punctuation">,</span> level <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',48);t.render=function(a,p,t,e,c,u){return n(),s("div",null,[o])};export default t;export{p as __pageData};
