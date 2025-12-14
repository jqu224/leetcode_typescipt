/**
 * Combined Example - Real-world Data Processing
 * 
 * This example demonstrates how to combine multiple methods to solve
 * practical problems.
 */

import {
  customMap,
  customFilter,
  customReduce,
  sum,
  average,
  customSort,
  unique,
  customSet,
  intersection,
  union
} from '../index';

console.log('=== Real-World Data Processing Examples ===\n');

// Example 1: Student Grade Processing
console.log('1. Student Grade Processing:');
interface Student {
  name: string;
  scores: number[];
}

const students: Student[] = [
  { name: 'Alice', scores: [85, 92, 88, 95] },
  { name: 'Bob', scores: [78, 82, 85, 80] },
  { name: 'Charlie', scores: [92, 95, 98, 94] },
  { name: 'Diana', scores: [88, 85, 90, 87] }
];

// Calculate average for each student
const studentAverages = customMap(students, student => ({
  name: student.name,
  average: average(student.scores)
}));

console.log('Student Averages:');
studentAverages.forEach(s => {
  console.log(`  ${s.name}: ${s.average.toFixed(2)}`);
});

// Find students with average >= 90
const topStudents = customFilter(studentAverages, s => s.average >= 90);
console.log('\nTop Students (avg >= 90):');
topStudents.forEach(s => console.log(`  ${s.name}: ${s.average.toFixed(2)}`));

// Calculate overall class average
const classAverage = average(customMap(studentAverages, s => s.average));
console.log(`\nClass Average: ${classAverage.toFixed(2)}`);

console.log();

// Example 2: E-commerce Sales Analysis
console.log('2. E-commerce Sales Analysis:');
interface Sale {
  product: string;
  price: number;
  quantity: number;
  category: string;
}

const sales: Sale[] = [
  { product: 'Laptop', price: 1200, quantity: 3, category: 'Electronics' },
  { product: 'Mouse', price: 25, quantity: 10, category: 'Electronics' },
  { product: 'Desk', price: 300, quantity: 2, category: 'Furniture' },
  { product: 'Chair', price: 150, quantity: 4, category: 'Furniture' },
  { product: 'Monitor', price: 400, quantity: 5, category: 'Electronics' }
];

// Calculate total revenue per sale
const revenues = customMap(sales, sale => sale.price * sale.quantity);
console.log('Individual Revenues:', revenues);

// Total revenue
const totalRevenue = sum(revenues);
console.log(`Total Revenue: $${totalRevenue}`);

// Average sale value
const avgSaleValue = average(revenues);
console.log(`Average Sale Value: $${avgSaleValue.toFixed(2)}`);

// Filter high-value sales (> $500)
const highValueSales = customFilter(sales, sale => sale.price * sale.quantity > 500);
console.log('\nHigh-Value Sales (> $500):');
highValueSales.forEach(sale => {
  console.log(`  ${sale.product}: $${sale.price * sale.quantity}`);
});

// Revenue by category
const electronicsRevenue = customReduce(
  customFilter(sales, s => s.category === 'Electronics'),
  (acc, sale) => acc + (sale.price * sale.quantity),
  0
);
const furnitureRevenue = customReduce(
  customFilter(sales, s => s.category === 'Furniture'),
  (acc, sale) => acc + (sale.price * sale.quantity),
  0
);

console.log(`\nElectronics Revenue: $${electronicsRevenue}`);
console.log(`Furniture Revenue: $${furnitureRevenue}`);

console.log();

// Example 3: Survey Response Analysis
console.log('3. Survey Response Analysis:');
const surveyResponses = [
  ['pizza', 'burger', 'sushi'],
  ['pizza', 'tacos', 'burger'],
  ['sushi', 'pizza', 'pasta'],
  ['burger', 'pizza', 'tacos']
];

// Flatten all responses
const allResponses = customReduce(
  surveyResponses,
  (acc, responses) => [...acc, ...responses],
  [] as string[]
);

// Get unique food items
const uniqueFoods = unique(allResponses);
console.log('All mentioned foods:', uniqueFoods);

// Count occurrences of each food
const foodCounts = customMap(uniqueFoods, food => ({
  food,
  count: customFilter(allResponses, item => item === food).length
}));

// Sort by popularity
const sortedFoods = customSort(foodCounts, (a, b) => b.count - a.count);
console.log('\nFood Popularity (sorted):');
sortedFoods.forEach((item, index) => {
  console.log(`  ${index + 1}. ${item.food}: ${item.count} votes`);
});

console.log();

// Example 4: Set Operations - Common Skills Between Teams
console.log('4. Common Skills Between Teams:');
const teamASkills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python'];
const teamBSkills = ['TypeScript', 'Python', 'Java', 'Spring', 'React'];
const teamCSkills = ['React', 'Vue', 'TypeScript', 'GraphQL', 'Node.js'];

const setA = customSet(teamASkills);
const setB = customSet(teamBSkills);
const setC = customSet(teamCSkills);

console.log('Team A Skills:', teamASkills);
console.log('Team B Skills:', teamBSkills);
console.log('Team C Skills:', teamCSkills);

// Skills common to all teams
const commonToAll = intersection(intersection(setA, setB), setC);
console.log('\nSkills common to all teams:', Array.from(commonToAll));

// Skills in Team A or Team B
const aOrB = union(setA, setB);
console.log('Skills in Team A or Team B:', Array.from(aOrB));

// All unique skills across all teams
const allSkills = union(union(setA, setB), setC);
console.log('All unique skills:', Array.from(allSkills));
console.log(`Total unique skills: ${allSkills.size}`);

console.log();

// Example 5: Data Transformation Pipeline
console.log('5. Data Transformation Pipeline:');
const rawData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = customMap(
  customFilter(
    customMap(rawData, n => n * 2),      // Double each number
    n => n > 10                           // Filter > 10
  ),
  n => n - 5                              // Subtract 5
);

console.log('Original data:', rawData);
console.log('After pipeline (double → filter > 10 → subtract 5):', result);
console.log('Sum of result:', sum(result));

console.log('\n=== All Examples Completed Successfully ===');
