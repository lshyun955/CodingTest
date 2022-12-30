function solution(matrix, r) {
  let tempArr = Array.from(Array(matrix.length), () =>
    new Array(matrix[0].length).fill([])
  );

  tempArr = tempArr.map((arr, i) =>
    arr.map((v, idx) => {
      v = matrix[matrix.length - 1 - idx][i];
      return v;
    })
  );
  if (r % 4 === 0) return matrix;
  if (r % 4 === 1) return tempArr;

  if (r % 4 === 2) {
    for (let i = 0; i < tempArr.length; i++) {
      matrix[j].reverse();
    }
    matrix.reverse();
    return matrix;
  }
  for (let i = 0; i < tempArr.length; i++) {
    tempArr[i].reverse();
  }
  tempArr.reverse();

  return tempArr;
}

console.log(
  solution(
    [
      [4, 1, 2],
      [7, 3, 4],
      [3, 5, 6],
    ],
    3
  )
);
