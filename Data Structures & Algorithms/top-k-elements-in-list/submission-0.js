class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const buckets = Array.from({ length: nums.length + 1 }, () => []);
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      map.set(num, (map.get(num) || 0) + 1);
    }

    for (const [key, value] of map) {
      buckets[value].push(key);
    }

    return buckets.flat().slice(-k);
  }
}