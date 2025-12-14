# TypeScript Exercise Repository

A comprehensive TypeScript learning repository featuring implementations of atomic methods and utility functions with practical examples.

## 📚 Introduction to TypeScript

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional static typing to JavaScript, which helps catch errors early during development and improves code quality and maintainability.

### Why TypeScript?

- **Type Safety**: Catch errors at compile-time rather than runtime
- **Better IDE Support**: Enhanced autocomplete, refactoring, and navigation
- **Self-Documenting Code**: Types serve as inline documentation
- **Modern JavaScript Features**: Use latest ECMAScript features with backward compatibility
- **Scalability**: Makes large codebases easier to maintain and refactor

### Key TypeScript Concepts

1. **Type Annotations**: Explicitly define types for variables, parameters, and return values
   ```typescript
   let age: number = 25;
   function greet(name: string): string {
     return `Hello, ${name}!`;
   }
   ```

2. **Interfaces**: Define the structure of objects
   ```typescript
   interface User {
     name: string;
     age: number;
   }
   ```

3. **Generics**: Create reusable components that work with multiple types
   ```typescript
   function identity<T>(arg: T): T {
     return arg;
   }
   ```

4. **Union Types**: Allow a value to be one of several types
   ```typescript
   let value: string | number;
   ```

## 🗂️ Repository Structure

```
leetcode_typescript/
├── src/
│   ├── methods/              # Atomic method implementations
│   │   ├── array-methods.ts  # Array operations (map, filter, reduce, etc.)
│   │   ├── utility-methods.ts # Utility functions (sum, count, sort, etc.)
│   │   └── set-methods.ts    # Set operations (union, intersection, etc.)
│   ├── examples/             # Practical usage examples
│   │   ├── array-methods.ts
│   │   ├── utility-methods.ts
│   │   └── set-methods.ts
│   └── index.ts              # Main export file
├── dist/                     # Compiled JavaScript (generated)
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jqu224/leetcode_typescipt.git
cd leetcode_typescipt

# Install dependencies
npm install
```

### Building the Project

```bash
# Compile TypeScript to JavaScript
npm run build

# Watch mode (auto-compile on file changes)
npm run watch
```

## 📖 Available Methods

### Array Methods (`src/methods/array-methods.ts`)

- **customSlice**: Extract a section of an array
- **customMap**: Transform each element in an array
- **customReduce**: Reduce an array to a single value
- **customFilter**: Filter elements based on a condition
- **customFind**: Find the first element matching a condition
- **customForEach**: Execute a function for each element
- **customEvery**: Test if all elements pass a condition
- **customSome**: Test if at least one element passes a condition

### Utility Methods (`src/methods/utility-methods.ts`)

- **sum**: Calculate the sum of numbers
- **count**: Count elements in an array
- **countIf**: Count elements matching a condition
- **customSort**: Sort an array using quicksort
- **average**: Calculate the average of numbers
- **max**: Find the maximum value
- **min**: Find the minimum value
- **reverse**: Reverse an array

### Set Methods (`src/methods/set-methods.ts`)

- **customSet**: Create a Set from an array
- **setToArray**: Convert a Set to an array
- **union**: Combine two sets
- **intersection**: Find common elements between sets
- **difference**: Find elements in one set but not another
- **isSubset**: Check if one set is a subset of another
- **isSuperset**: Check if one set is a superset of another
- **unique**: Remove duplicates from an array

## 💡 Running Examples

```bash
# Run array methods examples
npm run example:array

# Run utility methods examples
npm run example:utility

# Run set methods examples
npm run example:set
```

## 📝 Usage Examples

### Using Array Methods

```typescript
import { customMap, customFilter, customReduce } from './index';

const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = customMap(numbers, n => n * 2);
// [2, 4, 6, 8, 10]

// Get even numbers
const evens = customFilter(numbers, n => n % 2 === 0);
// [2, 4]

// Sum all numbers
const sum = customReduce(numbers, (acc, n) => acc + n, 0);
// 15
```

### Using Utility Methods

```typescript
import { sum, average, customSort } from './index';

const scores = [85, 92, 78, 95, 88];

console.log(sum(scores));        // 438
console.log(average(scores));    // 87.6
console.log(customSort(scores, (a, b) => a - b)); // [78, 85, 88, 92, 95]
```

### Using Set Methods

```typescript
import { union, intersection, unique } from './index';

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

console.log(union(setA, setB));        // Set { 1, 2, 3, 4, 5, 6 }
console.log(intersection(setA, setB)); // Set { 3, 4 }

const duplicates = [1, 2, 2, 3, 3, 3];
console.log(unique(duplicates));       // [1, 2, 3]
```

## 🎯 Learning Path

1. **Start with Array Methods**: Understand how fundamental array operations work
2. **Explore Utility Functions**: Learn common data processing patterns
3. **Master Set Operations**: Understand mathematical set operations
4. **Run Examples**: Execute the example files to see methods in action
5. **Experiment**: Modify examples and create your own use cases

## 🛠️ Development

### Project Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run watch` - Watch mode for development
- `npm run clean` - Remove compiled files
- `npm run example:array` - Run array methods examples
- `npm run example:utility` - Run utility methods examples
- `npm run example:set` - Run set methods examples

### TypeScript Configuration

The project uses strict TypeScript settings for maximum type safety. See `tsconfig.json` for details.

## 📚 Additional Resources

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

## 🤝 Contributing

Feel free to add more methods, improve implementations, or add more examples!

## 📄 License

ISC