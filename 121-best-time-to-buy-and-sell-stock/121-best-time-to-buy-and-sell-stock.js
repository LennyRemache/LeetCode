/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let boughtPrice = prices[0];
    let maxProfit = 0;
    
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < boughtPrice) {
            boughtPrice = prices[i];
        } else {
            let profit = prices[i] - boughtPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
};