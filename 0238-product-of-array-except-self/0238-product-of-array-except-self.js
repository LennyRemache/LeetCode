/**
 * @param {number[]} nums
 * @return {number[]}
 */


const productExceptSelf = (nums) => {
    const res = new Array(nums.length);
    
    // get prefix in res
    let prefix = 1;
    for(let i = 0; i < nums.length; i++) {
        res[i] = prefix; // storing prefix in res
        prefix *= nums[i]; // update prefix for next iteration num
    }
   
     // get postfix in res
    let postfix = 1;
    for(let i = nums.length - 1; i >= 0; i--) {
        res[i] *= postfix; // storing prefix * postfix in res
        postfix *= nums[i]; // update postfix for next iteration num
    }
    
    return res;
};