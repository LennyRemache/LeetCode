/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
    // T: O(n)
    // S: O(1)
    
    let sums = new Array(nums.length).fill(1); // sums[i] that will store the products of all elements of nums except nums[i]
    
    sums[0] = nums[0];
    
    // calculate all left side products
    // start at index 1 since nums[0] has no numbers to its left which causes out of bounds error
    for(let i = 1; i < nums.length; i++) {
        sums[i] = sums[i-1] * nums[i];
    }
    
    let cacheRightProduct = nums[nums.length - 1]; // saves the continous product of multiplying each number in nums from right to left one by one.
                                                   // better than using an array that stores each right side product which takes O(n)
                                                   // ex : 4  ->  3*4  ->  2*3*4  ->  1*2*3*4
    
    sums[nums.length-1] = sums[nums.length-2]      // handles last element not having anything to its right 
                                                   // so last element in sums is simply just the left elems product stored to its left
                                                   // before it gets modified in the loop to represent the right side products
    
    // which is why we also start at nums.length - 2 since sums[nums.length - 1] is already handled
    // calculate final results for sums array
    for(let j = nums.length - 2; j > 0; j--) {
        // leftProduct * rightProduct
        sums[j] = sums[j-1] * cacheRightProduct;
        // modify right product for next iteration
        cacheRightProduct *= nums[j];
    }
    
    // sums[0] has no left side product so it is simply the final cached right side product ex : 2*3*4
    sums[0] = cacheRightProduct;
    
    return sums;
};