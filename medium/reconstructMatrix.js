// https://leetcode-cn.com/problems/reconstruct-a-2-row-binary-matrix/
/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
function create_arr_by_len(len, value) {
	var arr = [];
	for(var i=0; i<len; i++) {
		arr.push(value);
	}
	return arr;
}
var reconstructMatrix = function(upper, lower, colsum) {
	var n = colsum.length,
		row_0 = create_arr_by_len(n, 0),
		row_1 = create_arr_by_len(n, 0);
	// 满足colsum
	colsum.forEach(function(sum, index) {
		if (sum === 2) {
			row_0[index] = 1;
			row_1[index] = 1;
		} else if (sum === 1) {
			row_0[index] = 1;
		} else if (sum === 0) {
			row_0[index] = 0;
			row_1[index] = 0;
		}
	});
	// 在满足colsum的情况下，尝试满足upper和lower
	var row_0_sum = row_0.reduce(function(sum, i) { return sum+i}, 0),
		row_1_sum = row_1.reduce(function(sum, i) { return sum+i}, 0);
	console.log(row_0_sum, row_1_sum);
	if (row_0_sum < upper || (row_0_sum + row_1_sum) !== (upper + lower) ) return [];
	var row_1_need = lower - row_1_sum;
	for(var i=0; i<row_1.length; i++) {
		if (row_1_need <= 0) {
			break;
		}
		if (row_0[i] !== row_1[i]) {
			row_0[i] = 0;
			row_1[i] = 1;
			row_1_need--;
		}
	}
	console.log(row_0);
	console.log(row_1);
	console.log('upper=',row_0.reduce(function(sum, i) { return sum+i}, 0));
	console.log('lower=',row_1.reduce(function(sum, i) { return sum+i}, 0));
	console.log(row_0.map(function(row_0_val, i) {
		return row_0_val + row_1[i];
	}))
	return [row_0, row_1];
};
// console.log(reconstructMatrix(5,5,[2,1,2,0,1,0,1,2,0,1]));
console.log(reconstructMatrix(9,2,[0,1,2,0,0,0,0,0,2,1,2,1,2]));
// console.log(reconstructMatrix(4,2,[1,2,1,2,0]));