class Heap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);
    while (
      currentIndex > 1 &&
      this.heap[parentIndex][1] > this.heap[currentIndex][1]
    ) {
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = currentIndex * 2;
    let rightIndex = currentIndex * 2 + 1;

    if (!this.heap[leftIndex]) return returnValue;
    if (!this.heap[rightIndex]) {
      if (this.heap[leftIndex][1] < this.heap[currentIndex][1]) {
        this.swap(leftIndex, currentIndex);
      }
      return returnValue;
    }

    while (
      this.heap[leftIndex][1] < this.heap[currentIndex][1] ||
      this.heap[rightIndex][1] < this.heap[currentIndex][1]
    ) {
      const minIdx =
        this.heap[leftIndex][1] > this.heap[rightIndex][1]
          ? rightIndex
          : leftIndex;
      this.swap(minIdx, currentIndex);

      currentIndex = minIdx;
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;

      if (leftIndex >= this.size()) break;
    }
    return returnValue;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  size() {
    return this.heap.length - 1;
  }
}
function solution(jobs) {
  const heapJobs = new Heap();
  const len = jobs.length;
  jobs.sort((a, b) => a[0] - b[0]);

  let answer = 0;
  let time = 0;
  let complete = 0;

  while (jobs.length || heapJobs.size()) {
    while (jobs.length) {
      if (jobs[0][0] === time) {
        heapJobs.push(jobs.shift());
      } else break;
    }
    if (heapJobs.size() && time >= complete) {
      const task = heapJobs.pop();
      complete = task[1] + time;
      answer += complete - task[0];
    }
    time++;
  }
  return Math.floor(answer / len);
}
// 먼저 힙에 3 삽입
// 1/ 2/ 3=1/ 2 /3 /4/ 5/ 6/ 7/ 8/ 9=1/ 2/ 3/ 4/ 5/ 6/
console.log(
  solution([
    [1, 9],
    [1, 4],
    [1, 5],
    [1, 7],
    [1, 3],
  ])
);
