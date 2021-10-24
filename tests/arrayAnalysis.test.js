const analyze = require('../functions/arrayAnalysis');

test('simple case', () => {
    const expected = {average:1.75, min: -2, max: 5, length: 4};
    const actual = analyze([4,-2,0,5]);
    expect(actual).toMatchObject(expected);
});

test('zero array', () => {
    const expected = {average:0, min: 0, max: 0, length: 4};
    const actual = analyze([0,0,0,0]);
    expect(actual).toMatchObject(expected);
});

test('array length 1', () => {
    const expected = {average: 3, min: 3, max: 3, length: 1};
    const actual = analyze([3]);
    expect(actual).toMatchObject(expected);
});

test('array with NaN', () => {
    expect(()  => analyze([3, 4, 'woops', 5, 3])).toThrow('invalid input');
});