const caesar = require('../functions/caesarCypher');

test('simple case', () => {
  expect(caesar('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
});
