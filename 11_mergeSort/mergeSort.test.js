const mergeSortModule = require("./mergeSort");
const mergeSort = mergeSortModule.mergeSort;
const mergeSortedHalves = mergeSortModule.mergeSortedHalves;

test("to merge [1, 3] and [2, 4] to [1, 2, 3, 4]", () => {
  expect(mergeSortedHalves([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
});
