/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
class PeekingIterator {
    constructor(iterator) {
        this.iterator = iterator;
        this.cache = this.iterator.next(); // used for peeking
    }
    
    next() {
        let res = this.cache; // previous peeked element
        if(this.iterator.hasNext()) {
            this.cache = this.iterator.next();
        } else {
            this.cache = null;
        }
        return res;
    }
    
    hasNext() {
        return this.cache !== null;
    }
    
    peek() {
        return this.cache;
    }
};

/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */