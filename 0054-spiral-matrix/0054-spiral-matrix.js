/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
    let res = [];
    
    let dir = [[0,-1],[0,1],[-1,0],[1,0]]; // left, right, up, down
    let row = 0;
    let col = 0;
    
    let type = "right";
 
    while (res.length !== matrix.length*matrix[0].length) {
        
        if(matrix[row][col] !== 303) {
            //console.log(matrix[row][col]);
            res.push(matrix[row][col]);
            matrix[row][col] = 303; //signal visited as error 303
        }
        
        
        // test right first
        if (type === "right" && col + dir[1][1] < matrix[0].length && matrix[row][col + dir[1][1]] !== 303) {
            col = col + dir[1][1];
            type = "right";
            continue;
        } 
        
        // test down second
        else if (type === "down" && row + dir[3][0] < matrix.length && matrix[row + dir[3][0]][col] !== 303) {
            row = row + dir[3][0];
            type = "down";
            continue;
        }
        
        // test left third
        else if (type === "left" && col + dir[0][1] >= 0 && matrix[row][col + dir[0][1]] !== 303) {
            col = col + dir[0][1]  
            type = "left";
            continue;
        } 
        // test up last
        else if (type === "up" && row + dir[2][0] >= 0 && matrix[row + dir[2][0]][col] !== 303) {
            row = row + dir[2][0];
            type = "up";
            continue;
        }
        
        if (type === "right") {
            type = "down";
      
        } else if (type === "down") {
            type = "left";
      
        } else if (type === "left") {
            type = "up";
       
        } else {
            type = "right";
        }
    }
    
    return res;
};