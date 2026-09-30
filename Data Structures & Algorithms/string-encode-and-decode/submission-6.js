class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let result = [];
    for (let i = 0, len = strs.length; i < len; ++i) {
      const str = strs[i];
      const length = str.length;

      result.push(`${length}#${str}`);
    }

    return result.join('');
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const result = [];
    let i = 0;

    while (i < str.length) {
      const j = str.indexOf('#', i);
      const length = Number(str.slice(i, j));
      const joinString = str.slice(j + 1, j + 1 + length);

      result.push(joinString);
      i = j + 1 + length;
    }

    return result;
  }
}