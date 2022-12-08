/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

//
const coinChange = (coins, amount) => {
    const table = new Array(amount + 1).fill(Infinity);
    table[0] = 0;
    
    for(let coin of coins) {
        for(let i = 0; i < table.length; i++) {
            if (coin <= i) {
                let idx = i - coin;
                let potentialAmount = table[idx] + 1;
                table[i] = Math.min(table[i], potentialAmount)
            }
        }
    }
    
    return table[amount] === Infinity ? -1 : table[amount];
};