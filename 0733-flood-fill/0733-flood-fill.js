/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, color) => {
    
    if (image[sr][sc] === color) return image;
    
    let startColor = image[sr][sc];
    const dfs = (r, c) => {
        // conditions to check out of bound errors and if not out of bounds then check it matches the startColor
        if (r < 0 || r > image.length - 1 || c < 0 || c > image[0].length - 1 || image[r][c] !== startColor) return;
        
        image[r][c] = color;
        
        dfs(r-1, c);
        dfs(r+1, c);
        dfs(r, c-1);
        dfs(r, c+1);
        
        return;
    }
    dfs(sr, sc);
    
    return image;
};