function all(array, callback) {
  // Returns true if every value in the array returns true when passed in the callback
  const arrayCopy = array.slice();

  if (arrayCopy.length === 0) return true;

  if (callback(arrayCopy.shift())) {
    return all(arrayCopy, callback);
  } else return false;
}

module.exports = all;
