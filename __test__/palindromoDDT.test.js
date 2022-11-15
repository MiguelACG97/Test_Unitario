//TEST
const palindromo = require('../utils/palindromo')

describe('Palindromo Test', () => {
    test.each`
      firstValue      |  expectedResult    
      ${'juan'}       |  ${'nauj'}
      ${'migue'}      |  ${'eugim'}
      ${'sandra'}     |  ${'ardnas'}
      ${'maria'}      |  ${'airam'}
      ${'pilar'}      |  ${'ralip'}
    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(palindromo(firstValue)).toBe(expectedResult);
    })
})