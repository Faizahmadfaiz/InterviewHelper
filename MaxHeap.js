class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Adds a value to the heap and maintains the max-heap property
    heappush(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    // Removes and returns the maximum value (the root) from the heap
    heappop() {
        if (this.heap.length === 0) return null;
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._heapifyDown();
        }
        return max;
    }

    // Converts an array into a max-heap in-place
    heapify(arr) {
        this.heap = arr;
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this._heapifyDown(i);
        }
    }

    // Returns the maximum element in the heap without removing it
    peek() {
        return this.heap[0];
    }

    // Returns the number of elements in the heap
    size() {
        return this.heap.length;
    }

    // Helper function to restore the heap property by shifting the last element up
    _heapifyUp(idx = this.heap.length - 1) {
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[idx] <= this.heap[parentIdx]) break;
            [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
            idx = parentIdx;
        }
    }

    // Helper function to restore the heap property by shifting the root element down
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
