const fibs = require("./fibs");

test("With an input of 7, expect to return 13", () => {
  expect(fibs(7)).toBe(13);
});
