function sumSquares(list) {
  // Sums squares of numbers in list that may contain more lists
  if (list.length === 0) return 0;

  if (typeof list[0] === "number") return list.shift() ** 2 + sumSquares(list);
  else return sumSquares(list.shift()) + sumSquares(list);
}

module.exports = sumSquares;
