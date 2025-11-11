function solveNQueens(n: number): string[][] {
    let result = [];

    function isValid(board, row, col): boolean {
        for (let i = 0; i < row; i++) {
            if (board[i] === col || Math.abs(board[i] - col) === row - i) {
                return false;
            }
        }
        return true;
    }

    function backtrack(row: number, board: number[]): void {
        if (row === n) {
            result.push(board.map(col => ".".repeat(col) + "Q" + ".".repeat(n - col - 1)));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(board, row, col)) {
                board[row] = col;
                backtrack(row + 1, board);
                board[row] = -1;
            }
        }
    }

    backtrack(0, new Array(n).fill(-1));
    
    return result;
};