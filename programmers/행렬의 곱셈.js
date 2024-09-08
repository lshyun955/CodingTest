/**
 * 풀이 1
 */

function solution(arr1, arr2) {
  const [row, col] = [arr1.length, arr2[0].length];
  let answer = new Array(row);
  for (let i = 0; i < row; i++) answer[i] = new Array(col);

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      answer[i][j] = arr1[i].reduce(
        (sum, arr1Value, rowIndex) => sum + arr1Value * arr2[rowIndex][j],
        0
      );
    }
  }
  return answer;
}


/**
 * 풀이 2
 */
function solution(arr1, arr2) {
  // [arr1.length x arr2[0].length] 행렬
  const answer = Array.from({length: arr1.length}, () => Array(arr2[0].length).fill(0));
  
  // arr1[0][0] * arr2[0][0] + arr1[0][1] * arr2[1][0] ...
  for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2[0].length; j++) {
          for (let k = 0; k < arr1[0].length; k++) {
              answer[i][j] += arr1[i][k] * arr2[k][j];
          }
      }
  }
  return answer;
}
