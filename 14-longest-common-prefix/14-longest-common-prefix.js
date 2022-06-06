/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let answer = strs[0];

  for(let i = 1 ; i < strs.length ; i++) {
      let tmep = "";
      for(let j = 0 ; j <  answer.length ; j++) {
        if(answer[j] === strs[i][j]) {
          tmep += answer[j]
        }else {
          answer = tmep;
          break;
        }
      }
    }
  
  
  return answer;
   
};