const mergeSortModule = require("./mergeSort");
const mergeSort = mergeSortModule.mergeSort;
const mergeSortedHalves = mergeSortModule.mergeSortedHalves;

test("to merge [1, 3] and [2, 4] to [1, 2, 3, 4]", () => {
  expect(mergeSortedHalves([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
});
test("to merge [1, 3, 5, 7] and [2, 2, 3, 9] to [1, 2, 2, 3, 3, 5, 7, 9]", () => {
  expect(mergeSortedHalves([1, 3, 5, 7], [2, 2, 3, 9])).toEqual([
    1, 2, 2, 3, 3, 5, 7, 9,
  ]);
});
test("to merge [5] and [1, 3] to [1, 3, 5]", () => {
  expect(mergeSortedHalves([5], [1, 3])).toEqual([1, 3, 5]);
});

test("to sort [367, 429, 903, 938, 818, 221, 327, 306] to [221, 306, 327, 367, 429, 818, 903, 938]", () => {
  expect(mergeSort([367, 429, 903, 938, 818, 221, 327, 306])).toEqual([
    221, 306, 327, 367, 429, 818, 903, 938,
  ]);
});
test("to sort [743, 336, 879, 348, 728] to [336, 348, 728, 743, 879]", () => {
  expect(mergeSort([743, 336, 879, 348, 728])).toEqual([
    336, 348, 728, 743, 879,
  ]);
});
test("to sort [225, 625, 553, 127, 815, 779] to [127, 225, 553, 625, 779, 815]", () => {
  expect(mergeSort([225, 625, 553, 127, 815, 779])).toEqual([
    127, 225, 553, 625, 779, 815,
  ]);
});
