/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    //if the first number is bigger then 0 there will be no pair of 2 numbers summing up to 0 beacause we sorted the string
    if (nums[i] > 0) break;
    //remove all numbers that will be repeted as starting point(constraints)
    while (i != 0 && nums[i - 1] === nums[i]) i += 1;

    //2 sum solution + constrain of repeting solutions
    let [left, right] = [i + 1, nums.length - 1];
    while (left < right) {
      const curentSum = nums[i] + nums[left] + nums[right];
      if (curentSum > 0) {
        right -= 1;
      } else if (curentSum < 0) {
        left += 1;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        left += 1; right -= 1;

        while (nums[left - 1] === nums[left] && left < right) left += 1;
      }
    }
  }

  return res;
};
