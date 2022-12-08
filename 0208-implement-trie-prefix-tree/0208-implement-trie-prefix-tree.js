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
        this.node = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let currNode = this.node;
        for(let i = 0; i < word.length; i++) {
            const letter = word[i];
            if (currNode.children[letter] === undefined) {
                currNode.children[letter] = new TrieNode();
            } 
            currNode = currNode.children[letter];
            
        }
        currNode.endOfWord = true;
    }

    /** 
     * @param {string} prefix
     * @return {boolean}
     */
    search(word) {
        let currNode = this.node;
        for(let i = 0; i < word.length; i++) {
            const letter = word[i];
            if (currNode.children[letter] === undefined) {
                return false
            } 
            currNode = currNode.children[letter];
            
        }
        return currNode.endOfWord;
    }
    
    /** 
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let currNode = this.node;
        for(let i = 0; i < prefix.length; i++) {
            const letter = prefix[i];
            if (currNode.children[letter] === undefined) {
                return false
            } 
            currNode = currNode.children[letter];
            
        }
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