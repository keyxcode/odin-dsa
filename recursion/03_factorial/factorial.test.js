const factorial = require("./factorial");

test("factorial of 5 to be 120", () => {
  expect(factorial(5)).toBe(120);
});
