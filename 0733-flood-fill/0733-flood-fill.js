/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, color) => {
    const startColor = image[sr][sc];
    
    // if starting position already has the color we are suppose to change too then we do not need to move forward
    if(startColor === color) return image; 
    
    // traverse through the grid using dfs
    const dfs = (r, c) => {
        // conditions to check out of bound errors and if not out of bounds then check it matches the startColor
        if (r < 0 || r > image.length - 1 || c < 0 || c > image[0].length - 1 || image[r][c] !== startColor) {
            return;
        }
        
        // only then can we modify the color
        image[r][c] = color;
        
        // and then we can traverse adjacent to the current position
        dfs(r-1, c); // up
        dfs(r+1, c); // down
        dfs(r, c-1); // left
        dfs(r, c+1); // right
    }
    
    dfs(sr, sc)
    
    return image;
};