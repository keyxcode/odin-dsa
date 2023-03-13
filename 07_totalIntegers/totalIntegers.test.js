const totalIntegers = require("./totalIntegers");

const myArray = [[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]];

test("myArray to contain 7 total integers", () => {
  expect(totalIntegers(myArray)).toBe(7);
});
