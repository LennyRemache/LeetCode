/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
    
    const prefix = new Array(nums.length).fill(1);
    for(let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i-1] * nums[i-1];
    }
    console.log(prefix)
    const postfix = new Array(nums.length).fill(1);
    for(let i = nums.length - 2; i >= 0; i--) {
        postfix[i] = nums[i+1] * postfix[i+1];
    }
    console.log(postfix)
    const res = new Array(nums.length).fill(1);
    for(let i = 0; i < res.length; i++) {
        res[i] = prefix[i] * postfix[i];
    }
    
    return res;
};