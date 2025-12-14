/**
 * Utility Methods - Common utility functions for data processing
 */

/**
 * Calculates the sum of an array of numbers
 */
export function sum(arr: number[]): number {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

/**
 * Counts the number of elements in an array
 */
export function count<T>(arr: T[]): number {
  return arr.length;
}

/**
 * Counts elements that match a predicate
 */
export function countIf<T>(arr: T[], predicate: (value: T) => boolean): number {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      counter++;
    }
  }
  return counter;
}

/**
 * Custom implementation of sort using quicksort algorithm
 */
export function customSort<T>(arr: T[], compareFn?: (a: T, b: T) => number): T[] {
  // Create a copy to avoid mutating the original array
  const result = [...arr];
  
  if (result.length <= 1) {
    return result;
  }

  const defaultCompare = (a: T, b: T): number => {
    const aStr = String(a);
    const bStr = String(b);
    if (aStr < bStr) return -1;
    if (aStr > bStr) return 1;
    return 0;
  };

  const compare = compareFn || defaultCompare;

  function quickSort(arr: T[], left: number, right: number): void {
    if (left >= right) return;

    const pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }

  function partition(arr: T[], left: number, right: number): number {
    const pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
      if (compare(arr[j], pivot) < 0) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
  }

  quickSort(result, 0, result.length - 1);
  return result;
}

/**
 * Calculates the average (mean) of an array of numbers
 */
export function average(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }
  return sum(arr) / arr.length;
}

/**
 * Finds the maximum value in an array of numbers
 */
export function max(arr: number[]): number | undefined {
  if (arr.length === 0) {
    return undefined;
  }
  
  let maxVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }
  return maxVal;
}

/**
 * Finds the minimum value in an array of numbers
 */
export function min(arr: number[]): number | undefined {
  if (arr.length === 0) {
    return undefined;
  }
  
  let minVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i];
    }
  }
  return minVal;
}

/**
 * Reverses an array without mutating the original
 */
export function reverse<T>(arr: T[]): T[] {
  const result: T[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
