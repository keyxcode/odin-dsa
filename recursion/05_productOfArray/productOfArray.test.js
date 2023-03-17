const productOfArray = require("./productOfArray");

test("product of [1, 2, 3] to be 6", () => {
  expect(productOfArray([1, 2, 3])).toBe(6);
});
test("product of [1, 2, 3, 10] to be 60", () => {
  expect(productOfArray([1, 2, 3, 10])).toBe(60);
});
