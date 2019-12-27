// https://leetcode-cn.com/problems/split-a-string-in-balanced-strings/

/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function(s) {
	let result = L_count = R_count = 0;
	const len = s.length;
	for(let i=0; i<len; i++) {
		const cur = s[i];
		if (cur === 'L') L_count++;
		if (cur === 'R') R_count++;
		if (L_count === R_count) {
			result++;
			L_count = R_count = 0;
		}
	}
	return result;
};

console.log(balancedStringSplit('RLRRLLRLRL'));
console.log(balancedStringSplit('RLLLLRRRLR'));
console.log(balancedStringSplit('LLLLRRRR'));