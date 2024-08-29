class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._heapifyDown();
        }
        return max;
    }

    remove(val) {
        const index = this.heap.indexOf(val);
        if (index !== -1) {
            const end = this.heap.pop();
            if (index !== this.heap.length) {
                this.heap[index] = end;
                if (end > val) {
                    this._heapifyUp(index);
                } else {
                    this._heapifyDown(index);
                }
            }
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp(idx = this.heap.length - 1) {
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[idx] <= this.heap[parentIdx]) break;
            [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
            idx = parentIdx;
        }
    }

    _heapifyDown(idx = 0) {
        const length = this.heap.length;
        const element = this.heap[idx];
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let swap = null;

            if (leftIdx < length && this.heap[leftIdx] > element) {
                swap = leftIdx;
            }

            if (rightIdx < length && this.heap[rightIdx] > (swap === null ? element : this.heap[leftIdx])) {
                swap = rightIdx;
            }

            if (swap === null) break;
            [this.heap[idx], this.heap[swap]] = [this.heap[swap], this.heap[idx]];
            idx = swap;
        }
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._heapifyDown();
        }
        return min;
    }

    remove(val) {
        const index = this.heap.indexOf(val);
        if (index !== -1) {
            const end = this.heap.pop();
            if (index !== this.heap.length) {
                this.heap[index] = end;
                if (end < val) {
                    this._heapifyUp(index);
                } else {
                    this._heapifyDown(index);
                }
            }
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp(idx = this.heap.length - 1) {
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[idx] >= this.heap[parentIdx]) break;
            [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
            idx = parentIdx;
        }
    }

    _heapifyDown(idx = 0) {
        const length = this.heap.length;
        const element = this.heap[idx];
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let swap = null;

            if (leftIdx < length && this.heap[leftIdx] < element) {
                swap = leftIdx;
            }

            if (rightIdx < length && this.heap[rightIdx] < (swap === null ? element : this.heap[leftIdx])) {
                swap = rightIdx;
            }

            if (swap === null) break;
            [this.heap[idx], this.heap[swap]] = [this.heap[swap], this.heap[idx]];
            idx = swap;
        }
    }
}
