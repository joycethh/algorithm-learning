//leetcode - Best time to buy and sell stock

//naive solution, o(n^2)
var maxProfit = function (prices) {
  //naive solution, o(n)
  let profit = 0;
  let profits = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      profit = prices[j] - prices[i];
      profits.push(profit);
    }
  }

  const sortedProfits = profits.sort((a, b) => a - b);
  const max = sortedProfits.pop();

  if (max > 0) return max;
  return 0;
};

// approach, o(n)
//keep track of the minimum price
// loop through the prices to get each day as sell price, deduct the minPrice to get the profit
// compare the each day profit to the maxProfit
var maxProfit11 = function (prices) {
  if (prices.length <= 1) return 0;

  let minPrice = prices[0];
  let maxProfit = 0;
  //i= sellDay
  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
};

// approach 3
// multiple pointers, o(n)
// create variable called max
// create two pointers, i, j
// loop through the prices to get the profit difference
// compare to the max
// if profit > max, set max = profit
// return max

// var maxProfit11 = function (prices) {
//   let max = 0;
//   let i = 0;
//   for (let j = 1; j < prices.length; j++) {
//     profit = prices[j] - prices[i];
//     console.log("profit", profit);

//     if (max <= profit) {
//       max = profit;
//       i++;
//     } else {
//       return max;
//     }
//   }
//   console.log("max", max);
//   return max;
// };

maxProfit11([7, 1, 5, 3, 6, 4]);
