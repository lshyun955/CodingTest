class HeapOfMax {
  private data: number[] = [];

  size(): number { return this.data.length; }
  isEmpty(): boolean { return this.data.length === 0; }

  private swap(i: number, j: number) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }

  private parent(i: number) { return Math.floor((i - 1) / 2); }
  private left(i: number) { return i * 2 + 1; }
  private right(i: number) { return i * 2 + 2; }

  insert(val: number) {
    this.data.push(val);
    this.siftUp(this.data.length - 1);
  }

  private siftUp(idx: number) {
    while (idx > 0) {
      const p = this.parent(idx);
      if (this.data[p] >= this.data[idx]) break;
      this.swap(p, idx);
      idx = p;
    }
  }

  pop(): number | undefined {
    if (this.data.length === 0) return undefined;
    const top = this.data[0];
    const last = this.data.pop()!;
    if (this.data.length > 0) {
      this.data[0] = last;
      this.siftDown(0);
    }
    return top;
  }

  private siftDown(idx: number) {
    while (true) {
      const l = this.left(idx);
      const r = this.right(idx);
      let largest = idx;
      if (l < this.data.length && this.data[l] > this.data[largest]) largest = l;
      if (r < this.data.length && this.data[r] > this.data[largest]) largest = r;
      if (largest === idx) break;
      this.swap(idx, largest);
      idx = largest;
    }
  }
}

function lastStoneWeight(stones: number[]): number {
    const maxHeap = new HeapOfMax();

    for (const stone of stones) {
        maxHeap.insert(stone);
    }

    while (maxHeap.size() > 1) {
        const first = maxHeap.pop();
        const second = maxHeap.pop();

        if (first !== second) {
            maxHeap.insert(first - second);
        }
    }

    return maxHeap.isEmpty() ? 0 : maxHeap.pop();
};
// 8 7 4 2 1 1
// 4 2 1 1 1
// 2 1 1 1
// 1 1 1
// 1