/**
 * @param {number[]} time
 * @return {number}
 */
const numPairsDivisibleBy60 = (time) => {
    let remainderFreq = new Array(60).fill(0);
    let pairs = 0;
    
    for(let num of time) {
        const remainder = (num % 60)
        if (remainder === 0) pairs += remainderFreq[0];
        else pairs += remainderFreq[60 - remainder]
        remainderFreq[remainder] += 1;
    }
    return pairs;
}

const sumOfN = (n) => {
    return n*(n+1)/2;
}