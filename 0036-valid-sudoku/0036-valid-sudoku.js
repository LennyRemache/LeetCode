/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
    for (let row = 0; row < board.length; row++) {
        const digits = {};
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
    
    for (let col = 0; col < board[0].length; col++) {
        const digits = {};
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
    
    const dir = [[0,0], [0,1], [0,2], 
                 [1,0], [1,1], [1,2],
                 [2,0], [2,1], [2,2]]
    
    for(let row = 0; row < board.length; row += 3) {
        for(let col = 0; col < board[0].length; col += 3) {
            const digits = {};
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