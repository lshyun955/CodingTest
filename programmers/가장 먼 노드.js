// 핵심 키워드는 "노드", "간선", "최단경로" => 그래프 문제
// 최단 경로가 제일 큰 경우의 집합을 구하는 문제
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;

    return value;
  }

  isEmpty() {
    return this.rear === this.front;
  }
}

function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);

  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  //BFS 로직
  const queue = new Queue();
  queue.enqueue(1);
  while (!queue.isEmpty()) {
    const src = queue.dequeue(); // shift는 O(n)이지만 요소가 적을 경우에는 자바스크립트 엔진에서 최적화를 해줌.
    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.enqueue(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }
  const max = Math.max(...distance);
  return distance.filter((item) => item === max).length;
}

solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);
