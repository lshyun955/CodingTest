function solution(s) {
  let answer = s;
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  for (const num in obj) {
    const regex = new RegExp(num, "g");
    answer = answer.replace(regex, obj[num]);
  }
  return Number(answer);
}

solution("oneone4seveneight");
