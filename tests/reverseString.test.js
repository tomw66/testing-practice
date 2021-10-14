const reverseString = require('../functions/reverseString');

test('reverse simple string', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('reverse more complex string', () => {
  expect(reverseString('  Hello world ! ')).toBe(' ! dlrow olleH  ');
});

test('rejects non string', () => {
  expect(() => reverseString(423)).toThrow('Not a string');
});