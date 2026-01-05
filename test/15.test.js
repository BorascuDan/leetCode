import { threeSum } from '../code/15.js'

describe('15', () => {
  const testCases = {
    '[-1,0,1,2,-1,-4]': [[-1, -1, 2], [-1, 0, 1]],
    '[0,1,1]': [],
    '[0,0,0]': [[0, 0, 0]]
  };

  Object.entries(testCases).forEach(([input, expected]) => {
    test(`threeSum(${input})`, () => {
      const testCase = JSON.parse(input);
      expect(threeSum(testCase)).toEqual(expected)
    })
  })
})
