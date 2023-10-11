/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
    const map = {};
    for(let num of nums) {
        map[num] = num;
    }
    
    let maxLength = 0;
    for(let num in map) { 
        let currNum = num;
        // a starting number for a consecutive sequence has no left neighbor
        if (map[currNum - 1] === undefined) {
            let length = 0;
            while (map[currNum] !== undefined) {
                //console.log(map[currNum]);
                length += 1;
                currNum = parseInt(currNum) + 1;
                //console.log("currNum:", currNum)
            }
            maxLength = Math.max(maxLength, length);
        }
       
        
    }
    
    return maxLength;
};