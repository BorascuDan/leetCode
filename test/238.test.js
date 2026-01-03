import { normalizeZero, productExceptSelf } from "../code/238.js"

describe('utils', () => {
  const testCasesInputs = [0, -0, 1, -7];
  const testCasesOutputs = testCasesInputs.map(
    (input) => {
      return Object.is(input, -0) ? 0 : input
    }
  );
  let size = testCasesInputs.length;

  for (let i = 0; i < size; i++) {
    it('return 0 when is -0 otherwise returns the input', () => {
      const input = testCasesInputs[i];
      const output = testCasesOutputs[i];
      expect(normalizeZero(input)).toBe(output)
    })
  }
})

describe('238', () => {
  const testCases = {
    '[1, 2, 3, 4]': [24, 12, 8, 6],
    '[-1, 1, 0, -3, 3]': [0, 0, 9, 0, 0],
  };

  Object.entries(testCases).forEach(([input, expected]) => {
    test(`productExceptSelf(${input})`, () => {
      const testCaseInput = JSON.parse(input);
      expect(productExceptSelf(testCaseInput)).toEqual(expected)
    })
  })
})
