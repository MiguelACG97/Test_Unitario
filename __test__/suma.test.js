//TEST

const sum = require('../utils/suma');

test('Test positive numbers', () => {
    expect(sum(1,2)).toBe(3);
})

test('Test negative numbers', () => {
    expect(sum(-2,-3)).toBe(-5);
})

test('Test negative & positive numbers', () => {
    expect(sum(-3,2)).toBe(-1);
})




