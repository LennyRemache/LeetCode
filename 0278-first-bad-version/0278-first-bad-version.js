/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = (isBadVersion) => {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0;
        let end = n;
        while(start <= end) {
            const mid = Math.ceil((start + end) / 2);
            if (!isBadVersion(mid)) {
                start = mid + 1;
            } else if (isBadVersion(mid)){
                if (!isBadVersion(mid - 1)) return mid;
                else end = mid - 1;
            }
        }
    };
};