/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const normalizeZero = (n) => Object.is(n, -0) ? 0 : n;

export const productExceptSelf = (nums) => {
  let res = [];
  let multiplier = 1;
  for (let num of nums) {
    multiplier *= num;
    res.push(multiplier);
  }

  multiplier = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    const left = i > 0 ? res[i - 1] : 1
    res[i] = normalizeZero(left * multiplier);
    multiplier *= nums[i];
  }

  return res;
};
