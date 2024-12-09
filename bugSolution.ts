function combine(arr1: number[], arr2: number[]): number[] {
  // Check if both arrays are of the same type before combining.  This will throw an error before combining
  if (!arr1.every(Number.isFinite) || !arr2.every(Number.isFinite)) {
    throw new Error('Arrays must contain only numbers');
  }
  return [...arr1, ...arr2];
}

const result = combine([1, 2, 3], [4, 5, 6]);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]

// Example of error handling
try {
  const result2 = combine([1, 2, 3], [4, 5, 'six' as any]);
  console.log(result2);
} catch (error) {
  console.error(error);
}