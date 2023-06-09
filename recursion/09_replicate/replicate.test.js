const replicate = require("./replicate");

test("replicate(3, 5) to return [5, 5, 5]", () => {
  expect(replicate(3, 5)).toEqual([5, 5, 5]);
});
test("replicate(1, 69) to return [69]", () => {
  expect(replicate(1, 69)).toEqual([69]);
});
test("replicate(-2, 6) to return []", () => {
  expect(replicate(-2, 6)).toEqual([]);
});
