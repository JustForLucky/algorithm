// https://leetcode-cn.com/problems/unique-number-of-occurrences/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function(arr) {
	const count_map = {};
	arr.forEach(n => {
		count_map[n] = typeof count_map[n] === 'undefined' ? 1 : ++count_map[n];
	})
	return Object.values(count_map).length === new Set(Object.values(count_map)).size;
};

console.log(uniqueOccurrences([1,2,2,1,1,3]));
console.log(uniqueOccurrences([1,2]));
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]));