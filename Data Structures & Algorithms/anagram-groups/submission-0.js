class Solution {
  #CHAR_CODE_A = 'a'.charCodeAt(0);
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const map = new Map();
    for (let i = 0; i < strs.length; i++) {
      const str = strs[i];
      const charCodes = new Array(26).fill(0);

      for (let j = 0; j < str.length; j++) {
        const char = str.charCodeAt(j) - this.#CHAR_CODE_A;
        charCodes[char] = charCodes[char] + 1;
      }

      const key = charCodes.join(',');
      const value = map.get(key) || [];

      value.push(str);

      map.set(
        key,
        value,
      );
    }

    return [...map.values()];
  }
}