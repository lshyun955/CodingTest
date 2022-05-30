function romanToNum(s) {
  // 여기에 코드를 작성해주세요.
  const symbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  // let temp = [];

  const result = s.split("").map((v) => symbol[v]);
  let total = result[0];
  for (let i = 1; i < result.length; i++) {
    if (result[i] <= result[i - 1]) {
      total += result[i];
    } else {
      total = total - result[i - 1] + (result[i] - result[i - 1]);
    }
  }
  console.log(total);
}
romanToNum("XXVII");
// 10 10 5 1 1
