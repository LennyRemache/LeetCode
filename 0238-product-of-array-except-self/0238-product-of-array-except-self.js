/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(n) runtime since each loop depends on nums.length
// O(n) space since prefix and postfix depend on nums.length

const productExceptSelf = (nums) => {
    
    const prefix = new Array(nums.length).fill(1);
    // get prefix of all nums -> meaning product of all elements to the left of curr num
    // by default the first element has a prefix of 1 since it has no elements to its left
    for(let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i-1] * nums[i-1]; // curr num prefix = left num * the pre caclulated prefix of left num from prev iteration
    }
    
    const postfix = new Array(nums.length).fill(1);
    // get postfix of all nums -> meaning product of all elements to the right of curr num
    // by default the last element has a postfix of 1 since it has no elements to its right
    for(let i = nums.length - 2; i >= 0; i--) {
        postfix[i] = nums[i+1] * postfix[i+1]; // curr num postfix = right num * the pre caclulated postfix of right num from prev iteration
    }
  
    const res = new Array(nums.length).fill(1);
    // res is simply prefix * postfix
    for(let i = 0; i < res.length; i++) {
        res[i] = prefix[i] * postfix[i];
    }
    
    return res;
};