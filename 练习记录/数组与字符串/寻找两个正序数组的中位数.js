/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  const res = [...nums1, ...nums2].sort((a, b) => a - b);
  const len = res.length;

  if (len % 2 === 0) {
      const mid = len / 2;
      return (res[mid] + res[mid-1]) / 2
  } else {
      return res[Math.floor(len / 2)]
  }


};