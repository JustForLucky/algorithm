// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。
// 示例 1:
// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:
// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:
// 	所有输入只包含小写字母 a-z 。
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	function get_common_prefix(str_1, str_2) {
		var common_prefix = '';
		var i = 0,
			char_1 = str_1.charAt(i),
			char_2 = str_2.charAt(i);
		while(char_1 && char_2 && (char_1 === char_2)) {
			common_prefix += char_1;
			i++;
			char_1 = str_1.charAt(i);
			char_2 = str_2.charAt(i);
		}
		return common_prefix;
	}
	var longest_common_prefix = strs[0] || '';
	for(var i=1,l=strs.length; i<l; i++) {
		var current = strs[i];
		if (current === undefined) break;
		longest_common_prefix = get_common_prefix(longest_common_prefix, current);
		if (longest_common_prefix === '') break;
	}
	return longest_common_prefix;
};
console.log(longestCommonPrefix(['abc']));

// https://leetcode-cn.com/problems/longest-common-prefix/
// 执行速度慢，待优化