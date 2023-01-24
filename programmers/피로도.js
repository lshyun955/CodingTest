// 소모 피로도, 최소 필요 피로도

function solution(k, dungeons) {
  let answer = -1;
  const dfs = (num, arr, prev) => {
    for (let i = 0; i < arr.length; i++) {
      const [req, use] = arr[i];
      if (!req || req > num) continue;
      const copy = [...arr];
      console.log(copy);
      copy[i] = [null, null];
      dfs(num - use, copy, prev + 1);
    }
    return (answer = Math.max(prev, answer));
  };
  dfs(k, dungeons, 0);
  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
