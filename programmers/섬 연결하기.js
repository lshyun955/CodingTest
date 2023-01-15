function find(parent, x) {
  if (parent[x] === x) {
    return x;
  }
  return (parent[x] = find(parent, parent[x]));
}

function union(parent, a, b) {
  let fa = find(parent, a);
  let fb = find(parent, b);
  if (fa < fb) {
    parent[fb] = fa;
  } else {
    parent[fa] = fb;
  }
}

function compare(parent, a, b) {
  let fa = find(parent, a);
  let fb = find(parent, b);

  return fa === fb;
}
function solution(n, costs) {
  const sortedCosts = costs.sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: n }, (_, i) => i);
  let answer = 0;
  for (const [a, b, cost] of sortedCosts) {
    if (!compare(parent, a, b)) {
      answer += cost;
      union(parent, a, b);
    }
  }
  return answer;
}
solution(4, [
  [0, 1, 1],
  [0, 2, 2],
  [1, 2, 5],
  [1, 3, 1],
  [2, 3, 8],
]);
