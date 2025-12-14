/**
 * Examples of Array Methods
 * 
 * This file demonstrates the usage of custom array method implementations.
 */

import {
  customSlice,
  customMap,
  customReduce,
  customFilter,
  customFind,
  customForEach,
  customEvery,
  customSome
} from '../methods/array-methods';

console.log('=== Array Methods Examples ===\n');

// Example data
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// customSlice examples
console.log('1. customSlice:');
console.log('Original array:', numbers);
console.log('Slice(2, 5):', customSlice(numbers, 2, 5)); // [3, 4, 5]
console.log('Slice(5):', customSlice(numbers, 5)); // [6, 7, 8, 9, 10]
console.log('Slice(-3):', customSlice(numbers, -3)); // [8, 9, 10]
console.log();

// customMap examples
console.log('2. customMap:');
console.log('Original numbers:', numbers);
console.log('Double each number:', customMap(numbers, n => n * 2));
console.log('Square each number:', customMap(numbers, n => n * n));
console.log('Uppercase fruits:', customMap(fruits, f => f.toUpperCase()));
console.log();

// customReduce examples
console.log('3. customReduce:');
console.log('Original numbers:', numbers);
console.log('Sum of numbers:', customReduce(numbers, (acc, n) => acc + n, 0));
console.log('Product of numbers:', customReduce(numbers, (acc, n) => acc * n, 1));
console.log('Concatenate strings:', customReduce(fruits, (acc, f) => acc + f + ' ', ''));
console.log();

// customFilter examples
console.log('4. customFilter:');
console.log('Original numbers:', numbers);
console.log('Even numbers:', customFilter(numbers, n => n % 2 === 0));
console.log('Numbers > 5:', customFilter(numbers, n => n > 5));
console.log('Fruits with "e":', customFilter(fruits, f => f.includes('e')));
console.log();

// customFind examples
console.log('5. customFind:');
console.log('Original numbers:', numbers);
console.log('First number > 5:', customFind(numbers, n => n > 5));
console.log('First even number:', customFind(numbers, n => n % 2 === 0));
console.log('First fruit starting with "c":', customFind(fruits, f => f.startsWith('c')));
console.log();

// customForEach examples
console.log('6. customForEach:');
console.log('Log each number with index:');
customForEach(numbers.slice(0, 5), (n, i) => {
  console.log(`  Index ${i}: ${n}`);
});
console.log();

// customEvery examples
console.log('7. customEvery:');
console.log('Original numbers:', numbers);
console.log('All numbers > 0:', customEvery(numbers, n => n > 0));
console.log('All numbers > 5:', customEvery(numbers, n => n > 5));
console.log('All fruits are strings:', customEvery(fruits, f => typeof f === 'string'));
console.log();

// customSome examples
console.log('8. customSome:');
console.log('Original numbers:', numbers);
console.log('Some numbers > 5:', customSome(numbers, n => n > 5));
console.log('Some numbers > 100:', customSome(numbers, n => n > 100));
console.log('Some fruits start with "b":', customSome(fruits, f => f.startsWith('b')));
console.log();
