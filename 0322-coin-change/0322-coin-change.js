/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// DP Tabulation => bottom-up approach for this problem is most optimal
const coinChange = (coins, amount) => {
    // T: O(c * a) => num of coins * length of table
    // S: O(a)
    const table = new Array(amount + 1).fill(Infinity); // tabulation always need an array of size n+1 where n represents the target to reach from 0
    
    table[0] = 0; // {amount: # of coins}
    
    for(let amount = 0; amount < table.length; amount++) {
        for(let coin of coins) {
            if (coin <= amount) {
                table[amount] = Math.min(table[amount], table[amount - coin] + 1)
            }
        }
    }
    
    return table[amount] === Infinity ? -1 : table[amount];
};

// DP Memoization(cache) => top-down approach is another type of DP