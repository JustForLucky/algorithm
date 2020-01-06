// https://leetcode-cn.com/problems/defanging-an-ip-address/

/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function(address) {
	return address.replace(/(\.)/g, '[$1]');
};
let start = Date.now();
console.log(defangIPaddr('1.1.1.1'))
let end = Date.now();
console.log(end - start);