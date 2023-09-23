/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, color) => {
    const startColor = image[sr][sc];
    
    if(startColor === color) return image;
    
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]] // up, down, left, right
    
    const dfs = (r, c) => {
        if (r < 0 || r > image.length - 1 || c < 0 || c > image[0].length - 1 || image[r][c] !== startColor) {
            return;
        }
        
        image[r][c] = color;
        
        dfs(r-1, c); // up
        dfs(r+1, c); // down
        dfs(r, c-1); // left
        dfs(r, c+1); // right
    }
    
    dfs(sr, sc)
    
    return image;
};