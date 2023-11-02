/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumJs = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
    return [];
}