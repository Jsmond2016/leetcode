/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  var result = []
  var arr = s.split(' ')
  for(var i = 0; i < arr.length; i++){
      result.push(arr[i].split('').reverse().join(''))
  }
  let str = result.join(" ")
  return str;
};