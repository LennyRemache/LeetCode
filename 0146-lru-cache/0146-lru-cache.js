/**
 * @param {number} capacity
 */

// a Map keeps track automatically of the order keys are set in the map
var LRUCache = function(capacity) { // constructor
    this.size = capacity;
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */

// prototype used to add methods to the object type
LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        const val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, val);
        return val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // using our own built get() method to check if the key exists already
    // causes the map to reorder itself automatically based on LRU.
    // So we do not need to reeorder the used key again in put() if it already
    // exists in the cache.
    if (this.get(key) === -1 && this.cache.size === this.size) {
        // .keys() is an iterable object of keys
        for(let keyVal of this.cache) { // delete LRU key
            this.cache.delete(keyVal[0]);
            break;
        }
    } 
    
    this.cache.set(key, value);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */