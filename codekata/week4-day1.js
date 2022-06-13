const solution = (N) => {
  let num = N.toString(2);
  let zeroCnt = (num.match(new RegExp("1", "g")) || []).length;
  if (zeroCnt === 1) {
    return 0;
  } else {
    const temp = num.split(1).map((v) => {
      if (!v) {
        return 0;
      } else {
        return v.length;
      }
    });
    if (num[num.length - 1] !== "1") {
      temp.pop();
    }
    return Math.max(...temp);
  }
};

console.log(solution(20));
124816;
10100;
