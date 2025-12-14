/**
 * Examples of Set Methods
 * 
 * This file demonstrates the usage of custom Set method implementations.
 */

import {
  customSet,
  setToArray,
  union,
  intersection,
  difference,
  isSubset,
  isSuperset,
  unique
} from '../methods/set-methods';

console.log('=== Set Methods Examples ===\n');

// Example data
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [4, 5, 6, 7, 8];
const duplicates = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5];
const fruits1 = ['apple', 'banana', 'cherry'];
const fruits2 = ['banana', 'cherry', 'date', 'elderberry'];

// customSet examples
console.log('1. customSet:');
console.log('Create set from:', numbers1);
console.log('Set:', customSet(numbers1));
console.log('Create set from duplicates:', duplicates);
console.log('Set (duplicates removed):', customSet(duplicates));
console.log();

// setToArray examples
console.log('2. setToArray:');
const set1 = customSet(numbers1);
console.log('Set:', set1);
console.log('Convert to array:', setToArray(set1));
console.log();

// union examples
console.log('3. union:');
const setA = customSet(numbers1);
const setB = customSet(numbers2);
console.log('Set A:', setToArray(setA));
console.log('Set B:', setToArray(setB));
console.log('Union (A ∪ B):', setToArray(union(setA, setB)));

const fruitsSetA = customSet(fruits1);
const fruitsSetB = customSet(fruits2);
console.log('Fruits A:', setToArray(fruitsSetA));
console.log('Fruits B:', setToArray(fruitsSetB));
console.log('Union:', setToArray(union(fruitsSetA, fruitsSetB)));
console.log();

// intersection examples
console.log('4. intersection:');
console.log('Set A:', setToArray(setA));
console.log('Set B:', setToArray(setB));
console.log('Intersection (A ∩ B):', setToArray(intersection(setA, setB)));
console.log('Fruits A:', setToArray(fruitsSetA));
console.log('Fruits B:', setToArray(fruitsSetB));
console.log('Intersection:', setToArray(intersection(fruitsSetA, fruitsSetB)));
console.log();

// difference examples
console.log('5. difference:');
console.log('Set A:', setToArray(setA));
console.log('Set B:', setToArray(setB));
console.log('Difference (A - B):', setToArray(difference(setA, setB)));
console.log('Difference (B - A):', setToArray(difference(setB, setA)));
console.log();

// isSubset examples
console.log('6. isSubset:');
const smallSet = customSet([1, 2]);
const largeSet = customSet([1, 2, 3, 4, 5]);
console.log('Small set:', setToArray(smallSet));
console.log('Large set:', setToArray(largeSet));
console.log('Is small ⊆ large?', isSubset(smallSet, largeSet));
console.log('Is large ⊆ small?', isSubset(largeSet, smallSet));
console.log();

// isSuperset examples
console.log('7. isSuperset:');
console.log('Small set:', setToArray(smallSet));
console.log('Large set:', setToArray(largeSet));
console.log('Is large ⊇ small?', isSuperset(largeSet, smallSet));
console.log('Is small ⊇ large?', isSuperset(smallSet, largeSet));
console.log();

// unique examples
console.log('8. unique:');
console.log('Original with duplicates:', duplicates);
console.log('Unique values:', unique(duplicates));
const names = ['Alice', 'Bob', 'Alice', 'Charlie', 'Bob', 'Alice'];
console.log('Names with duplicates:', names);
console.log('Unique names:', unique(names));
console.log();

// Practical example: Finding common and unique interests
console.log('9. Practical Example - Common and Unique Interests:');
const aliceInterests = ['reading', 'coding', 'gaming', 'music'];
const bobInterests = ['gaming', 'music', 'sports', 'cooking'];
const aliceSet = customSet(aliceInterests);
const bobSet = customSet(bobInterests);

console.log("Alice's interests:", aliceInterests);
console.log("Bob's interests:", bobInterests);
console.log('Common interests:', setToArray(intersection(aliceSet, bobSet)));
console.log("Only Alice's interests:", setToArray(difference(aliceSet, bobSet)));
console.log("Only Bob's interests:", setToArray(difference(bobSet, aliceSet)));
console.log('All interests:', setToArray(union(aliceSet, bobSet)));
console.log();
