const caesar = require('../functions/caesarCypher');

test('simple case', () => {
  expect(caesar('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
});

test('negative shift', () => {
  expect(caesar('efgfoe uif fbtu xbmm pg uif dbtumf', -1)).toBe('defend the east wall of the castle');
});

test('numbers and symbols', () => {
  expect(caesar('attack at dawn! @6a.m.', 12)).toBe('mffmow mf pmiz! @6m.y.');
});

test('illegal input', () => {
  expect(()  => caesar(5, 'not a number')).toThrow('invalid input');
});