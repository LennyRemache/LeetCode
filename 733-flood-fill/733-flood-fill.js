/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, color) => { // color: number to replace with, image[sr][sc]: has the starting color
    if (image[sr][sc] === color) { // if the starting row and column value is already the new color value then we just return the image as is
        return image;
    }
    const startColor = image[sr][sc]; // need to store what the starting row and column value's starting color was in order to make sure
                                      // all neighboring cells have the same starting color as the original starting cell
    
    // helper function needed to prevent overwriting startColor variable
    let fill = (image, sr, sc) => {
        if (sr < 0 || sr > image.length - 1 || sc < 0 || sc > image[0].length - 1 || image[sr][sc] !== startColor) { // if index out of bounds
            return;                                                                                                  // or cell doesnt have startingColor   
        } 
        
        // else we are safe to modify the current cell to the color passed into floodFill()
        image[sr][sc] = color;
        
        // then we can also make recursive calls on the cells above, below, left, right to the current cell
        // up
        fill(image, sr - 1, sc)
        // down
        fill(image, sr + 1, sc)
        // left
        fill(image, sr, sc - 1)
        // right
        fill(image, sr, sc + 1)
    }
    
    fill(image, sr, sc); // first call to helper function that 
    
    return image;
};