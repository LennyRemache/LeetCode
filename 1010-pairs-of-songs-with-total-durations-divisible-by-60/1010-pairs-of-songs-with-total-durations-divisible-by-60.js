/**
 * @param {number[]} time
 * @return {number}
 */
const numPairsDivisibleBy60 = (time) => {
    let remainderFreq = new Array(60).fill(0);
    let totalValidPairs = 0;
    
    for (let num of time) {
        if (num % 60 === 0){
            totalValidPairs += remainderFreq[0];
        } else {
            totalValidPairs += remainderFreq[60 - (num%60)]   
        }
        remainderFreq[num % 60] += 1;
    }
    return totalValidPairs;
};