/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
  const result = Array.from(Array(n), () => Array(n).fill(0))
  let currentValue = 1;
  let [ left, right, top, bottom ] = [ 0, n - 1, 0, n-1 ];
  while(left <= right && top <= bottom){
      for(let i = left; i <= right; i++){
          result[top][i] = currentValue;
          currentValue ++;
      }
      for(let i = top + 1; i <= bottom; i++){
          result[i][right] = currentValue;
          currentValue ++;
      }
      for(let i = right - 1; i >= left; i--){
          result[bottom][i] = currentValue;
          currentValue ++;
      }
      for(let i = bottom - 1; i > top; i--){
          result[i][left] = currentValue;
          currentValue ++;
      }
      left++;
      top ++;
      right--;
      bottom--;
  }
  return result;
};

// 作者：uniquelee
// 链接：https://leetcode-cn.com/problems/spiral-matrix-ii/solution/java-javascript-xuan-zhuan-ju-zhen-ji-ba-ltek/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。