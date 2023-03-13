function replicate(reps, num) {
  // Return an array containing repetitions of the number argument
  // For instance, replicate(3, 5) should return [5,5,5]
  // If the times argument is negative, return an empty array

  if (reps < 1) return [];
  return [num].concat(replicate(reps - 1, num));
}

module.exports = replicate;
