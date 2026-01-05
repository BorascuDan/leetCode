import { minWindow } from '../code/76.js'

describe('76', () => {
  const testCases = {
    1: ["ADOBECODEBANC", "ABC", "BANC"],
    2: ["a", "a", "a"],
    3: ["a", "aa", ""],
    4: ["capucino", "", ""]
  };

  Object.values(testCases).forEach((strings) => {
    test(`minWindow(${strings[0]}, ${strings[1]})`, () => {
      const s = strings[0];
      const t = strings[1];
      const expected = strings[2];
      expect(minWindow(s, t)).toEqual(expected)
    })
  })
})
