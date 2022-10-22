function solution(num) {
  let temp = num;
  let flag = true;
  let cnt = 0;

  while (flag) {
    if (cnt === 500) {
      return -1;
    }

    if (temp === 1) {
      flag = false;
    }
    if (temp % 2 === 0) {
      temp = temp / 2;
      cnt++;
    } else {
      temp = temp * 3 + 1;
      cnt++;
    }
  }

  return cnt === 0 ? 1 : cnt - 1;
}

solution(626331);
