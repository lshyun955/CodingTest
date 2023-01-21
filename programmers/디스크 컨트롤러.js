class Heap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);
    console.log(currentIndex, parentIndex);
    while (parentIndex !== 0 && this.heap[parentIndex][1] > value[1]) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop();
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return returnValue;
  }
  top() {
    return this.heap[1];
  }
  size() {
    return this.heap.length - 1;
  }
  empty() {
    return this.heap.length === 1;
  }
}
function solution(jobs) {
  const heapJobs = new Heap();
  let answer = 0;
  let idx = 0;
  let time = 0;
  jobs.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < jobs.length; i++) {
    heapJobs.push(jobs[i]);
  }
  // while (idx < jobs.length || !heapJobs.empty()) {
  //   if (idx < jobs.length && jobs[idx][0] <= time) {
  //     heapJobs.push(jobs[idx++]);
  //     continue;
  //   }
  //   if (!heapJobs.empty()) {
  //     time += heapJobs.top()[1];
  //     answer += time - heapJobs.top()[0];
  //     heapJobs.pop();
  //   } else {
  //     time = jobs[idx][0];
  //   }
  // }
  // return Math.floor(answer / jobs.length);
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
