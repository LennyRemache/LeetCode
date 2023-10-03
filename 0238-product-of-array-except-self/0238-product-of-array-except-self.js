/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(n) runtime since both loops depend on nums.length
// O(1) space since we do not create any additional data structure besides res

const productExceptSelf = (nums) => {
    const res = new Array(nums.length);
    
    // get prefix in res
    let prefix = 1;
    // ex: [1,2,3,4] 
    // [ , , , ] -> [1, , , ] -> [1,1, , ] -> [1,1,2, ] -> [1,1,2,6]
    //     1     ->     1     ->     2     ->     6     ->     24 
    for(let i = 0; i < nums.length; i++) {
        res[i] = prefix; // storing curr prefix in res
        prefix *= nums[i]; // update prefix for next iteration num
    }
   
     // get postfix in res
    let postfix = 1;
    // ex: [1,2,3,4] 
    // [1,1,2,6] -> [1,1,2,6] -> [1,1,8,6] -> [1,12,8,6] -> [24,12,8,6]
    //     1     ->     4     ->     12    ->      24    ->      
    for(let i = nums.length - 1; i >= 0; i--) {
        res[i] *= postfix; // storing prefix * postfix in res since prefix was stored in res previously
        postfix *= nums[i]; // update postfix for next iteration num
    }
    
    return res;
};