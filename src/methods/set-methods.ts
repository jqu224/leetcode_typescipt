/**
 * Set Methods - Custom implementations for Set operations
 */

/**
 * Creates a Set from an array (removes duplicates)
 */
export function customSet<T>(arr: T[]): Set<T> {
  const set = new Set<T>();
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
  }
  return set;
}

/**
 * Converts a Set to an array
 */
export function setToArray<T>(set: Set<T>): T[] {
  const result: T[] = [];
  set.forEach(value => result.push(value));
  return result;
}

/**
 * Gets the union of two sets (all unique elements from both sets)
 */
export function union<T>(set1: Set<T>, set2: Set<T>): Set<T> {
  const result = new Set<T>(set1);
  set2.forEach(value => result.add(value));
  return result;
}

/**
 * Gets the intersection of two sets (elements that exist in both sets)
 */
export function intersection<T>(set1: Set<T>, set2: Set<T>): Set<T> {
  const result = new Set<T>();
  set1.forEach(value => {
    if (set2.has(value)) {
      result.add(value);
    }
  });
  return result;
}

/**
 * Gets the difference of two sets (elements in set1 but not in set2)
 */
export function difference<T>(set1: Set<T>, set2: Set<T>): Set<T> {
  const result = new Set<T>();
  set1.forEach(value => {
    if (!set2.has(value)) {
      result.add(value);
    }
  });
  return result;
}

/**
 * Checks if set1 is a subset of set2 (all elements of set1 are in set2)
 */
export function isSubset<T>(set1: Set<T>, set2: Set<T>): boolean {
  for (const value of set1) {
    if (!set2.has(value)) {
      return false;
    }
  }
  return true;
}

/**
 * Checks if set1 is a superset of set2 (all elements of set2 are in set1)
 */
export function isSuperset<T>(set1: Set<T>, set2: Set<T>): boolean {
  return isSubset(set2, set1);
}

/**
 * Removes duplicates from an array
 */
export function unique<T>(arr: T[]): T[] {
  return setToArray(customSet(arr));
}
