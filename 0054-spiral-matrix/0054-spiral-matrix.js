/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
    let res = [];
    
    let leftBound = 0;
    let rightBound = matrix[0].length;
    let topBound = 0;
    let bottomBound = matrix.length;
    
    let row = 0;
    let col = 0;
   
    while (leftBound < rightBound && topBound < bottomBound) {
        // test right first
        for(let i = leftBound; i < rightBound; i++) {
           res.push(matrix[topBound][i]);
        } 
        topBound += 1;

        // test down second
        for(let i = topBound; i < bottomBound; i++) {
            res.push(matrix[i][rightBound - 1]);
        }
        rightBound -= 1;
        
        if(leftBound >= rightBound || topBound >= bottomBound) {
            break;
        }

        // test left third
        for(let i = rightBound - 1; i >= leftBound; i--) {
            res.push(matrix[bottomBound - 1][i]);
        }
        bottomBound -= 1;

        // test up last
        for(let i = bottomBound - 1; i >= topBound; i--) {
            res.push(matrix[i][leftBound]);
        }
        leftBound += 1;
    }
    
    return res;
};