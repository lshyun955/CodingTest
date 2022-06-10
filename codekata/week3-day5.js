const factorial = (n) => {
  if (n === 0) return 1;
  console.log(n);
  return n * factorial(n - 1);
};

console.log(factorial(10));
