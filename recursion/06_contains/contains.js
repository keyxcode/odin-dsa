function contains(object, value) {
  // Searches for a value in a nested object. Returns true if found
  for (const key in object) {
    if (typeof object[key] === "object") {
      return contains(object[key], value);
    }
    if (object[key] === value) return true;
  }
  return false;
}

module.exports = contains;
