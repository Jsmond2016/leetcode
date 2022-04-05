/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  // 双指针法，两边向中间挪动，左短挪左，右短挪右
  let area = 0;
  let l = 0, r = height.length -1;

  while (l < r) {
      // 底部长度已确定为 r-l，然后比较两段高度的最小的值（因为最小值限制了面积）
      // --短板效应决定了容器极大值
      const temp = Math.min(height[l], height[r]) * (r - l);
      area = Math.max(area, temp);
      if (height[l] < height[r]) {
          l++
      } else {
          r--
      }
  }
  return area
};