/**
 * Examples of Utility Methods
 * 
 * This file demonstrates the usage of custom utility method implementations.
 */

import {
  sum,
  count,
  countIf,
  customSort,
  average,
  max,
  min,
  reverse
} from '../methods/utility-methods';

console.log('=== Utility Methods Examples ===\n');

// Example data
const numbers = [5, 2, 8, 1, 9, 3, 7, 4, 6];
const scores = [85, 92, 78, 95, 88, 73, 91];
const words = ['banana', 'apple', 'cherry', 'date'];

// sum examples
console.log('1. sum:');
console.log('Numbers:', numbers);
console.log('Sum:', sum(numbers));
console.log('Sum of scores:', sum(scores));
console.log();

// count examples
console.log('2. count:');
console.log('Count of numbers:', count(numbers));
console.log('Count of scores:', count(scores));
console.log('Count of words:', count(words));
console.log();

// countIf examples
console.log('3. countIf:');
console.log('Numbers:', numbers);
console.log('Count of even numbers:', countIf(numbers, n => n % 2 === 0));
console.log('Count of numbers > 5:', countIf(numbers, n => n > 5));
console.log('Count of scores >= 90:', countIf(scores, s => s >= 90));
console.log();

// customSort examples
console.log('4. customSort:');
console.log('Original numbers:', numbers);
console.log('Sorted (ascending):', customSort(numbers, (a, b) => a - b));
console.log('Sorted (descending):', customSort(numbers, (a, b) => b - a));
console.log('Words sorted alphabetically:', customSort(words));
console.log();

// average examples
console.log('5. average:');
console.log('Numbers:', numbers);
console.log('Average:', average(numbers));
console.log('Average score:', average(scores));
console.log();

// max examples
console.log('6. max:');
console.log('Numbers:', numbers);
console.log('Maximum value:', max(numbers));
console.log('Highest score:', max(scores));
console.log();

// min examples
console.log('7. min:');
console.log('Numbers:', numbers);
console.log('Minimum value:', min(numbers));
console.log('Lowest score:', min(scores));
console.log();

// reverse examples
console.log('8. reverse:');
console.log('Original numbers:', numbers);
console.log('Reversed:', reverse(numbers));
console.log('Original still unchanged:', numbers);
console.log('Words reversed:', reverse(words));
console.log();

// Combined example: Calculate statistics
console.log('9. Combined Statistics Example:');
console.log('Scores:', scores);
console.log('Statistics:');
console.log('  Count:', count(scores));
console.log('  Sum:', sum(scores));
console.log('  Average:', average(scores).toFixed(2));
console.log('  Min:', min(scores));
console.log('  Max:', max(scores));
console.log('  Passing grades (>= 80):', countIf(scores, s => s >= 80));
console.log('  Sorted:', customSort(scores, (a, b) => a - b));
console.log();
