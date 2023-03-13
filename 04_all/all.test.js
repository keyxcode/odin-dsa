const all = require("./all");

test("[1, 2, 9] are not all less than 7", () => {
  expect(
    all([1, 2, 9], (num) => {
      return num < 7;
    })
  ).toBe(false);
});
