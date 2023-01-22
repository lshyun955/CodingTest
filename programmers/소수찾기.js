const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const dfs = (set, arr, fixed) => {
  if (arr.length >= 1) {
    for (let i = 0; i < arr.length; i++) {
      let newFixed = fixed + arr[i];
      let copyArr = [...arr];
      copyArr.splice(i, 1);

      if (isPrime(+newFixed)) {
        set.add(+newFixed);
      }
      dfs(set, copyArr, newFixed);
    }
  }
};
function solution(numbers) {
  let answer = [];
  let newNumArr = numbers.split("");
  let set = new Set();

  dfs(set, newNumArr, "");
  return set.size;
}
// new Set(1 7 17 7 71 1)
console.log(solution("17"));
