/**
 * @param {character[][]} grid
 * @return {number}
 */


const numIslands = (grid) => {
    let islands = 0;
    let visited = new Set();
    
    const bfs = (row, col) => {  
        let stack = [];
        stack.push([row,col]);
        
        while (stack.length > 0) {
            let cell = stack.pop();
            let [r, c] = cell;
            
            const dir = [[-1,0], [1,0], [0,-1], [0,1]];
            
            dir.forEach((d) => {
                const newRow = r + d[0];
                const newCol = c + d[1];
                
                if (0 <= newRow && newRow < grid.length && 0 <= newCol && newCol < grid[0].length) {
                    if (grid[newRow][newCol] === "1" && !visited.has(`${newRow},${newCol}`)) {
                        visited.add(`${newRow},${newCol}`);
                        stack.push([newRow, newCol]);
                    }
                }
            })
        }
    }
    
    
    for (let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            // if curr cell has not been visited and it is the start of an island
            if (!visited.has(`${i},${j}`) && grid[i][j] === "1") {
                visited.add(`${i},${j}`); // add the start of the island to visited
                //console.log(visited)
                bfs(i,j); // explore the entire island starting at curr cell while keeping track of cells that are part of that island
                islands += 1;
            } 
            // else curr cell is water or is already a part of an island we visited before
        }
    }
    
    return islands;
};