// https://leetcode-cn.com/problems/find-winner-on-a-tic-tac-toe-game/
/**
 * @param {number[][]} moves
 * @return {string}
 */

// A -> X
// B -> O
var wins = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
]
function check_steps(steps) {
	var step_pos = steps.map(function(step) {
		return step[0] * 3 + step[1];
	});
	return wins.some(function(win) {
		return win.every(function(source) {
			return step_pos.indexOf(source) > -1;
		})
	})
}
var tictactoe = function(moves) {
	var A_steps = [],
		B_steps = [];
	for(var i=0; i<moves.length; i++) {
		if (i%2 === 0) {
			A_steps.push(moves[i]);
		} else {
			B_steps.push(moves[i]);
		}
	}
	if (check_steps(A_steps)) return 'A';
	if (check_steps(B_steps)) return 'B';
	return moves.length === 9 ? 'Draw' : 'Pending';
};

// console.log(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]]));
// console.log(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]));
// console.log(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]));
console.log(tictactoe([[1,2],[2,1],[1,0],[0,0],[0,1],[2,0],[1,1]]));