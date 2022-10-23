/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
    let memo = [1, 1, 2];
    
    for(let i = 3; i <= n; i++) {
        memo.push(memo[i-1] + memo[i-2]);
    }
    
    console.log(memo)
    return memo[n];
};