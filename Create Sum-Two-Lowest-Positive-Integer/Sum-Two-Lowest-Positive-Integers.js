function sumTwoSmallestNumbers(numbers) {  
  const Min1 = Math.min(...numbers);
  numbers.splice(numbers.indexOf(Min1), 1);
  const Min2 = Math.min(...numbers);
  return Min1 + Min2;
