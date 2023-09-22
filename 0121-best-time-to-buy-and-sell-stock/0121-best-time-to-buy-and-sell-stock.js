/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let buyPrice = prices[0];
    let max = 0;
    
    for(let i = 1; i < prices.length; i++) {
        const sellPrice = prices[i];
        max = Math.max(max, sellPrice - buyPrice);
        
        if(sellPrice - buyPrice < 0) {
            buyPrice = sellPrice;
        }
    }
    
    return max;
};