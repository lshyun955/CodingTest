function solution(left, right) {
  const arr = Array.from({ length: right - left + 1 }, (v, i) => i + left);
  const newArr = arr.map((v) => {
    let cnt = 1;
    for (let i = 0; i < v; i++) {
      if (v % i === 0) cnt++;
    }
    if (cnt % 2 === 0) {
      return v;
    } else {
      return -v;
    }
  });

  return newArr.reduce((acc, v) => acc + v, 0);
}
solution(24, 27);
