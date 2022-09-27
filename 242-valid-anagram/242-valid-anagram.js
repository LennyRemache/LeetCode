/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    
    const sSorted = s.split('').sort().join('');
    const tSorted = t.split('').sort().join('');
    
    return sSorted === tSorted;
};