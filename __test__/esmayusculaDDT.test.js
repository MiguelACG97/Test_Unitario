//TEST

const isUpperCase = require("../utils/esmayuscula");

describe('Mayuscula Test', () => {
    test.each`
      firstValue      |  expectedResult    
      ${'HELLO'}      |  ${true}
      ${'miguel'}     |  ${false}
      ${'sandra'}     |  ${false}
      ${'maria'}      |  ${false}
      ${'PILAR'}      |  ${true}
    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(isUpperCase(firstValue)).toBe(expectedResult);
    })
})
