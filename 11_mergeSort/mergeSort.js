function mergeSort() {
  //takes in an array and returns a sorted array, using a recursive merge sort methodology.
}

function mergeSortedHalves(firstArray, secondArray) {
  const sumLength = firstArray.length + secondArray.length;
  let mergedArray = [];

  let i = 0;
  let j = 0;
  for (let k = 0; k < sumLength; k++) {
    if (firstArray[i] <= secondArray[j]) {
      mergedArray.push(firstArray[i]);
      i++;
    } else {
      mergedArray.push(secondArray[j]);
      j++;
    }
  }

  return mergedArray;
}

console.log(mergeSortedHalves([1, 3], [2, 4]));
console.log(mergeSortedHalves([1, 3, 5, 9, 20], [2, 4, 5, 7, 100]));

module.exports = {
  mergeSort,
  mergeSortedHalves,
};
