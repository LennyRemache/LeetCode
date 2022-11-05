/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = (mat) => {

    let q = [];

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0 ) {
                q.push([i, j, 0]);
            } else {
                mat[i][j] = Infinity;
            }
        }
    }

    let dir = [[1,0],[0,1],[-1,0],[0,-1]];

    while(q.length) {
        let pos = q.shift();

        let row = pos[0];
        let col = pos[1];
        let level = pos[2];

        if (mat[row][col] > level) {
            mat[row][col] = level;
        }

        dir.forEach(function(d) {
            let next = [row + d[0], col + d[1], level + 1];
            // valid next coordinates?
            if (next[0] > -1 && next[0] < mat.length && next[1] > -1 && next[1] < mat[0].length) {
                // not yet marked?
                if (mat[next[0]][next[1]] === Infinity) {
                    // add to q, but with increased index, which we stored at pos[2]
                    q.push(next);
                }
            }
        });
    }

    return mat;
};