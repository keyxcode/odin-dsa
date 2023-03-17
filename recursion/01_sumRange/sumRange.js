function sumRange(num) {
  // Sum of all numbers from 1 to the number passed in
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

module.exports = sumRange;
