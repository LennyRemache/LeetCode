/**
 * @param {number[]} prices
 * @return {number}
 */

// T: O(n) since we loop through the entire prices array once
// S: O(1) since we do not use additional data structures that depend on the size of prices array

const maxProfit = (prices) => {
    // you buy it the first day
    let buyPrice = prices[0];
    // you have not sold yet so profit is 0
    let maxProfit = 0;
    
    // loop through the rest of the array
    for(let i = 1; i < prices.length; i++) {
        // curr price is a possible day to sell the stock at a profit or loss
        let sellPrice = prices[i];
        
        // check what the profit is and see if it is the new maxProfit
        maxProfit = Math.max(maxProfit, sellPrice - buyPrice);
        
        // if profit is negative then we found a day where we couldve instead bought for cheaper
        if (sellPrice - buyPrice < 0) {
            buyPrice = sellPrice;
        }
        
    }
    
    return maxProfit;
};