function factorial(num) {
  // Product of all numbers from 1 to the number passed in
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

module.exports = factorial;
