function mergeSortedHalves(firstHalf, secondHalf) {
  let mergedArray = [];
  const mergedArrayLength = firstHalf.length + secondHalf.length;

  for (let i = 0; i < mergedArrayLength; i++) {
    if (typeof firstHalf[0] === "undefined") {
      return mergedArray.concat(secondHalf);
    } else if (typeof secondHalf[0] === "undefined") {
      return mergedArray.concat(firstHalf);
    } else if (firstHalf[0] < secondHalf[0]) {
      mergedArray.push(firstHalf.shift());
    } else {
      mergedArray.push(secondHalf.shift());
    }
  }

  return mergedArray;
}

function mergeSort(myArray) {
  //takes in an array and returns a sorted array, using a recursive merge sort methodology.
  const arrayLength = myArray.length;
  if (arrayLength === 1) {
    return myArray;
  }
  const midPoint = Math.round(arrayLength / 2);
  const firstHalf = myArray.slice(0, midPoint);
  const secondHalf = myArray.slice(midPoint, arrayLength);

  return mergeSortedHalves(mergeSort(firstHalf), mergeSort(secondHalf));
}

module.exports = {
  mergeSort,
  mergeSortedHalves,
};
