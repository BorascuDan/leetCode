/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
export const minWindow = (s, t) => {
  if (t.length > s.length || t === "") return ""

  let freq = {};
  for (let char of t) freq[char] = (freq[char] ?? 0) + 1;

  const needed = Object.keys(freq).length;
  let have = 0;
  let res = [-1, -1];
  let minWindow = Infinity;
  let l = 0;
  let curent = {};

  for (let r = 0; r < s.length; r++) {
    curent[s[r]] = (curent[s[r]] ?? 0) + 1;
    if (freq[s[r]] && curent[s[r]] === freq[s[r]]) have += 1;

    while (have === needed) {
      if (minWindow > r - l) {
        res = [l, r];
        minWindow = r - l;
      }

      curent[s[l]] -= 1;
      if (freq[s[l]] && curent[s[l]] < freq[s[l]]) have -= 1;
      l += 1;
    }
  }

  return minWindow === Infinity ? "" : s.slice(res[0], res[1] + 1);
};
