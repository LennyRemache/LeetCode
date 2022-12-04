/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
    let memo = [1,1,2];
    
    for (i = 3; i <= n; i++) {
        memo.push(memo[i-1] + memo[i-2]);
    }
    
    return memo[n]
};