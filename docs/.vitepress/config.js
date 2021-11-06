const taskLists = require('markdown-it-task-lists');


module.exports = {
  lang: 'zh-CN',
  title: '数据结构和算法',
  description: '数据结构和算法小知识汇总',
  base: "/leetcode/",
  themeConfig: {
    repo: 'Jsmond2016/leetcode',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: '编辑本页',
    lastUpdated: '最后更新时间',

    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress'
    },

    // carbonAds: {
    //   carbon: 'CEBDT27Y',
    //   custom: 'CKYD62QM',
    //   placement: 'vuejsorg'
    // },

    nav: [
      { text: '首页', link: '/', activeMatch: '^/$|^/base|advance/' },
      // {
      //   text: '归档',
      //   link: '/config/basics',
      //   activeMatch: '^/config/'
      // },
      // {
      //   text: '分类',
      //   link: '/category'
      // }
    ],

    sidebar: {
      // '/base/': getGuideSidebar(),
      // '/advance/': getConfigSidebar(),
      '/': getGuideSidebar()
    },
  },
  markdown: {

    config: (md) => {
      // use more markdown-it plugins!
      md.use(taskLists)
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: '数据结构知识',
      children: [
        { text: '复杂度', link: '/base/complexity' },
        { text: '数组', link: '/base/array' },
        { text: '链表', link: '/base/linkedlist' },
        // { text: '队列', link: '/base/queue' },
        // { text: '栈', link: '/base/stack' },
        // { text: '哈希集合', link: '/base/hash-collection' },
        { text: '树', link: '/base/tree' },
        // { text: '堆', link: '/base/heap' },
      ]
    },
    {
      text: '算法思想',
      children: [
        { text: '书写模板', link: '/advance/template' },
        { text: '双指针', link: '/advance/dual-slidingpointer' },
        { text: '二分查找', link: '/advance/binary-search' },
        { text: '滑动窗口', link: '/advance/slide-window' },
        { text: '递归', link: '/advance/recursion' },
        { text: '分治', link: '/advance/divide' },
        { text: '回溯', link: '/advance/backtrace' },
        { text: 'DFS', link: '/advance/dfs' },
        { text: 'BFS', link: '/advance/bfs' },
        { text: '并查集', link: '/advance/union-find' },
        {text: '贪心算法',link: '/advance/greddy'},
        {text: '记忆化搜索',link: '/advance/memory-search'},
        {text: '动态规划',link: '/advance/dp'},
      //   {text: '前缀树',link: '/advance/prefix-tree'},
      ]
    },
    {
      text: '分类题集',
      children: [
        // 链表 https://leetcode-cn.com/leetbook/detail/linked-list/
        { text: '链表', link: '/leetbook/linked-list' },
        // 数组 https://leetcode-cn.com/leetbook/detail/all-about-array/
        // 数组和字符串 https://leetcode-cn.com/leetbook/detail/array-and-string/
        // { text: '数组', link: '/leetbook/array-string' },
        { text: '数组和字符串', link: '/leetbook/array-string' },
        // 队列和栈 https://leetcode-cn.com/leetbook/detail/queue-stack/
        // { text: '栈和队列', link: '/leetbook/stack-queue' },
        { text: '树', link: '/leetbook/tree' }, // 包括树，二叉树，N叉树
        // 二分查找 https://leetcode-cn.com/leetbook/detail/binary-search/
        // { text: '二分查找', link: '/leetbook/binary-search' },
        // 二叉树 https://leetcode-cn.com/leetbook/detail/data-structure-binary-tree/
        // N 叉树 https://leetcode-cn.com/leetbook/detail/n-ary-tree/
        // { text: '树', link: '/leetcode/tree'}
        // 前缀树 https://leetcode-cn.com/leetbook/detail/trie/
        // { text: '前缀树', link: '/leetbook/prefix-tree' },
        // 哈希表 https://leetcode-cn.com/leetbook/detail/hash-table/
        // { text: '哈希表', link: '/leetbook/hash' },
        // 算法面试题汇总 https://leetcode-cn.com/leetbook/detail/top-interview-questions/
        // { text: '算法面试题汇总', link: '/leetbook/summary' }
      ]
    },
    // 高级算法 https://leetcode-cn.com/leetbook/detail/top-interview-questions-hard/
    // {
    //   text: '高级算法',
    //   children: []
    // }
  ]
}

function getConfigSidebar() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'Basics', link: '/config/basics' }]
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' },
        { text: 'Carbon Ads', link: '/config/carbon-ads' }
      ]
    }
  ]
}
