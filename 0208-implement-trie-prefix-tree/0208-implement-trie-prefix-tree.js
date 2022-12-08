// tree data structure
// T: O(l * n) => average word length * # of words
class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

class Trie{
    constructor() {
        this.root = new TrieNode(); // initialize the root TrieNode of the trie data strcuture
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        // start at root TrieNode
        let currNode = this.root;
        // check letter by letter of the word
        for(let i = 0; i < word.length; i++) {
            const letter = word[i];
            // if currLetter of word is not an existing child of currNode then
            // we can add the letter to currNode's children as a new TrieNode
            if (currNode.children[letter] === undefined) {
                currNode.children[letter] = new TrieNode();
            } 
            
            // we can continue on to each following curr letter's TrieNode
            currNode = currNode.children[letter];
            
        }
        // when loops end we reached the last letter of a word so we can set 
        // the final currNode's endOfWord state to true
        currNode.endOfWord = true;
    }

    /** 
     * @param {string} prefix
     * @return {boolean}
     */
    search(word) {
        // start at root TrieNode
        let currNode = this.root;
        // check letter by letter of the word
        for(let i = 0; i < word.length; i++) {
            const letter = word[i];
            // if currLetter of word is not an existing child of currNode then 
            // we can conclude that the rest of the word does no exist in the Trie either
            if (currNode.children[letter] === undefined) {
                return false
            } 
            // we can continue on to each following curr letter's TrieNode
            currNode = currNode.children[letter];
            
        }
        // when loop ends we reached the last letter of the word
        // we just have to return currNode's endOfWord state to determine if
        // the word was inserted before or not
        return currNode.endOfWord;
    }
    
    /** 
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        // start at root TrieNode
        let currNode = this.root;
        // check letter by letter of the prefix
        for(let i = 0; i < prefix.length; i++) {
            const letter = prefix[i];
            // if currLetter of prefix is not an existing child of currNode then 
            // we can conclude that the rest of the prefix does not exist in the Trie either
            if (currNode.children[letter] === undefined) {
                return false
            } 
            // we can continue on to each following curr letter's TrieNode
            currNode = currNode.children[letter];
            
        }
        // when loop ends we reached the last letter of the prefix
        // we can return true since we found the prefix in the trie (the actual word containing that prefix does not matter)
        // it also does not matter if the prefix is a word or not
        return true;
    }
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */