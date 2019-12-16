// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
// 示例 1:
// 输入: 　
// 输出: true
// 示例 2:
// 输入: -121
// 输出: false
// 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 示例 3:
// 输入: 10
// 输出: false
// 解释: 从右向左读, 为 01 。因此它不是一个回文数。
// 进阶:你能不将整数转为字符串来解决这个问题吗？
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	if (x < 0) return false;
	if (x >= 0 && x < 10) return true;
	var arr = [];
	while(x) {
		arr.push(x%10);
		x = Math.floor(x/10);
	}
	for(var i=0,len = arr.length; i<len; i++) {
		var top = arr[i],
			tail = arr[len-1-i];
		if (top !== tail) return false;
	}
	return true;
};
console.log(isPalindrome(0));