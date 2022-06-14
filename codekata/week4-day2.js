const maxProfit = (prices) => {
  if (prices.length <= 1) return 0;
  let min = prices[0];
  let temp = 0;
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    temp = prices[i] - min;
    if (min > prices[i]) {
      min = prices[i];
    }
    profit = Math.max(temp, profit);
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// 46 43 45 41 47
// 63 65 61 67
// 35 31 37
// 51 57
// 17
