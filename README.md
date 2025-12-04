# Algorithm Collection

A collection of classic algorithms implemented in JavaScript.  
Currently, **Bubble Sort** is implemented. Additional algorithms will be added in the future:

- Selection Sort
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

### Merge Sort

Merge Sort is a **divide-and-conquer** algorithm that splits an array into halves, sorts each half recursively, and then merges the sorted halves. It guarantees a sorted array with **O(n log n)** complexity.  

**Steps:**

1. If the array has 0 or 1 element, it is already sorted (base case).  
2. Split the array into two halves.  
3. Recursively apply merge sort to the left half.  
4. Recursively apply merge sort to the right half.  
5. Merge the two sorted halves into a single sorted array by repeatedly comparing the first elements of each half and taking the smaller one.  
6. Append any remaining elements after one half is exhausted.  

**Example Usage:**

```javascript
let array = [4, 3, 2, 1, 6, 7];
let result = mergeSort(array);
console.log(result); // [1, 2, 3, 4, 6, 7]
```

### Insertion Sort

Insertion Sort is a comparison-based algorithm that builds the final sorted array gradually. It takes one element at a time and inserts it into its correct position among the already sorted part on the left. It works well for small or nearly-sorted data with a time complexity of O(n²) in the average/worst case and O(n) in the best case (already sorted).

**Steps:**

1. Start with the second element (index 1) — assume the first element is “sorted”.
2. Take the current element and store it temporarily.
3. Compare it with elements to its left in the sorted portion.
4. While the left element is greater, shift that element one position to the right.
5. When you find the correct position (or reach the beginning), insert the current element in that gap.
6. Repeat for every element until the array is fully sorted.

**Example Usage:**

```javascript
let array = [4,7,1,8,3,2,9]
result = insertionSort(array)
console.log(result) // [1,2,3,4,7,8,9]
```


### Selection Sort

Selection Sort is a simple comparison-based algorithm that repeatedly selects the smallest element from the unsorted portion of the array and moves it to the front. It divides the array into two sections: a sorted portion on the left and an unsorted portion on the right. It works well for understanding sorting basics, with a time complexity of O(n²) in all cases.

**Steps:**

1. Start at index 0, assuming this is the minimum.
2. Scan the rest of the array to find the smallest element.
3. When you find the smallest value, swap it with the value at the current index.
4. Now the sorted portion grows by one element (the left side).
5. Move to the next index and repeat until the entire array is sorted.

**Example Usage:**

```javascript
let array = [5,3,1,2,6,4]
console.log(selectionSort(array)) // [1,2,3,4,5,6]
```
