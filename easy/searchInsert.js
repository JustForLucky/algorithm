// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 你可以假设数组中无重复元素。
// 示例 1:
// 输入: [1,3,5,6], 5
// 输出: 2
// 示例 2:
// 输入: [1,3,5,6], 2
// 输出: 1
// 示例 3:
// 输入: [1,3,5,6], 7
// 输出: 4
// 示例 4:
// 输入: [1,3,5,6], 0
// 输出: 0
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 暴力对比
// const searchInsert = function(nums, target) {
// 	for(var i=0,l=nums.length; i<l; i++) {
// 		const cur = nums[i];
// 		const next = nums[i+1];
// 		if (cur === target || (cur > target)) return i;
// 		if (next > target) return i+1;
// 	}
// 	return i;
// };
// 二分法
const searchInsert = (nums, target) => {
	const len = nums.length;
	let left = 0,
		right = len -1;
	while(left <= right) {
		const mid = Math.round(left + (right - left)/2);
		const mid_value = nums[mid];
		if (mid_value === target) return mid;
		if (mid_value < target) {
			left = mid + 1;
			continue;
		}
		if (mid_value > target) {
			right = mid - 1;
		}
	}
	return left;
}
console.log(searchInsert([1,3,5,6,9], 7))