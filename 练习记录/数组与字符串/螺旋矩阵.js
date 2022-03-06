/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function (matrix) {
  if (matrix.length == 0) return [];
  const res = [];
  // 数组中元素总个数
  const size = matrix.length * matrix[0].length;
  // 分别代表上下左右
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  // 按照上右下左的顺序遍历，遍历完向内收缩
  while (res.length !== size) {
    // 上   从左到右一整行
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    // 右   从上到下一整列  在top++后就不会包含重复的右上角元素
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    if (res.length === size) break; // 遍历结束
    // 下  从右到左一整行  在rights--后，就不会包含重复的右下角元素
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;
    // 左  从下到上一整列  在bottom--后，就不会包含重复的左下角元素
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }
  return res;
};


// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/spiral-matrix/solution/tu-jie-zhu-shi-xiang-xi-by-angela-x-gw3u/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



// --------- 法二 ------------------------


/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 方法1： 创建同等大小的矩阵flags标记访问过的节点，按 右下左上 的顺序循环访问即可
 */
 var spiralOrder = function(matrix) {
  let flag = false, i=0, j = 0;
  // 把第一个值放入结果
  let res = [matrix[i][j]];
  matrix[i][j] = Infinity
  while (true) {
      flag = true;
      while (matrix[i][j + 1] !== undefined && matrix[i][j + 1] !== Infinity) {
          res.push(matrix[i][++j])
          matrix[i][j] = Infinity
          flag = false;
      }
      while (matrix[i+1] && matrix[i + 1][j] !== Infinity) {
          res.push(matrix[++i][j])
          matrix[i][j] = Infinity
          flag = false;
      }
      while (matrix[i][j-1] !== undefined && matrix[i][j-1] !== Infinity) {
          res.push(matrix[i][--j])
          matrix[i][j] = Infinity
          flag = false;
      }
      while (matrix[i-1] && matrix[i-1][j] !== Infinity) {
          res.push(matrix[--i][j])
          matrix[i][j] = Infinity
          flag = false;
      }
      if (flag) break
  }
  return res
};