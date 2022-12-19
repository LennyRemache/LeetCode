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

// can assume valid next() and peek() calls are made that do not exceed the iterators element count
class PeekingIterator {
    constructor(iterator) {
        this.iterator = iterator;
        this.cache = this.iterator.next(); // used for caching the peeking element that changes as next() is called.
        // cache assigned at class object initialization because it is possible to call peek() as first instruction
        // so this prevents peek() from returning null as if we made an invalid call to peek()/reached end of iterator
    }
    
    next() { // returns the cached element since technically is like calling next() twice when cache is initialized with next() at assignment
        // so we want to return the value cached in the prior next() call rather than the current next() call
        let res = this.cache; // previous peeked element from cache
        if(this.iterator.hasNext()) { // if next is possible then then next cached peek element should also be updated
            this.cache = this.iterator.next();
        } else { // else then there should not be a peeking element anymore
            this.cache = null;
        }
        return res; // return the previous peeking element since
    }
    
    hasNext() {
        return this.cache !== null; // unless the cached peek element is null then there must be a next element
    }
    
    peek() {
        return this.cache; // simply return the cached peeked element
    }
};

/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */