/**
 * @param {number[]} time
 * @return {number}
 */
const numPairsDivisibleBy60 = (time) => {
    let remainderFreq = new Array(60).fill(0);
    let totalValidPairs = 0;
    
    for (let i = 0; i < time.length; i++) {
        for (let j = i+1; j < time.length; j++) {
            totalValidPairs += (time[i] + time[j]) % 60 === 0 ? 1 : 0;
        }
    }
    return totalValidPairs;
}