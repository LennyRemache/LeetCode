/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    // T: O(n)  S: O(1)
    let maxProfit = 0;
    let boughtPrice = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        // if we potentially did not buy at the lowest price to produce most profit
        if (prices[i] < boughtPrice) boughtPrice = prices[i];
        maxProfit = Math.max(maxProfit, prices[i] - boughtPrice);
    }
    
    return maxProfit;
};