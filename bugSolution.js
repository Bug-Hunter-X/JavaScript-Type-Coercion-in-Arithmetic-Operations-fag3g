function foo(a, b) {
  // Explicit type checking and conversion
  a = Number(a);
  b = Number(b);

  // Check for NaN (Not a Number) to handle potential errors
  if (isNaN(a) || isNaN(b)) {
    return NaN; // or throw an error: throw new Error("Invalid input: Non-numeric values detected");
  }

  return a + b;
}
console.log(foo(1, "1")); // Output: 2
console.log(foo(1, 1)); // Output: 2
console.log(foo("abc",1)); // Output: NaN