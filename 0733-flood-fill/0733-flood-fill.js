/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, color) => {
    if (image[sr][sc] === color) return image;
    
    const startColor = image[sr][sc];
    
    const fill = (row, col) => {
        if (row > image.length - 1 || row < 0 || col > image[0].length - 1 || col < 0 || image[row][col] !== startColor) return;
        
        image[row][col] = color;
        
        fill(row-1, col) // up
        fill(row+1, col) // down
        fill(row, col-1) // left
        fill(row, col+1) // right
    }
    
    fill(sr, sc);
    
    return image
};