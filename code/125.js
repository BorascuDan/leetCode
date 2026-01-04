/**
 * @param {string} s
 * @return {boolean}
 */
export const isPalindrome = (s) => {
  const str = s.trim().toLowerCase().replace(/[^0-9a-z]/g, "");
  let [left, right] = [0, str.length - 1];
  console.log({ str })
  while (left < right) {
    if (str[left] !== str[right]) return false;

    left += 1; right -= 1;
  }

  return true;
};
