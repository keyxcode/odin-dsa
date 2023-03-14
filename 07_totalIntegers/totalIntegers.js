function totalIntegers(list) {
  // Given a multi-dimensional array, return the total number of integers stored inside this array
  if (list.length === 0) return 0;

  const firstElement = list.shift();
  if (Number.isInteger(firstElement)) {
    return 1 + totalIntegers(list);
  } else if (!Array.isArray(firstElement)) {
    // here, firstElement could be a string or a float for example
    return totalIntegers(list);
  } else return totalIntegers(firstElement) + totalIntegers(list);
}

module.exports = totalIntegers;
