/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []; 
  let complete = {
    ")" : "(",
    "]" : "[",
    "}" : "{",
  }
  
  for(let target of s) {
    if(stack.length === 0 || stack[stack.length-1] !== complete[target]) {
      stack.push(target);
    }else {
      stack.pop();
    }
  }
  
  return stack.length === 0;

};