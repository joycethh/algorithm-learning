//leetCode https://leetcode.com/problems/happy-number/description/?envType=study-plan&id=level-2

// Recursion
var isHappy = function (n) {
  const sumOfSquaresOfDigits = (n) => {
    return String(n)
      .split("")
      .reduce((sum, digit) => sum + digit * digit, 0);
  };

  if (n === 1) {
    return true;
  } else if (n === 0 || n === 4) {
    return false;
  } else {
    return isHappy(sumOfSquaresOfDigits(n));
  }
};
