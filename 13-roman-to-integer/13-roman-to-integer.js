/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
        let result = 0;

        const calculater = (a, b, target, number) => {
          if (target === a || target === b) {
            result -= number;
          } else {
            result += number;
          }
        };

        for (let i = 0; i < s.length; i++) {
          if (s[i] === "I") calculater("V", "X", s[i + 1], 1);
          if (s[i] === "V") result += 5;
          if (s[i] === "X") calculater("L", "C", s[i + 1], 10);
          if (s[i] === "L") result += 50;
          if (s[i] === "C") calculater("D", "M", s[i + 1], 100);
          if (s[i] === "D") result += 500;
          if (s[i] === "M") result += 1000;
        }
        return result;
      };
