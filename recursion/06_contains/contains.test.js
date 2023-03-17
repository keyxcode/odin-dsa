const contains = require("./contains");

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

test("nestedObject to contain 44", () => {
  expect(contains(nestedObject, 44)).toBe(true);
});
test("nestedObject to not contain 'foo'", () => {
  expect(contains(nestedObject, "foo")).toBe(false);
});
