/**
 * @param {number[]} prices
 * @return {number}
 */

// O(n) runtime where n is the length of prices arr
// O(1) space as we are not storing any data in a data structure
const maxProfit = (prices) => {
    let buyPrice = prices[0]; // buy first day
    let maxProfit = 0; // have not sold yet so profit is 0
    
    // loop through each days price
    for(let i = 1; i < prices.length; i++) {
        // curr price we are selling at
        const sellPrice = prices[i];
        // if selling at curr price brings more profit, update maxprofit otherwise dont
        const currProfit = sellPrice - buyPrice;
        maxProfit = Math.max(maxProfit, currProfit);
        
        // if we are selling at a loss then that means curr day is a cheaper day to buy
        if(currProfit < 0) {
            buyPrice = sellPrice;
        }
    }
    
    return maxProfit;
};