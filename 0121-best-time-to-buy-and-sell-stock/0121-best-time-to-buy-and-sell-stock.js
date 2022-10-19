/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
    let maxProfit = 0;
    let buyPrice = prices[0];
    
    for (let price of prices) {
        if (price < buyPrice) buyPrice = price;
        else if (price - buyPrice > maxProfit) maxProfit = price - buyPrice;
    }
    
    return maxProfit;
};