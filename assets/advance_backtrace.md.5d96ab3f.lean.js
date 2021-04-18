import{o as n,c as s,b as a,d as t}from"./app.7617baa7.js";const o='{"title":"BackTracking 回溯法","description":"","frontmatter":{},"headers":[{"level":2,"title":"题型一","slug":"题型一"},{"level":3,"title":"22. 括号生成","slug":"_22-括号生成"},{"level":3,"title":"78. 子集","slug":"_78-子集"}],"relativePath":"advance/backtrace.md","lastUpdated":1618715583335}',e={},c=a("h1",{id:"backtracking-回溯法"},[a("a",{class:"header-anchor",href:"#backtracking-回溯法","aria-hidden":"true"},"#"),t(" BackTracking 回溯法")],-1),p=a("ul",null,[a("li",null,"类似枚举"),a("li",null,"本质上还是递归")],-1),u=a("p",null,"关键词：关键路径，最优解。",-1),l=a("p",null,"例题：",-1),k=a("ul",null,[a("li",null,"22"),a("li",null,"78：代表性回溯题"),a("li",null,"77"),a("li",null,"46"),a("li",null,"经典：八皇后，数独")],-1),i=a("hr",null,null,-1),r=a("h2",{id:"题型一"},[a("a",{class:"header-anchor",href:"#题型一","aria-hidden":"true"},"#"),t(" 题型一")],-1),m=a("h3",{id:"_22-括号生成"},[a("a",{class:"header-anchor",href:"#_22-括号生成","aria-hidden":"true"},"#"),t(),a("a",{href:"https://leetcode-cn.com/problems/generate-parentheses/",target:"_blank",rel:"noopener noreferrer"},"22. 括号生成")],-1),d=a("p",null,"难度中等1640收藏分享切换为英文接收动态反馈",-1),f=a("p",null,[t("数字 "),a("code",null,"n"),t(" 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 "),a("strong",null,"有效的"),t(" 括号组合。")],-1),g=a("p",null,[a("strong",null,"示例 1：")],-1),b=a("div",{class:"language-"},[a("pre",null,[a("code",null,'输入：n = 3\n输出：["((()))","(()())","(())()","()(())","()()()"]\n')])],-1),h=a("p",null,[a("strong",null,"示例 2：")],-1),w=a("div",{class:"language-"},[a("pre",null,[a("code",null,'输入：n = 1\n输出：["()"]\n')])],-1),y=a("p",null,[a("strong",null,"提示：")],-1),v=a("ul",null,[a("li",null,[a("code",null,"1 <= n <= 8")])],-1),x=a("hr",null,null,-1),_=a("ul",null,[a("li",null,"方法："),a("li",null,[t("题解："),a("a",{href:"https://mp.weixin.qq.com/s/VslFExUGNkYUNWXd91zbkQ",target:"_blank",rel:"noopener noreferrer"},"https://mp.weixin.qq.com/s/VslFExUGNkYUNWXd91zbkQ")]),a("li",null,[t("视频："),a("a",{href:"https://www.bilibili.com/video/BV1sy4y1q79M?p=65&spm_id_from=pageDriver",target:"_blank",rel:"noopener noreferrer"},"https://www.bilibili.com/video/BV1sy4y1q79M?p=65&spm_id_from=pageDriver")]),a("li",null,"说明：")],-1),q=a("p",null,[a("img",{src:"/vitepress-test/assets/pic-001.7cc49895.png",alt:""})],-1),B=a("ul",null,[a("li",null,"代码")],-1),G=a("details",null,[a("summary",null,[a("mark",null,"点击查看详细内容")]),a("div",{class:"language-js"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"/**\n * @param {number} n\n * @return {string[]}\n */"),t("\n"),a("span",{class:"token keyword"},"var"),t(),a("span",{class:"token function-variable function"},"generateParenthesis"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"n"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token keyword"},"const"),t(" list "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"]"),t("\n    "),a("span",{class:"token function"},"backtracking"),a("span",{class:"token punctuation"},"("),t("n"),a("span",{class:"token punctuation"},","),t(" list"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token string"},'""'),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n    "),a("span",{class:"token keyword"},"return"),t(" list"),a("span",{class:"token punctuation"},";"),t("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n\n\n"),a("span",{class:"token keyword"},"function"),t(),a("span",{class:"token function"},"backtracking"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},[t("n"),a("span",{class:"token punctuation"},","),t(" result"),a("span",{class:"token punctuation"},","),t(" left"),a("span",{class:"token punctuation"},","),t(" right"),a("span",{class:"token punctuation"},","),t(" str")]),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token comment"},"// 右边括号数量大于左边，表示无效括号组合"),t("\n    "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),t("right "),a("span",{class:"token operator"},">"),t(" left"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n            "),a("span",{class:"token keyword"},"return"),a("span",{class:"token punctuation"},";"),t("\n        "),a("span",{class:"token punctuation"},"}"),t("\n    "),a("span",{class:"token comment"},"// 左右两边括号数量相等"),t("\n    "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),t("left "),a("span",{class:"token operator"},"=="),t(" n "),a("span",{class:"token operator"},"&&"),t(" right "),a("span",{class:"token operator"},"=="),t(" n"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n        result"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"push"),a("span",{class:"token punctuation"},"("),t("str"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n        "),a("span",{class:"token keyword"},"return"),a("span",{class:"token punctuation"},";"),t("\n    "),a("span",{class:"token punctuation"},"}"),t("\n    "),a("span",{class:"token comment"},"// 左边少了，则左边 + 1"),t("\n    "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),t("left "),a("span",{class:"token operator"},"<"),t(" n"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n        "),a("span",{class:"token function"},"backtracking"),a("span",{class:"token punctuation"},"("),t("n"),a("span",{class:"token punctuation"},","),t(" result"),a("span",{class:"token punctuation"},","),t(" left"),a("span",{class:"token operator"},"+"),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},","),t(" right"),a("span",{class:"token punctuation"},","),t(" str"),a("span",{class:"token operator"},"+"),a("span",{class:"token string"},'"("'),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n    "),a("span",{class:"token punctuation"},"}"),t("\n    "),a("span",{class:"token comment"},"// 右边少了，则右边 + 1"),t("\n    "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),t("right "),a("span",{class:"token operator"},"<"),t(" left"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n        "),a("span",{class:"token function"},"backtracking"),a("span",{class:"token punctuation"},"("),t("n"),a("span",{class:"token punctuation"},","),t(" result"),a("span",{class:"token punctuation"},","),t(" left"),a("span",{class:"token punctuation"},","),t(" right"),a("span",{class:"token operator"},"+"),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},","),t(" str"),a("span",{class:"token operator"},"+"),a("span",{class:"token string"},'")"'),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n    "),a("span",{class:"token punctuation"},"}"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n")])])])],-1),N=a("h3",{id:"_78-子集"},[a("a",{class:"header-anchor",href:"#_78-子集","aria-hidden":"true"},"#"),t(),a("a",{href:"https://leetcode-cn.com/problems/subsets/",target:"_blank",rel:"noopener noreferrer"},"78. 子集")],-1),Q=a("p",null,"难度中等1059收藏分享切换为英文接收动态反馈",-1),V=a("p",null,[t("给你一个整数数组 "),a("code",null,"nums"),t(" ，数组中的元素 "),a("strong",null,"互不相同"),t(" 。返回该数组所有可能的子集（幂集）。")],-1),j=a("p",null,[t("解集 "),a("strong",null,"不能"),t(" 包含重复的子集。你可以按 "),a("strong",null,"任意顺序"),t(" 返回解集。")],-1),U=a("p",null,[a("strong",null,"示例 1：")],-1),M=a("div",{class:"language-"},[a("pre",null,[a("code",null,"输入：nums = [1,2,3]\n输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]\n")])],-1),X=a("p",null,[a("strong",null,"示例 2：")],-1),Y=a("div",{class:"language-"},[a("pre",null,[a("code",null,"输入：nums = [0]\n输出：[[],[0]]\n")])],-1),D=a("p",null,[a("strong",null,"提示：")],-1),F=a("ul",null,[a("li",null,[a("code",null,"1 <= nums.length <= 10")]),a("li",null,[a("code",null,"-10 <= nums[i] <= 10")]),a("li",null,[a("code",null,"nums"),t(" 中的所有元素 "),a("strong",null,"互不相同")])],-1),z=a("hr",null,null,-1),C=a("p",null,"解法：",-1),E=a("ul",null,[a("li",null,"方法："),a("li",null,[t("视频："),a("a",{href:"https://www.bilibili.com/video/BV1sy4y1q79M?p=66",target:"_blank",rel:"noopener noreferrer"},"https://www.bilibili.com/video/BV1sy4y1q79M?p=66")]),a("li",null,[t("解法："),a("a",{href:"https://mp.weixin.qq.com/s/QyflseNcsZCYG1XnorGx3Q",target:"_blank",rel:"noopener noreferrer"},"https://mp.weixin.qq.com/s/QyflseNcsZCYG1XnorGx3Q")]),a("li",null,"拓展法")],-1),P=a("p",null,[a("img",{src:"/vitepress-test/assets/pic-003.d858f0ff.png",alt:""})],-1),T=a("details",null,[a("summary",null,[a("mark",null,"点击查看详细内容")]),a("div",{class:"language-js"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"/**\n * @param {number[]} nums\n * @return {number[][]}\n */"),t("\n"),a("span",{class:"token keyword"},"var"),t(),a("span",{class:"token function-variable function"},"subsets"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"nums"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token comment"},"// 例如 nums = [1,2,3]"),t("\n    "),a("span",{class:"token keyword"},"const"),t(" result "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"]"),t("\n\tresult"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"push"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},")"),t("\n\n    "),a("span",{class:"token comment"},"// 遍历所有 nums"),t("\n\t"),a("span",{class:"token keyword"},"for"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"let"),t(" i "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},";"),t(" i "),a("span",{class:"token operator"},"<"),t(" nums"),a("span",{class:"token punctuation"},"."),t("length"),a("span",{class:"token punctuation"},";"),t(" i "),a("span",{class:"token operator"},"++"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n        "),a("span",{class:"token comment"},"// 定义临时 子数组-> 子集 数组"),t("\n\t   "),a("span",{class:"token keyword"},"const"),t(" sub "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"]"),t("\n\n        "),a("span",{class:"token comment"},"// 例如 result = [[], [1], [1,2]]"),t("\n\t   "),a("span",{class:"token keyword"},"for"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"let"),t(" m "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},";"),t(" m "),a("span",{class:"token operator"},"<"),t(" result"),a("span",{class:"token punctuation"},"."),t("length"),a("span",{class:"token punctuation"},";"),t(" m"),a("span",{class:"token operator"},"++"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n         "),a("span",{class:"token comment"},"// 定义临时变量，暂存 result 的 某一个 子集，也是我们要的结果"),t("\n\n         "),a("span",{class:"token comment"},"// 例如 result[m] = [1,2], 拷贝一份 temp => [1,2]"),t("\n\t   \t "),a("span",{class:"token keyword"},"const"),t(" temp "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"concat"),a("span",{class:"token punctuation"},"("),t("result"),a("span",{class:"token punctuation"},"["),t("m"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},")"),t("\n         \n         "),a("span",{class:"token comment"},"// 单数子集，比如 1, 或者 2, 或者 3"),t("\n\t   \t temp"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"push"),a("span",{class:"token punctuation"},"("),t("nums"),a("span",{class:"token punctuation"},"["),t("i"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},")"),t("\n\n         "),a("span",{class:"token comment"},"// 多数子集，比如 [[1], [1,2], [1,2,3]]"),t("\n         sub"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"push"),a("span",{class:"token punctuation"},"("),t("temp"),a("span",{class:"token punctuation"},")"),t("\n\t   "),a("span",{class:"token punctuation"},"}"),t("\n\n      "),a("span",{class:"token comment"},"// 一个个遍历子集，把他们放入 result 中"),t("\n\t   "),a("span",{class:"token keyword"},"for"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"let"),t(" k "),a("span",{class:"token keyword"},"in"),t(" sub"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n\t   \t  result"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"push"),a("span",{class:"token punctuation"},"("),t("sub"),a("span",{class:"token punctuation"},"["),t("k"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},")"),t("\n\t   "),a("span",{class:"token punctuation"},"}"),t("\n\t"),a("span",{class:"token punctuation"},"}"),t("\n\n\t"),a("span",{class:"token keyword"},"return"),t(" result\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n")])])])],-1),W=a("ul",null,[a("li",null,"递归回溯法")],-1),Z=a("details",null,[a("summary",null,[a("mark",null,"点击查看详细内容")]),a("div",{class:"language-js"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"/**\n * @param {number[]} nums\n * @return {number[][]}\n */"),t("\n"),a("span",{class:"token keyword"},"var"),t(),a("span",{class:"token function-variable function"},"subsets"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"nums"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n  "),a("span",{class:"token keyword"},"const"),t(" result "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"]"),t("\n  "),a("span",{class:"token keyword"},"for"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"let"),t(" i"),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},";"),t(" i"),a("span",{class:"token operator"},"<="),t(" nums"),a("span",{class:"token punctuation"},"."),t("length"),a("span",{class:"token punctuation"},";"),t(" i"),a("span",{class:"token operator"},"++"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token function"},"backtracking"),a("span",{class:"token punctuation"},"("),t("nums"),a("span",{class:"token punctuation"},","),t(" result"),a("span",{class:"token punctuation"},","),t(" i"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token punctuation"},"}"),t("\n  "),a("span",{class:"token keyword"},"return"),t(" result\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n\n"),a("span",{class:"token comment"},"// 参数说明  result 子集容器，要找的子集的长度 length，要从哪个位置开始找 index； sub 用于缓存子集结果"),t("\n"),a("span",{class:"token keyword"},"function"),t(),a("span",{class:"token function"},"backtracking"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},[t("nums"),a("span",{class:"token punctuation"},","),t(" result"),a("span",{class:"token punctuation"},","),t(" length"),a("span",{class:"token punctuation"},","),t(" index"),a("span",{class:"token punctuation"},","),t(" sub")]),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token comment"},"// 退出条件-子集的长度等于要找的 index "),t("\n    "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),t("sub"),a("span",{class:"token punctuation"},"."),t("length "),a("span",{class:"token operator"},"==="),t(" length"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n        result"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"push"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"concat"),a("span",{class:"token punctuation"},"("),t("sub"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),t("\n        "),a("span",{class:"token keyword"},"return"),t("\n    "),a("span",{class:"token punctuation"},"}"),t("\n\n    "),a("span",{class:"token keyword"},"for"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"let"),t(" i "),a("span",{class:"token operator"},"="),t(" index"),a("span",{class:"token punctuation"},";"),t(" i"),a("span",{class:"token operator"},"<"),t(" nums"),a("span",{class:"token punctuation"},"."),t("length"),a("span",{class:"token punctuation"},";"),t(" i"),a("span",{class:"token operator"},"++"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n        sub"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"push"),a("span",{class:"token punctuation"},"("),t("nums"),a("span",{class:"token punctuation"},"["),t("i"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},")"),t("\n        "),a("span",{class:"token function"},"backtracking"),a("span",{class:"token punctuation"},"("),t("nums"),a("span",{class:"token punctuation"},","),t(" result"),a("span",{class:"token punctuation"},","),t(" length"),a("span",{class:"token punctuation"},","),t(" i"),a("span",{class:"token operator"},"+"),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},","),t(" sub"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n\n        "),a("span",{class:"token comment"},"// 删掉最后一个 子集，避免在下一次回溯的时候重复"),t("\n        sub"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"pop"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),t("\n    "),a("span",{class:"token punctuation"},"}"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n")])])])],-1),S=a("ul",null,[a("li",null,"DFS 法")],-1),A=a("details",null,[a("summary",null,[a("mark",null,"点击查看详细内容")]),a("div",{class:"language-js"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"/**\n * @param {number[]} nums\n * @return {number[][]}\n */"),t("\n"),a("span",{class:"token keyword"},"var"),t(),a("span",{class:"token function-variable function"},"subsets"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"nums"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n  "),a("span",{class:"token keyword"},"const"),t(" result "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"]"),t("\n  "),a("span",{class:"token function"},"dfs"),a("span",{class:"token punctuation"},"("),t("nums"),a("span",{class:"token punctuation"},","),t(" result"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},")"),t("\n  "),a("span",{class:"token keyword"},"return"),t(" result\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n\n"),a("span",{class:"token keyword"},"function"),t(),a("span",{class:"token function"},"dfs"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},[t("nums"),a("span",{class:"token punctuation"},","),t(" result"),a("span",{class:"token punctuation"},","),t(" index"),a("span",{class:"token punctuation"},","),t(" sub")]),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n    result"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"push"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"concat"),a("span",{class:"token punctuation"},"("),t("sub"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),t("\n    "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),t("nums"),a("span",{class:"token punctuation"},"."),t("length "),a("span",{class:"token operator"},"==="),t(" index"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token keyword"},"return"),t("\n\n     "),a("span",{class:"token keyword"},"for"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"let"),t(" i "),a("span",{class:"token operator"},"="),t(" index"),a("span",{class:"token punctuation"},";"),t(" i "),a("span",{class:"token operator"},"<"),t(" nums"),a("span",{class:"token punctuation"},"."),t("length"),a("span",{class:"token punctuation"},";"),t(" i"),a("span",{class:"token operator"},"++"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n            sub"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"push"),a("span",{class:"token punctuation"},"("),t("nums"),a("span",{class:"token punctuation"},"["),t("i"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n            "),a("span",{class:"token function"},"dfs"),a("span",{class:"token punctuation"},"("),t("nums"),a("span",{class:"token punctuation"},","),t(" result"),a("span",{class:"token punctuation"},","),t(" i"),a("span",{class:"token operator"},"+"),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},","),t(" sub"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n            sub"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"pop"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),t("\n        "),a("span",{class:"token punctuation"},"}"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n")])])])],-1);e.render=function(a,t,o,e,H,I){return n(),s("div",null,[c,p,u,l,k,i,r,m,d,f,g,b,h,w,y,v,x,_,q,B,G,N,Q,V,j,U,M,X,Y,D,F,z,C,E,P,T,W,Z,S,A])};export default e;export{o as __pageData};
