/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

// T: O(n) since worse case we will recursively search through each pixel at most once
// S: O(1) since we are just modifying the grid in place.

const floodFill = (image, sr, sc, color) => {
    // base case where we need to check if the first pixel is already color meaning we shouldnt even modify anything else at all
    if (image[sr][sc] === color) return image;
    
    // then we can safely store the starting color in order modify the right pixels based on the right conditions given
    let startColor = image[sr][sc];
    
    // search through the grid using dfs
    const dfs = (r, c) => {
        // conditions to check out of bound errors and if not out of bounds then check it matches the startColor
        if (r < 0 || r > image.length - 1 || c < 0 || c > image[0].length - 1 || image[r][c] !== startColor) return;
        
        // otherwise it is safe to modify the pixel to the new given color
        image[r][c] = color;
        
        // now search 4-directionally
        dfs(r-1, c); // up
        dfs(r+1, c); // down
        dfs(r, c-1); // left
        dfs(r, c+1); //right
    }
    // first call to start the dfs with initial pixel
    dfs(sr, sc);
    
    // return modified image
    return image;
};