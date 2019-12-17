/*
* https://leetcode-cn.com/problems/shift-2d-grid/
* */
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
	var n = grid.length,
		m = grid[0].length,
		nums = [],
		nums_length = n * m;
	for(var i=0; i<n; i++) {
		for(var j=0; j<m; j++) {
			k %= nums_length;
			nums[k++] = grid[i][j];
		}
	}
	var nums_index = 0,
		result = [];
	for(i=0; i<grid.length; i++) {
		var temp = [];
		for(j=0; j<m; j++) {
			temp.push(nums[nums_index++]);
		}
		result.push(temp);
	}
	return result;
};
console.log(shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]],4))
console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]],1))