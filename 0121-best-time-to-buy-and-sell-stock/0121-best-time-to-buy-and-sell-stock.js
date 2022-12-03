/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let maxProfit = 0;
    let boughtPrice = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < boughtPrice) boughtPrice = prices[i];
        maxProfit = Math.max(maxProfit, prices[i] - boughtPrice);
    }
    
    return maxProfit;
};