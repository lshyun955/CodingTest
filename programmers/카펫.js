// brown은 가로*2 + 세로*2 - 4
// Ex) 8,1
function solution(brown, yellow) {
  let answer = [];
  let total = (brown + 4) / 2;
  let minWidth = total / 2;
  let maxWidth = total - 3;

  for (let i = maxWidth; i >= minWidth; i--) {
    let height = total - i;
    let innerCount = (i - 2) * (height - 2);
    if (yellow === innerCount) {
      answer = [i, height];
      break;
    }
  }
  return answer;
}

console.log(solution(8, 1));

/**
 * 24,24
 * x x x x x x x x
 * x o o o o o o x
 * x o o o o o o x
 * x o o o o o o x
 * x o o o o o o x
 * x x x x x x x x
 *
 */
// x x x x
// x o o x
// x x x x
