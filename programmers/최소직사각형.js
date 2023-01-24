function solution(sizes) {
  let answer = 0;
  sizes.forEach((v, idx) => {
    sizes[idx] = v.sort((a, b) => a - b);
  });

  const left = sizes.map((v) => v[0]);
  const right = sizes.map((v) => v[1]);
  answer = Math.max(...left) * Math.max(...right);
  return answer;
}

// 80 50
// 80 70 60 50 40 30
console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);

// 60 50
// 70 30
// 60 30
// 80 40
// --> 80, 50
