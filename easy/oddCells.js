/*
* https://leetcode-cn.com/problems/cells-with-odd-values-in-a-matrix/
* */
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
// var oddCells = function(n, m, indices) {
// 	var odd = 0,
// 		change_map = {};
// 	function auto_increment(row_i, col_i) {
// 		var key = row_i + '-' + col_i,
// 			cur = change_map[key] !== undefined ? change_map[key] : 0;
// 		if (cur % 2 !== 0) {
// 			odd--;
// 		} else {
// 			odd++;
// 		}
// 		cur += 1;
// 		change_map[key] = cur;
// 	}
// 	indices.forEach(function(index) {
// 		var row_i = index[0],
// 			col_i = index[1];
// 		var start;
// 		for(start = 0; start<n; start++) {
// 			auto_increment(start, col_i);
// 		}
// 		for(start = 0; start < m; start++) {
// 			auto_increment(row_i, start);
// 		}
// 	});
// 	return odd;
// };
var oddCells = function(n, m, indices) {
	var change_r = [], change_c = [];
	for(var i=0; i<indices.length; i++) {
		change_r[indices[i][0]] = !change_r[indices[i][0]];
		change_c[indices[i][1]] = !change_c[indices[i][1]];
		
	}
	// indices.forEach(function(index) {
	// 	change_r[index[0]] = !change_r[index[0]];
	// 	change_c[index[1]] = !change_c[index[1]];
	// });
	// var odd_r_count = change_r.filter(Boolean).length,
	// 	odd_c_count = change_c.filter(Boolean).length;
	var odd_r_count = 0,
		odd_c_count = 0;
	for (i=0; i<change_r.length; i++) {
		if(change_r[i]) odd_r_count++;
	}
	for (i=0; i<change_c.length; i++) {
		if(change_c[i]) odd_c_count++;
	}
	return odd_r_count * m + odd_c_count * n - odd_r_count * odd_c_count * 2;
}

console.log(oddCells(2,3,[[0,1],[1,1]]));
// console.log(oddCells(2,2,[[1,1],[0,0]]));