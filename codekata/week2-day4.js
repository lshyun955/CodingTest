function topK(nums, k) {
  // 여기에 코드를 작성해주세요.
  const check = {};
  nums.forEach((v) => {
    check[v] = (check[v] || 0) + 1;
  });

  return Object.keys(check)
    .sort((a, b) => check[b] - check[a])
    .slice(0, k)
    .map((v) => +v);
}

console.log(topK([1, 1, 1, 2, 2, 3], 2));
