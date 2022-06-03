function getMaxArea(height) {
  // let max = Math.max(height[0],height[1]);
  const result = [];

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      result.push(Math.min(height[i], height[j]) * (j - i));
    }
  }
  return Math.max(...result);
}

console.log(getMaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
