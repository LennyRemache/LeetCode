/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        const res = numbers[left] + numbers[right];
        if (res === target) {
            return [left + 1, right + 1];
        } else if (res > target) {
            right -= 1;
        } else if (res < target) {
            left += 1;
        }
    }
};