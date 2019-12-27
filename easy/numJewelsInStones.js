// https://leetcode-cn.com/problems/jewels-and-stones/
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function(J, S) {
	let count = 0;
	for(let i=0,l=S.length; i<l; i++) {
		if (J.indexOf(S[i]) > -1) {
			count++;
		}
	}
	return count;
};
console.log(numJewelsInStones('aA', 'aAAbbbbbb'));