/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// DP Tabulation => bottom-up approach for this problem is most optimal
const coinChange = (coins, target) => {
    // T: O(c * a) => num of coins * length of table
    // S: O(a) -> length of tabular table
    
    // amount values are used as indexes
    const table = new Array(target + 1).fill(Infinity); // tabulation always need an array of size n+1 where n represents the target to reach from 0
    
    // base case
    table[0] = 0; // {amount: # of coins}
    
    // loop through each possible amount up to the max amount given, so 0 -> amount
    for(let amount = 0; amount < table.length; amount++) {
        // for each amount, find the minimum amount of coins needed to reach the current amount value
        // based on using each of the coins available
        for(let coin of coins) {
            // check if the coin can even be used, if a coin results in geting a negative number then the coin is too large to use
            if (amount - coin >= 0) {
                // set the # of coins for current amount value
                // to the min between what is already stored at current amount value 
                // and (the # of coins used to get a smaller amount) + 1 (add 1 because its like saying we had to use one more coin to reach curr value)
                table[amount] = Math.min(table[amount], table[amount - coin] + 1)
            }
        }
    }
    
    // if our targetted value is still Infinity then that means it was never possible to 
    // use the coins to reach the target, thus return -1.
    // Otherwise we can return the # of coins stored at that value in the table.
    return table[target] === Infinity ? -1 : table[target];
};

// DP Memoization(cache) => top-down approach is another type of DP