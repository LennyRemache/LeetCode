/**
 * @param {character[][]} board
 * @return {boolean}
 */

// O(9^2) runtime
// O(9^2) space

const isValidSudoku = (board) => {
    
    // O(9^2) runtime which is the size of the board
    // check if each row contains 1-9 without duplicates
    for (let row = 0; row < board.length; row++) {
        const digits = {}; // O(9^2) space worse case when each row contains all 1-9 without duplicates
        for(let col = 0; col < board[0].length; col++) {
            const currDigit = board[row][col];
            if (currDigit !== ".") {
                if (digits[currDigit] === undefined) {
                    digits[currDigit] = 1;
                } else {
                    return false;
                }
                //console.log(digits);
            }
        }
    }
    
    // O(9^2) runtime which is the size of the board
    // check if each column contains 1-9 without duplicates
    for (let col = 0; col < board[0].length; col++) {
        const digits = {}; // O(9^2) space worse case when each column contains all 1-9 without duplicates
        for(let row = 0; row < board.length; row++) {
            const currDigit = board[row][col];
            if (currDigit !== ".") {
                if (digits[currDigit] === undefined) {
                    digits[currDigit] = 1;
                } else {
                    return false;
                }
                //console.log(digits);
            }
        }
    }
    
    // the coordinates needed to get each 3x3 submatrix's values based on the first value of each submatrix
    const dir = [[0,0], [0,1], [0,2], 
                 [1,0], [1,1], [1,2],
                 [2,0], [2,1], [2,2]]
    
    // get the first value of each 3x3 submatrix and then access all values in the submatrix using dir
    // O(3*3*9) runtime since we iterate through 9x9 board in increments of 3 for row and col and then iterate through each 9 submatrices 9 times
    for(let row = 0; row < board.length; row += 3) {
        for(let col = 0; col < board[0].length; col += 3) {
            const digits = {};
            // check if each 3x3 submatrix contains 1-9 without duplicates
            for(let d of dir) {
                const newRow = row + d[0];
                const newCol = col + d[1];
                const currDigit = board[newRow][newCol];
                if (currDigit !== ".") {
                    if (digits[currDigit] === undefined) {
                        digits[currDigit] = 1;
                    } else {
                        return false;
                    }
                    //console.log(digits);
                }
            }
        }
    }
    
    return true;
};