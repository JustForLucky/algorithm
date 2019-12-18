// https://leetcode-cn.com/problems/number-of-closed-islands/
/**
 * @param {number[][]} grid
 * @return {number}
 */
const DIRS = [
	[-1, 0],
	[0, 1],
	[1, 0],
	[0, -1],
]
const SEA = 1;
const LAND = 0;
const closedIsland = function(grid) {
	const [R, C] = [grid.length, grid[0].length];
	function isValid(r,c) {
		return r>=0 && (r<R) && (c >=0 ) && (c<C);
	}
	function dfs(r,c) {
		grid[r][c] = SEA;
		for(let dir of DIRS) {
			const [nr,nc] = [r+dir[0], c+dir[1]];
			if (isValid(nr, nc) && (grid[nr][nc] === LAND)) {
				dfs(nr, nc);
			}
		}
	}
	// 排除首行、末行
	for(let i=0; i<C; i++) {
		if(grid[0][i] === LAND) dfs(0,i);
		if(grid[R-1][i] === LAND) dfs(R-1, i);
	}
	// 排除首列、末列
	for(let i=0; i<R; i++) {
		if(grid[i][0] === LAND) dfs(i,0);
		if(grid[i][C-1] === LAND) dfs(i, C-1);
	}
	// 记录陆地的数量
	let count = 0;
	for(let i=0; i<R; i++) {
		for(let j=0; j<C; j++) {
			if (grid[i][j] === LAND) {
				dfs(i,j);
				count++;
			}
		}
	}
	return count;
};

console.log(closedIsland([[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]));