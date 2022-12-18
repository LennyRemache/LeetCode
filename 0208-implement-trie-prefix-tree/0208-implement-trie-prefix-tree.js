
class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let node = this.root;
        for (let letter of word) {
            if (node.children[letter] === undefined) {
                node.children[letter] = new TrieNode();
            } 
            node = node.children[letter];
        }
        
        node.endOfWord = true;
    }
    
    search(word) {
        let node = this.root;
        for (let letter of word) {
            if (node.children[letter] === undefined) {
                return false
            } 
            node = node.children[letter];
        }
        
        return node.endOfWord;
    }
    
    startsWith(prefix) {
        let node = this.root;
        for (let letter of prefix) {
            if (node.children[letter] === undefined) {
                return false;
            }
            node = node.children[letter];
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