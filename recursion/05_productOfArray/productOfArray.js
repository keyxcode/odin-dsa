function productOfArray(arr) {
  const arrCopy = arr.slice();

  if (arrCopy.length === 0) return 1;
  if (arrCopy.length === 1) return arrCopy[0];

  return arrCopy.shift() * productOfArray(arrCopy);
}

module.exports = productOfArray;
