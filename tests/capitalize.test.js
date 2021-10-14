const capitalize = require('../functions/capitalize');

test('capitalize first letter of simple string', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

test('checks if first letter is already capitalised', () => {
  expect(capitalize('Hello world')).toBe('Hello world');
});

test('capitalize first letter after number or symbol', () => {
  expect(capitalize('12@hello world')).toBe('12@Hello world');
});

test('rejects non string', () => {
  expect(() => capitalize(423)).toThrow('Not a string');
});