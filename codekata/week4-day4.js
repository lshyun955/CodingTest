const maxSubArray = (nums) => {
  const tempArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let temp = nums.slice(i, j + 1);
      tempArr.push(temp.reduce((acc, v) => (acc += v), 0));
    }
  }
  return Math.max(...tempArr);
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
