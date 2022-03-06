var merge = function(nums1, m, nums2, n) {
  // 逆向双指针，从后面开始
  let p1 = m - 1, p2 = n - 1;
  let tail = m + n - 1;
  var cur;
  while (p1 >= 0 || p2 >= 0) {
      if (p1 === -1) {
          cur = nums2[p2--];
      } else if (p2 === -1) {
          cur = nums1[p1--];
      } else if (nums1[p1] > nums2[p2]) {
          cur = nums1[p1--];
      } else {
          cur = nums2[p2--];
      }
      nums1[tail--] = cur;
  }
};

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/merge-sorted-array/solution/he-bing-liang-ge-you-xu-shu-zu-by-leetco-rrb0/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。