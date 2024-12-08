const sum = require('./sum');  // Assuming the function is in a file named sum.js

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 115 + 20 to equal 30', () => {
  expect(sum(189, 20)).toBe(30);
});
