function compare(a: number, b: number): number {
  if (isNaN(a) || isNaN(b)) {
    return NaN; //Explicitly return NaN if either input is NaN
  } else if (a === b) {
    return 0; 
  } else if (a > b) {
    return 1;
  } else {
    return -1; 
  } 
}

console.log(compare(1, NaN)); //Output: NaN
console.log(compare(NaN, NaN)); //Output: NaN
console.log(compare(NaN, 2)); //Output: NaN