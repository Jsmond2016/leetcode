import{o as n,c as s,a,b as t}from"./app.08f538b2.js";const o='{"title":"前缀树","description":"","frontmatter":{},"relativePath":"advance/prefix-tree.md","lastUpdated":1649151748147}',e={},c=a("h1",{id:"前缀树"},[a("a",{class:"header-anchor",href:"#前缀树","aria-hidden":"true"},"#"),t(" 前缀树")],-1),p=a("p",null,[a("img",{src:"/leetcode/assets/prefix-tree.bef1f3b4.png",alt:""})],-1),l=a("p",null,[a("img",{src:"/leetcode/assets/prefix-tree-2.6e52cf14.png",alt:""})],-1),u=a("p",null,"推荐例题：",-1),k=a("ul",null,[a("li",null,"208 实现前缀树： 必须掌握，掌握后则其他题型套用即可"),a("li",null,"720 字典中最长的单词"),a("li",null,"692 前K个高频单词")],-1),i=a("hr",null,null,-1),r=a("ul",null,[a("li",null,"208 实现前缀树")],-1),d=a("p",null,[a("img",{src:"/leetcode/assets/208.2eca2cd9.png",alt:""}),a("img",{src:"/leetcode/assets/prefix-tree-3.63edc83d.png",alt:""})],-1),m=a("p",null,"例子：我们要实现类似这种数据结构",-1),f=a("div",{class:"language-js"},[a("pre",null,[a("code",null,[a("span",{class:"token punctuation"},"{"),t("\n  "),a("span",{class:"token string"},"'a'"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t("\n      "),a("span",{class:"token string"},"'p'"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t("\n          "),a("span",{class:"token string"},"'p'"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t("\n              "),a("span",{class:"token string"},"'l'"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t("\n                  "),a("span",{class:"token string"},"'e'"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t("\n                      "),a("span",{class:"token string"},"'isEnd'"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},","),t("\n                      "),a("span",{class:"token string"},"'val'"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},"'apple'"),t("\n                    "),a("span",{class:"token punctuation"},"}"),t("\n                "),a("span",{class:"token punctuation"},"}"),t("\n            "),a("span",{class:"token punctuation"},"}"),t("\n        "),a("span",{class:"token punctuation"},"}"),t("\n    "),a("span",{class:"token punctuation"},"}"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n\n"),a("span",{class:"token comment"},"// 作者：xing-guang-29"),t("\n"),a("span",{class:"token comment"},"// 链接：https://leetcode-cn.com/problems/implement-trie-prefix-tree/solution/208-shi-xian-trie-qian-zhui-shu-by-xing-8ufh8/"),t("\n"),a("span",{class:"token comment"},"// 来源：力扣（LeetCode）"),t("\n"),a("span",{class:"token comment"},"// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"),t("\n\n")])])],-1),w=a("p",null,"题解：",-1),y=a("div",{class:"language-js"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"var"),t(),a("span",{class:"token function-variable function"},"Trie"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),t("children "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"{"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n\n"),a("span",{class:"token class-name"},"Trie"),a("span",{class:"token punctuation"},"."),t("prototype"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function-variable function"},"insert"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"word"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token keyword"},"let"),t(" node "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),t("children"),a("span",{class:"token punctuation"},";"),t("\n    "),a("span",{class:"token keyword"},"let"),t(" val "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token string"},'""'),t("\n    "),a("span",{class:"token keyword"},"for"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"const"),t(" ch "),a("span",{class:"token keyword"},"of"),t(" word"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n        val "),a("span",{class:"token operator"},"+="),t(" ch"),a("span",{class:"token punctuation"},";"),t("\n        "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token operator"},"!"),t("node"),a("span",{class:"token punctuation"},"["),t("ch"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n            node"),a("span",{class:"token punctuation"},"["),t("ch"),a("span",{class:"token punctuation"},"]"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"{"),t(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n        "),a("span",{class:"token punctuation"},"}"),t("\n        node "),a("span",{class:"token operator"},"="),t(" node"),a("span",{class:"token punctuation"},"["),t("ch"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},";"),t("\n    "),a("span",{class:"token punctuation"},"}"),t("\n    node"),a("span",{class:"token punctuation"},"."),t("isEnd "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token boolean"},"true"),a("span",{class:"token punctuation"},";"),t("\n    node"),a("span",{class:"token punctuation"},"."),t("val "),a("span",{class:"token operator"},"="),t(" val"),a("span",{class:"token punctuation"},";"),t("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n\n"),a("span",{class:"token class-name"},"Trie"),a("span",{class:"token punctuation"},"."),t("prototype"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function-variable function"},"searchPrefix"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"prefix"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token keyword"},"let"),t(" node "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),t("children"),a("span",{class:"token punctuation"},";"),t("\n    "),a("span",{class:"token keyword"},"for"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"const"),t(" ch "),a("span",{class:"token keyword"},"of"),t(" prefix"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n        "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token operator"},"!"),t("node"),a("span",{class:"token punctuation"},"["),t("ch"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n            "),a("span",{class:"token keyword"},"return"),t(),a("span",{class:"token boolean"},"false"),a("span",{class:"token punctuation"},";"),t("\n        "),a("span",{class:"token punctuation"},"}"),t("\n        node "),a("span",{class:"token operator"},"="),t(" node"),a("span",{class:"token punctuation"},"["),t("ch"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},";"),t("\n    "),a("span",{class:"token punctuation"},"}"),t("\n    "),a("span",{class:"token keyword"},"return"),t(" node"),a("span",{class:"token punctuation"},";"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n\n"),a("span",{class:"token class-name"},"Trie"),a("span",{class:"token punctuation"},"."),t("prototype"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function-variable function"},"search"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"word"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token keyword"},"const"),t(" node "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"searchPrefix"),a("span",{class:"token punctuation"},"("),t("word"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n    "),a("span",{class:"token keyword"},"return"),t(" node "),a("span",{class:"token operator"},"!=="),t(),a("span",{class:"token keyword"},"undefined"),t(),a("span",{class:"token operator"},"&&"),t(" node"),a("span",{class:"token punctuation"},"."),t("isEnd "),a("span",{class:"token operator"},"!=="),t(),a("span",{class:"token keyword"},"undefined"),a("span",{class:"token punctuation"},";"),t("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n\n"),a("span",{class:"token class-name"},"Trie"),a("span",{class:"token punctuation"},"."),t("prototype"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function-variable function"},"startsWith"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"prefix"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token keyword"},"return"),t(),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"searchPrefix"),a("span",{class:"token punctuation"},"("),t("prefix"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n\n  "),a("span",{class:"token comment"},"// 这种方式可以取出所有以 prefix 开始的值 "),t("\n  "),a("span",{class:"token comment"},"// let objSource = this.searchPrefix(prefix);"),t("\n  "),a("span",{class:"token comment"},"//   const fn = (objSource, result = []) => {"),t("\n  "),a("span",{class:"token comment"},"//       Object.keys(objSource).forEach(k => {"),t("\n  "),a("span",{class:"token comment"},"//           let temp = objSource[k]"),t("\n  "),a("span",{class:"token comment"},"//           if (temp.isEnd) {"),t("\n  "),a("span",{class:"token comment"},"//               result.push(temp.val)"),t("\n  "),a("span",{class:"token comment"},"//           }"),t("\n  "),a("span",{class:"token comment"},"//           if (typeof temp === 'object') {"),t("\n  "),a("span",{class:"token comment"},"//               fn(temp, result)"),t("\n  "),a("span",{class:"token comment"},"//           }"),t("\n  "),a("span",{class:"token comment"},"//       })"),t("\n  "),a("span",{class:"token comment"},"//       return result"),t("\n  "),a("span",{class:"token comment"},"//   }"),t("\n  "),a("span",{class:"token comment"},"//  return fn(objSource, [])"),t("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n\n"),a("span",{class:"token comment"},"// let trie = new Trie();"),t("\n"),a("span",{class:"token comment"},'// trie.insert("apple");'),t("\n"),a("span",{class:"token comment"},"// trie.insert('application')"),t("\n"),a("span",{class:"token comment"},"// trie.insert('apply')"),t("\n"),a("span",{class:"token comment"},"// trie.insert('applyabc')"),t("\n"),a("span",{class:"token comment"},'// let res = trie.startsWith("app")'),t("\n"),a("span",{class:"token comment"},"// console.log('res', res)"),t("\n"),a("span",{class:"token comment"},"// "),t("\n"),a("span",{class:"token comment"},"// res  ==>  ['apple', 'application', 'apply', 'applyabc']"),t("\n\n\n\n"),a("span",{class:"token comment"},"// 作者：LeetCode-Solution"),t("\n"),a("span",{class:"token comment"},"// 链接：https://leetcode-cn.com/problems/implement-trie-prefix-tree/solution/shi-xian-trie-qian-zhui-shu-by-leetcode-ti500/"),t("\n"),a("span",{class:"token comment"},"// 来源：力扣（LeetCode）"),t("\n"),a("span",{class:"token comment"},"// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"),t("\n\n")])])],-1),h=a("ul",null,[a("li",null,"720 词典中最长的单词")],-1),g=a("p",null,[a("img",{src:"/leetcode/assets/702.bb0bbe8d.png",alt:""})],-1),b=a("p",null,"解题思路：",-1),v=a("ul",null,[a("li",null,"前缀树 + dfs"),a("li",null,"哈希表")],-1),x=a("p",null,"代码：前缀树 + dfs 方法",-1),j=a("div",{class:"language-js"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"var"),t(),a("span",{class:"token function-variable function"},"longestWord"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"function"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"words"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token keyword"},"const"),t(" trie "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"new"),t(),a("span",{class:"token class-name"},"Trie"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),t("\n    words"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"forEach"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"word"),t(),a("span",{class:"token operator"},"=>"),t(),a("span",{class:"token punctuation"},"{"),a("span",{class:"token comment"},"//将所有字符串插入trie中"),t("\n        trie"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"insert"),a("span",{class:"token punctuation"},"("),t("word"),a("span",{class:"token punctuation"},")"),t("\n    "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),t("\n    "),a("span",{class:"token keyword"},"let"),t(" res "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token string"},"''"),t("\n    "),a("span",{class:"token keyword"},"const"),t(),a("span",{class:"token function-variable function"},"_helper"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},[t("nodes"),a("span",{class:"token punctuation"},","),t(" path")]),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token operator"},"=>"),t(),a("span",{class:"token punctuation"},"{"),t("\n        "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),t("path"),a("span",{class:"token punctuation"},"."),t("length "),a("span",{class:"token operator"},">"),t(" res"),a("span",{class:"token punctuation"},"."),t("length "),a("span",{class:"token operator"},"||"),t(),a("span",{class:"token punctuation"},"("),t("res"),a("span",{class:"token punctuation"},"."),t("length "),a("span",{class:"token operator"},"==="),t(" path"),a("span",{class:"token punctuation"},"."),t("length "),a("span",{class:"token operator"},"&&"),t(" res "),a("span",{class:"token operator"},">"),t(" path"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n            res "),a("span",{class:"token operator"},"="),t(" path\n        "),a("span",{class:"token punctuation"},"}"),t("\n\t\t\t\t"),a("span",{class:"token comment"},"//{a:{b1:{c1:{isEnd: true}},b2:{c2:{isEnd: true}}}}"),t("\n        "),a("span",{class:"token keyword"},"for"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"const"),t(),a("span",{class:"token punctuation"},"["),t("key"),a("span",{class:"token punctuation"},","),t(" value"),a("span",{class:"token punctuation"},"]"),t(),a("span",{class:"token keyword"},"of"),t(" Object"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"entries"),a("span",{class:"token punctuation"},"("),t("nodes"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("        \n            "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),t("value"),a("span",{class:"token punctuation"},"."),t("isEnd"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),a("span",{class:"token comment"},"//如果当前字符是某一个字符串的结尾"),t("\n                path "),a("span",{class:"token operator"},"+="),t(" key\n                "),a("span",{class:"token function"},"_helper"),a("span",{class:"token punctuation"},"("),t("value"),a("span",{class:"token punctuation"},","),t(" path"),a("span",{class:"token punctuation"},")"),a("span",{class:"token comment"},"//递归寻找"),t("\n                path "),a("span",{class:"token operator"},"="),t(" path"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"slice"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token operator"},"-"),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},")"),a("span",{class:"token comment"},"//回溯"),t("\n            "),a("span",{class:"token punctuation"},"}"),t("\n        "),a("span",{class:"token punctuation"},"}"),t("\n    "),a("span",{class:"token punctuation"},"}"),t("\n    "),a("span",{class:"token function"},"_helper"),a("span",{class:"token punctuation"},"("),t("trie"),a("span",{class:"token punctuation"},"."),t("children"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token string"},"''"),a("span",{class:"token punctuation"},")"),a("span",{class:"token comment"},"//递归寻找那个长度最大的单词"),t("\n    "),a("span",{class:"token keyword"},"return"),t(" res\n"),a("span",{class:"token punctuation"},"}"),t("\n\n"),a("span",{class:"token keyword"},"var"),t(),a("span",{class:"token function-variable function"},"Trie"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),t("children "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"{"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n\n"),a("span",{class:"token class-name"},"Trie"),a("span",{class:"token punctuation"},"."),t("prototype"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function-variable function"},"insert"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"word"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token keyword"},"let"),t(" nodes "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),t("children"),a("span",{class:"token punctuation"},";"),t("\n    "),a("span",{class:"token keyword"},"for"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"const"),t(" ch "),a("span",{class:"token keyword"},"of"),t(" word"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),a("span",{class:"token comment"},"//循环word"),t("\n        "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token operator"},"!"),t("nodes"),a("span",{class:"token punctuation"},"["),t("ch"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),a("span",{class:"token comment"},"//当前字符不在子节点中 则创建一个子节点到children的响应位置"),t("\n            nodes"),a("span",{class:"token punctuation"},"["),t("ch"),a("span",{class:"token punctuation"},"]"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"{"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n        "),a("span",{class:"token punctuation"},"}"),t("\n        nodes "),a("span",{class:"token operator"},"="),t(" nodes"),a("span",{class:"token punctuation"},"["),t("ch"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},";"),a("span",{class:"token comment"},"//移动指针到下一个字符"),t("\n    "),a("span",{class:"token punctuation"},"}"),t("\n    nodes"),a("span",{class:"token punctuation"},"."),t("isEnd "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token boolean"},"true"),a("span",{class:"token punctuation"},";"),a("span",{class:"token comment"},"//字符是否结束"),t("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n\n\n"),a("span",{class:"token comment"},"// 作者：chen-wei-f"),t("\n"),a("span",{class:"token comment"},"// 链接：https://leetcode-cn.com/problems/longest-word-in-dictionary/solution/720-ci-dian-zhong-zui-chang-de-dan-ci-by-2k5k/"),t("\n"),a("span",{class:"token comment"},"// 来源：力扣（LeetCode）"),t("\n"),a("span",{class:"token comment"},"// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"),t("\n")])])],-1),E=a("p",null,"代码：哈希表",-1),T=a("div",{class:"language-js"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"/**\n * @param {string[]} words\n * @return {string}\n */"),t("\n"),a("span",{class:"token keyword"},"var"),t(),a("span",{class:"token function-variable function"},"longestWord"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"words"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n  "),a("span",{class:"token keyword"},"let"),t(" res "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token string"},"''"),t("\n  "),a("span",{class:"token keyword"},"let"),t(" set "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"new"),t(),a("span",{class:"token class-name"},"Set"),a("span",{class:"token punctuation"},"("),t("words"),a("span",{class:"token punctuation"},")"),t("\n  "),a("span",{class:"token keyword"},"for"),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"let"),t(" w "),a("span",{class:"token keyword"},"of"),t(" words"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),t("w"),a("span",{class:"token punctuation"},"."),t("length "),a("span",{class:"token operator"},"<"),t(" res"),a("span",{class:"token punctuation"},"."),t("length "),a("span",{class:"token operator"},"||"),t(" w"),a("span",{class:"token punctuation"},"."),t("length "),a("span",{class:"token operator"},"==="),t(" res"),a("span",{class:"token punctuation"},"."),t("length "),a("span",{class:"token operator"},"&&"),t(" w "),a("span",{class:"token operator"},">"),t(" res"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token keyword"},"continue"),t("\n    "),a("span",{class:"token keyword"},"let"),t(" flag "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token boolean"},"true"),t("\n    "),a("span",{class:"token keyword"},"for"),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"let"),t(" i "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},";"),t(" i "),a("span",{class:"token operator"},"<"),t(" w"),a("span",{class:"token punctuation"},"."),t("length"),a("span",{class:"token punctuation"},";"),t(" i"),a("span",{class:"token operator"},"++"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"{"),t("  "),a("span",{class:"token comment"},"// 判断每个前缀是否在words中"),t("\n      "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token operator"},"!"),t("set"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"has"),a("span",{class:"token punctuation"},"("),t(" w"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"slice"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},","),t(" i"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n        flag "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token boolean"},"false"),t("\n        "),a("span",{class:"token keyword"},"break"),t("\n      "),a("span",{class:"token punctuation"},"}"),t("\n    "),a("span",{class:"token punctuation"},"}"),t("\n    "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),t("flag"),a("span",{class:"token punctuation"},")"),t(" res "),a("span",{class:"token operator"},"="),t(" w\n  "),a("span",{class:"token punctuation"},"}"),t("\n  "),a("span",{class:"token keyword"},"return"),t(" res\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n\n"),a("span",{class:"token comment"},"// 作者：shetia"),t("\n"),a("span",{class:"token comment"},"// 链接：https://leetcode-cn.com/problems/longest-word-in-dictionary/solution/ci-dian-zhong-zui-chang-de-dan-ci-by-she-n4rf/"),t("\n"),a("span",{class:"token comment"},"// 来源：力扣（LeetCode）"),t("\n")])])],-1),S=a("hr",null,null,-1),z=a("ul",null,[a("li",null,"692 前k个高频单词")],-1),C=a("p",null,"解题思路：",-1),L=a("ul",null,[a("li",null,"前缀树"),a("li",null,"哈希表 + 排序")],-1),P=a("p",null,"代码：哈希表 + 排序",-1),q=a("div",{class:"language-js"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"/**\n * @param {string[]} words\n * @param {number} k\n * @return {string[]}\n */"),t("\n"),a("span",{class:"token keyword"},"var"),t(),a("span",{class:"token function-variable function"},"topKFrequent"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},[t("words"),a("span",{class:"token punctuation"},","),t(" k")]),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token keyword"},"const"),t(" map "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"{"),a("span",{class:"token punctuation"},"}"),t("\n    "),a("span",{class:"token keyword"},"for"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"let"),t(" i "),a("span",{class:"token keyword"},"of"),t(" words"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n        map"),a("span",{class:"token punctuation"},"["),t("i"),a("span",{class:"token punctuation"},"]"),t(),a("span",{class:"token operator"},"?"),t(" map"),a("span",{class:"token punctuation"},"["),t("i"),a("span",{class:"token punctuation"},"]"),t(),a("span",{class:"token operator"},"+="),t(),a("span",{class:"token number"},"1"),t(),a("span",{class:"token operator"},":"),t(" map"),a("span",{class:"token punctuation"},"["),t("i"),a("span",{class:"token punctuation"},"]"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token number"},"1"),t("\n    "),a("span",{class:"token punctuation"},"}"),t("\n   "),a("span",{class:"token keyword"},"const"),t(" idx "),a("span",{class:"token operator"},"="),t(" Object"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"entries"),a("span",{class:"token punctuation"},"("),t("map"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"sort"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},[a("span",{class:"token punctuation"},"["),t("i1"),a("span",{class:"token punctuation"},","),t(" v1"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token punctuation"},"["),t("i2"),a("span",{class:"token punctuation"},","),t("v2"),a("span",{class:"token punctuation"},"]")]),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token operator"},"=>"),t(),a("span",{class:"token punctuation"},"("),t("v2 "),a("span",{class:"token operator"},"-"),t(" v1"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token operator"},"||"),t(" i1"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"localeCompare"),a("span",{class:"token punctuation"},"("),t("i2"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"slice"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},","),t(" k"),a("span",{class:"token punctuation"},")"),t("\n   "),a("span",{class:"token keyword"},"return"),t(" idx"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"map"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"item"),t(),a("span",{class:"token operator"},"=>"),t(" item"),a("span",{class:"token punctuation"},"["),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},")"),t("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n\n"),a("span",{class:"token comment"},'// topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3)'),t("\n")])])],-1);e.render=function(a,t,o,e,W,K){return n(),s("div",null,[c,p,l,u,k,i,r,d,m,f,w,y,h,g,b,v,x,j,E,T,S,z,C,L,P,q])};export default e;export{o as __pageData};