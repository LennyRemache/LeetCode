/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let boughtPrice = prices[0];
    let maxProfit = 0;
    
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < boughtPrice) { // means there is a day where we can buy for cheaper
            boughtPrice = prices[i];
        } else { // curr day stock price is higher than bought price so there is potential
                 // profit to be made. 
            let profit = prices[i] - boughtPrice; // calculate profit thaat can be made
            // this if condition's instructions only executes when the new profit calculation is 
            // greater than a previous maxProfit calculation
            if (profit > maxProfit) { // if profit is greater than maxProfit from calculation 
                                      // of other pairs of bought price and curr day price
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
};