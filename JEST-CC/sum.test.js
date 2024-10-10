const sum = require("./sum");

it("should add 1 + 3 to equal 4", async () => {
  const result = sum(1, 3);
  expect(result).toBe(4);
});
