# Type-Safe Array Combination in TypeScript

This repository demonstrates a common but subtle error in TypeScript related to array combination. The `combine` function aims to concatenate two number arrays.  However, without strict type checking or type assertions, TypeScript's type inference might not catch potential issues if the input arrays contain incompatible types at runtime, resulting in a less type-safe operation than expected.

The `bug.ts` file shows the original code with the potential issue, while `bugSolution.ts` presents a solution to enforce type safety.

## How to reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Compile and run the code using a TypeScript compiler (tsc) and Node.js (node).