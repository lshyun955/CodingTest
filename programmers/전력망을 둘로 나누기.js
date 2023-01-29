// 1. 입력 받은 wires의 길이 만큼 반복한다.

// 2. 입력 받은 wires의 가장 첫 요소를 배열에서 추출하고 (전선 끊기) 송전탑 갯수를 체크한다.

// 3. 체크 방식은 DFS로 해당 그룹들과 연결된 송전탑들이 더 이상 없을때 까지 탐색하면서 송전탑 그룹을 만든다.

// 4. 입력 받은 n에서 구해진 송전탑 그룹을 제하면 다른 송전탑 그룹이 나온다. 이둘의 차이를 구해서 반환한다.

// 5. 해당 경우 탐색이 끝나면 다시 기존의 추출했던 요소를 wires에 삽입하고 2번부터 반복한다.

// 6. 구해진 result들 가운데 가장 작은 수를 반환한다.
function solution(n, wires) {
  // 하나하나 다 연결 끊으면서 노드 차 최소값 구하기
  // 그럼 노드를 어떻게 끊을까?
  let answer = Infinity;
  const wireObj = {};

  const getLength = (obj, prev, visited) => {
    const nexts = obj[prev];
    for (const next of nexts) {
      if (visited.includes(next)) continue;
      visited.push(next);
      getLength(obj, next, visited);
    }
    return visited.length;
  };

  // 전력망을 나누는 함수
  const divideWire = (id1, id2) => {
    const dividedObj = Object.assign({}, wireObj);
    dividedObj[id1] = dividedObj[id1].filter((v) => v !== id2);
    dividedObj[id2] = dividedObj[id2].filter((v) => v !== id1);
    const len = getLength(dividedObj, id1, [id1]);
    return len;
  };

  // 그래프 초기화
  for (const [start, end] of wires) {
    wireObj[start] = (wireObj[start] || []).concat([end]);
    wireObj[end] = (wireObj[end] || []).concat([start]);
  }

  // 결과값 갱신
  for (const [id1, id2] of wires) {
    const len1 = divideWire(id1, id2);
    const len2 = n - len1;
    answer = Math.min(answer, Math.abs(len1 - len2));
  }
  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
