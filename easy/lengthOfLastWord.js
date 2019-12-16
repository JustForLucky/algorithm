// 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
// 如果不存在最后一个单词，请返回 0 。
// 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
// 示例:
// 	输入: "Hello World"
// 输出: 5
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
	let len_of_last_word = 0;
	for(let pos = s.length - 1; pos >= 0; pos--) {
		const cur = s[pos];
		if (cur === ' ' && len_of_last_word === 0) continue;
		if (cur === ' ') return len_of_last_word;
		len_of_last_word++;
	}
	return len_of_last_word;
};
console.log(lengthOfLastWord("a "));
