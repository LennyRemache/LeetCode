/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, color) => { // color: number to replace with, image[sr][sc]: has the starting color
    if (image[sr][sc] === color) {
        return image;
    }
    const startColor = image[sr][sc];
    
    let fill = (image, sr, sc, startColor, color) => {
        if (sr < 0 || sr > image.length - 1 || sc < 0 || sc > image[0].length - 1 || image[sr][sc] !== startColor) {    // if index out of bounds
            return;
        } 
        image[sr][sc] = color;
        // up
        fill(image, sr - 1, sc, startColor, color)
        // down
        fill(image, sr + 1, sc, startColor, color)
        // left
        fill(image, sr, sc - 1, startColor, color)
        // right
        fill(image, sr, sc + 1, startColor, color)
    }
    
    fill(image, sr, sc, startColor, color);
    
    return image;
};