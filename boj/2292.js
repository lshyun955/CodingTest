// 중앙 1 기준으로 6개의 방이 감싸고 있음
// 234567 6개 , 12개, 18개 24개
// 8~19, 20~37 ,38~61...
// 2 8 20 38 62 =>
// 0 1  3  6 10
// 1 => 1, 2 => 2 .... 7 => 2, 8 => 3, 20 => 4

function test(input) {
  let start = 1;
  let cnt = 1;
  // 6개 12개 24개  6*1,6*2,6*3...
  // 2~7, 8~19, 20~37, 38~61
  while (start < input) {
    console.log("start:", start);
    start += 6 * cnt;
    cnt++;
  }
}

test(20);
