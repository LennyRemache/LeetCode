/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// DP Tabulation => bottom-up approach for this problem is most optimal
const coinChange = (coins, amount) => {
    // T: O(c * a) => num of coins * length of table
    // S: O(a)
    
    // amount values are used as indexes
    const table = new Array(amount + 1).fill(Infinity); // tabulation always need an array of size n+1 where n represents the target to reach from 0
    
    table[0] = 0; // {amount: # of coins}
    
    // loop through each possible amount up to the max amount given, so 0 -> amount
    for(let amount = 0; amount < table.length; amount++) {
        // for each amount, find the minimum amount of coins needed to reach the current amount value
        // based on using each of the coins available
        for(let coin of coins) {
            if (amount - coin >= 0) {
                table[amount] = Math.min(table[amount], table[amount - coin] + 1)
            }
        }
    }
    
    return table[amount] === Infinity ? -1 : table[amount];
};

// DP Memoization(cache) => top-down approach is another type of DP