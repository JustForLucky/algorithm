// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
// 示例 1:
// 输入: "()"
// 输出: true
// 示例 2:
// 输入: "()[]{}"
// 输出: true
// 示例 3:
// 输入: "(]"
// 输出: false
// 示例 4:
// 输入: "([)]"
// 输出: false
// 示例 5:
// 输入: "{[]}"
// 输出: true
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	if (!s || s.length === 0) return true;
	var stack = [];
	for(var i=0,l=s.length; i<l; i++) {
		var cur = s[i];
		if (cur === '(' || cur === '[' || cur === '{') {
			stack.push(cur);
			continue;
		}
		var last = stack[stack.length -1];
		if ((cur === ')' && last === '(') || (cur === ']' && last === '[') || (cur === '}' && last === '{') ) {
			stack.pop();
			continue;
		}
		return false;
	}
	return stack.length === 0;
};

console.log(isValid('{[([([]{}())])]}'));