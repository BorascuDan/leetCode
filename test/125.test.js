import { isPalindrome } from '../code/125.js'

describe('125', () => {
  const testCases = {
    "A man, a plan, a canal: Panama": true,
    "race a car": false,
    " ": true,
    "Luffy is king of pirates  ": false,
    "   luffy P yfful": true,
  }

  Object.entries(testCases).forEach(([input, expected]) => {
    test(`isPalindrome(${input})`, () => {
      expect(isPalindrome(input)).toBe(expected);
    })
  })
})
