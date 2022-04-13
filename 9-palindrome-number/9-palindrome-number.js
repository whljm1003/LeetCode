/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = String(x)
    const back = str.split("").reverse().join("");
    if(str === back) {
        return true;
    }else {
        return false;
    }
};