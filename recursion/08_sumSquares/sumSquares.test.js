const sumSquares = require("./sumSquares");

test("list to have of squares 1 + 4 + 9 = 14", () => {
  const list = [1, 2, 3];
  expect(sumSquares(list)).toBe(14);
});

test("list to have of squares 1 + 4 + 9 = 14", () => {
  const list = [[1, 2], 3];
  expect(sumSquares(list)).toBe(14);
});

test("list to have of squares 1 = 1", () => {
  const list = [[[[[[[[[1]]]]]]]]];
  expect(sumSquares(list)).toBe(1);
});

test("list to have of squares 100 + 100 + 100 + 100 = 400", () => {
  const list = [10, [[10], 10], [10]];
  expect(sumSquares(list)).toBe(400);
});
