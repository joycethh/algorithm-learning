//Fabanacci Number--Dynamic Coding
var fib = function (n) {
  // take out the edge case when n=0, f(n) = 0， f(1) = 1;
  // create two variable called n1, n2, n1 < n2
  // loop through n, get the sum of n1 + n2
  // while the loop goes, n1 will jump to n2 position, n2 become the sum
  if (n <= 1) return n;
  let n1 = 0,
    n2 = 1,
    sum;
  for (let i = 2; i <= n; i++) {
    console.log("i", i);
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }
  return sum;
};

//Climbing Stairs-LeetCode
var climbStairs = function (n) {
  //approach 1, bottom to up
  let curr = 1,
    prev = 1,
    temp = 0;
  for (let i = 1; i < n; i++) {
    temp = curr;
    curr = curr + prev;
    prev = temp;
  }
  return curr;
};

const climbStairs2 = (n) => {
  // approach 2, recursion with memoization
  let ways = { 1: 1, 2: 2 };
  if (!ways[n]) {
    ways[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }
  console.log("ways", ways);
  return ways[n];
};
