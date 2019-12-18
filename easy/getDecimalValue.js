// https://leetcode-cn.com/problems/convert-binary-number-in-a-linked-list-to-integer/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
// var getDecimalValue = function(head) {
// 	var val_arr = [],
// 		cur = head;
// 	while(cur.next) {
// 		val_arr.push(cur.val);
// 		cur = cur.next;
// 	}
// 	val_arr.push(cur.val);
// 	var decimal_value = 0;
// 	var len = val_arr.length;
// 	console.log(val_arr);
// 	for(var i=0; i<len; i++) {
// 		decimal_value += val_arr[i] * Math.pow(2,(len - 1 - i));
// 	}
// 	return decimal_value;
// };
var getDecimalValue = function(head) {
	var cur = head,
		ans = 0;
	while(cur !== null) {
		ans = ans * 2 + cur.val;
		cur = cur.next;
	}
	return ans;
}
function ListNode(value, next) {
	this.val = value;
	this.next = next || null;
}
var last = new ListNode(1),
	middle = new ListNode(0, last),
	head = new ListNode(1, middle);

console.log(getDecimalValue(head));