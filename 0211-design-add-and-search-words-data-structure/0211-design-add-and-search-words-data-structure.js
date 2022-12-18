class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.trie = new TrieNode();
    }
    
    addWord(word) {
        let node = this.trie;
        
        for(let letter of word) {
            if (node.children[letter] === undefined) {
                node.children[letter] = new TrieNode();
            }
            node = node.children[letter];
        }
        node.endOfWord = true;
    }
    
    search(word) {
        
        const dfs = (j, root) => {
            let node = root;
            
            for(let i = j; i < word.length; i++) {
                let letter = word[i];
                if (letter === ".") {
                    for (let child in node.children) {
                        if (dfs(i+1, node.children[child])) return true;
                    }
                    return false;
                } else if (node.children[letter] === undefined) {
                        return false;
                }
                node = node.children[letter];    
            }   
            return node.endOfWord;
        }
        
        return dfs(0, this.trie);
    }
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */