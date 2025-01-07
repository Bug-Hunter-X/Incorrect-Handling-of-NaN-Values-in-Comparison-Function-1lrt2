# Incorrect Handling of NaN Values in Comparison Function

This TypeScript code demonstrates a common error when comparing values: incorrect handling of NaN (Not a Number).

The `compare` function attempts to compare two numbers and return -1, 0, or 1 based on their relative values. However, it fails to correctly handle `NaN`.  NaN is unordered and is not equal to itself, resulting in unexpected behavior. 

The solution addresses this by explicitly checking for NaN using `isNaN()` before proceeding with the standard comparison.