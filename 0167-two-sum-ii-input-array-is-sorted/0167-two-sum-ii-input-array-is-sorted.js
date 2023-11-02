/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// O(n) runtime since we iterate over each number at most once
// O(1) space since we do not create any extra data structure and just iterate over the given numbers array

const twoSum = (numbers, target) => {
    let left = 0; // pointer to smallest number
    let right = numbers.length - 1; // pointer to largest number
    
    while (left < right) {
        const res = numbers[left] + numbers[right]; // sum of adding curr smallest with curr largest number
        if (res === target) { // if res is the target then we found the solution
            return [left + 1, right + 1]; // return indices + 1 since description says to add 1 to each index
        } else if (res > target) { // if sum is greater than the target, then we decrease the largest number by reducing right index
            right -= 1;
        } else if (res < target) { // if sum is less than the target, then we increase the smallest number by increasing the left index
            left += 1;
        }
    }
};