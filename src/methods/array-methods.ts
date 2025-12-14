/**
 * Array Methods - TypeScript implementations of common array operations
 */

/**
 * Custom implementation of Array.slice()
 * Returns a shallow copy of a portion of an array
 */
export function customSlice<T>(arr: T[], start?: number, end?: number): T[] {
  const len = arr.length;
  const startIdx = start === undefined ? 0 : start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
  const endIdx = end === undefined ? len : end < 0 ? Math.max(len + end, 0) : Math.min(end, len);
  
  const result: T[] = [];
  for (let i = startIdx; i < endIdx; i++) {
    result.push(arr[i]);
  }
  return result;
}

/**
 * Custom implementation of Array.map()
 * Creates a new array with the results of calling a function on every element
 */
export function customMap<T, U>(arr: T[], callback: (value: T, index: number, array: T[]) => U): U[] {
  const result: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

/**
 * Custom implementation of Array.reduce()
 * Executes a reducer function on each element, resulting in a single output value
 */
export function customReduce<T, U>(
  arr: T[],
  callback: (accumulator: U, currentValue: T, currentIndex: number, array: T[]) => U,
  initialValue: U
): U {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

/**
 * Custom implementation of Array.filter()
 * Creates a new array with all elements that pass the test
 */
export function customFilter<T>(
  arr: T[],
  callback: (value: T, index: number, array: T[]) => boolean
): T[] {
  const result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

/**
 * Custom implementation of Array.find()
 * Returns the first element that satisfies the provided testing function
 */
export function customFind<T>(
  arr: T[],
  callback: (value: T, index: number, array: T[]) => boolean
): T | undefined {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
}

/**
 * Custom implementation of Array.forEach()
 * Executes a provided function once for each array element
 */
export function customForEach<T>(
  arr: T[],
  callback: (value: T, index: number, array: T[]) => void
): void {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

/**
 * Custom implementation of Array.every()
 * Tests whether all elements pass the test implemented by the provided function
 */
export function customEvery<T>(
  arr: T[],
  callback: (value: T, index: number, array: T[]) => boolean
): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

/**
 * Custom implementation of Array.some()
 * Tests whether at least one element passes the test
 */
export function customSome<T>(
  arr: T[],
  callback: (value: T, index: number, array: T[]) => boolean
): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}
