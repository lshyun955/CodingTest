class HeapOfMin {
    private heap: number[] = [];
    private heapType: "min" | "max";
    constructor(type: string) {
        this.heap = [];
        this.heapType = type === 'min' ? 'min' : 'max';
    }

    compare(i, j): boolean {
        if (this.heapType === 'min') {
            return this.heap[i] < this.heap[j];
        } else {
            return this.heap[i] > this.heap[j];
        }
    }

    insert(key) {
        this.heap.push(key);
        this.heapifyUp(this.heap.length - 1);
    }

    swap(i, j): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    size(): number {
        return this.heap.length;
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    pop(): number | undefined {
        if (!this.heap.length) return undefined;
        if (this.heap.length === 1) return this.heap.pop();
        
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();

        this.heapifyDown(0);

        return root;
    }

    getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    getRightChildIndex(index: number): number {
        return index * 2 + 2;
    }

    getLeftChildIndex(index: number): number {
        return index * 2 + 1;
    }

    heapifyUp(key: number) {
        let currentIndex = key;
        let parentIndex = this.getParentIndex(currentIndex);

        while(currentIndex > 0 && this.compare(currentIndex, parentIndex)) {
            this.swap(parentIndex, currentIndex);

            currentIndex = parentIndex;
            parentIndex = this.getParentIndex(currentIndex);
        }
    }

    heapifyDown(key: number) {
        let current = key;
        const size = this.heap.length;

        while (true) {
            const left = this.getLeftChildIndex(current);
            const right = this.getRightChildIndex(current);
            let candidate = current;

            if (left < size && this.compare(left, candidate)) candidate = left;
            if (right < size && this.compare(right, candidate)) candidate = right;

            if (candidate === current) break;

            this.swap(current, candidate);
            current = candidate;
        }
    }

    peek(): number {
        return this.heap[0];
    }
 }

class KthLargest {
    private k: number;
    private minHeap: HeapOfMin;
    constructor(k: number, nums: number[]) {
        this.minHeap = new HeapOfMin("min");
        this.k = k
        for (const num of nums) {
            this.minHeap.insert(num);
            if (this.minHeap.size() > this.k) {
                this.minHeap.pop();
            }
        }
    }
// 4, 5, 8, 2, 3, 5, 10, 9, 4
// 2, 3, 4, 4, 5, 5, 8, 9, 10
    add(val: number): number {
        this.minHeap.insert(val);
        
        if (this.minHeap.size() > this.k) {
            this.minHeap.pop();
        }

        return this.minHeap.peek();
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */