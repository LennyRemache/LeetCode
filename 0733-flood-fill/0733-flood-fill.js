/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, color) => {
    let startColor = image[sr][sc];
    
    if (startColor === color) return image;
    
    const fill = (row, col) => {
        if (row < 0 || row >= image.length || col < 0 || col >= image[0].length || image[row][col] !== startColor) return;
        
        image[row][col] = color;
        
        fill(row+1, col); // up
        fill(row-1,col);  // down
        fill(row, col+1); // right
        fill(row, col-1); // left

    }
    
    fill(sr,sc);
    
    return image;
};