//TEST
const palindromo = require('../utils/palindromo')

test('palindromo de fran', () => {
    const result = palindromo('fran')
    expect(result).toBe('narf')

})

test('palindromo de ana', () => {
    const result = palindromo('ana')
    expect(result).toBe('ana')

})