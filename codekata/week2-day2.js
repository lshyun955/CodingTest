function moreThanHalf(nums) {
  // 여기에 코드를 작성해주세요.
  const check = {};
  nums.forEach((v) => {
    check[v] = (check[v] || 0) + 1;
  });
  let max = check[Object.keys(check)[0]];
  let maxNum = Object.keys(check)[0];
  for (let i = 1; i < Object.keys(check).length; i++) {
    if (check[Object.keys(check)[i]] > max) {
      max = check[Object.keys(check)[i]];
      maxNum = Object.keys(check)[i];
    }
  }
  return Number(maxNum);
}

console.log(moreThanHalf([3, 2, 3]));
