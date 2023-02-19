function solution(maps) {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const curr = queue.shift();
    if (curr[0] === maps.length - 1 && curr[1] === maps[0].length - 1) {
      return curr[2];
    }
    for (let i = 0; i < 4; i++) {
      const yy = curr[0] + dy[i];
      const xx = curr[1] + dx[i];
      if (
        xx >= 0 &&
        yy >= 0 &&
        xx < maps[0].length &&
        yy < maps.length &&
        maps[yy][xx] === 1
      ) {
        maps[yy][xx] = 0;
        queue.push([yy, xx, curr[2] + 1]);
      }
    }
  }
  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
