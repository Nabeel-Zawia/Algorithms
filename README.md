# Algorithm Collection

A collection of classic algorithms implemented in JavaScript.  
Currently, **Bubble Sort** is implemented. Additional algorithms will be added in the future:

- Insertion Sort
- Selection Sort
- Merge Sort
- Quick Sort
- Heap Sort
- Breadth-First Search (BFS)
- Depth-First Search (DFS)
- A* Search
- Dijkstra's Algorithm

---

## Features

- Clear and readable JavaScript implementations.
- Step-by-step execution logic suitable for learning and experimentation.
- Expandable: easily add more algorithms.

---

## Current Implementation

### Bubble Sort

Bubble Sort repeatedly compares adjacent elements in an array and swaps them if they are in the wrong order. The largest elements "bubble up" to the end of the array after each pass.

**Steps:**

1. Compare the first two elements.  
2. Swap them if the first is greater than the second.  
3. Move one step to the right and repeat.  
4. Continue until the largest element reaches the end.  
5. Repeat for the remaining unsorted elements until the array is sorted.

**Example Usage:**

```javascript
let arr = [8, 3, 2, 7, 6, 5, 4, 1];
let sorted = bubbleSortLogic(arr);
console.log(sorted); // [1, 2, 3, 4, 5, 6, 7, 8]
```
