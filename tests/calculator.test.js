const calculator = require('../functions/calculator');

test('simple add case', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('simple subtract case', () => {
    expect(calculator.subtract(2, 3)).toBe(-1);
  });

  test('simple divide case', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  test('simple multiply case', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test('checks input', () => {
    expect(() => calculator.add('hello world')).toThrow('invalid input');
  });

  test('floating point numbers', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });
