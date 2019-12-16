// 给定两个二进制字符串，返回他们的和（用二进制表示）。
// 输入为非空字符串且只包含数字 1 和 0。
// 示例 1:
// 输入: a = "11", b = "1"
// 输出: "100"
// 示例 2:
// 输入: a = "1010", b = "1011"
// 输出: "10101"
// 二进制相加规则 0+0=0，0+1=1，1+0=1，1+1=10(0 进位为1)
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
	let a_pos = a.length - 1,
		b_pos = b.length - 1;
	let carry_bit = 0,
		sum = '';
	while(a[a_pos] || b[b_pos]) {
		let a_value = Number(a[a_pos]) || 0,
			b_value = Number(b[b_pos]) || 0;
		let temp_sum = a_value + b_value + carry_bit;
		if (temp_sum < 2) {
			sum = `${temp_sum}${sum}`;
			carry_bit = 0;
		} else {
			carry_bit = 1;
			sum = `${temp_sum%2}${sum}`;
		}
		a_pos--;
		b_pos--;
	}
	if (carry_bit > 0) {
		sum = `${carry_bit}${sum}`;
	}
	return sum;
};
console.log(addBinary("1010", "1011"))