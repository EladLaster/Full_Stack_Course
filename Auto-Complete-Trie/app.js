class TrieNode {
    constructor(value=''){
        this.value = value;
        this.children = {};
        this.endOfWord = false;
        this.frequency = 0;
    }
    
}
class AutoCompleteTrie {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        if (typeof word !== 'string' || word.length === 0) {
            return;
        }
        let curr = this.root;
        let letters = word.split("");

        for (let i = 0; i < letters.length; i++) {
            const char = letters[i];

            if (!curr.children[char]) {
                curr.children[char] = new TrieNode(char);
            }
            curr = curr.children[char];
        }
        curr.endOfWord = true;
        if (!curr.frequency) 
            curr.frequency = 0;
    }
    findWord(word){
        if (typeof word !== 'string' || word.length === 0) {
        return false;
    }
        let curr = this.root;
        let letters = word.split("");

        for (let i = 0; i < letters.length; i++) {
            const char = letters[i];

            if(!curr.children[char]){
                    return false;
            }
            curr = curr.children[char];
        }
        if(curr.endOfWord==true)
            return true;   
        return false;
    }


    useWord(word) {
        if (!this.findWord(word)) return false;

        let curr = this.root;
        let letters = word.split("");
        for (let char of letters) {
            curr = curr.children[char];
        }
        curr.frequency++;
        return curr.frequency;
    }


    _getRemainingTree(prefix, node = this.root) {
        if (typeof prefix !== 'string' || prefix.length === 0) {
            return node;
        }
        let letters = prefix.split("");
        for (let i = 0; i < letters.length; i++) {
            const char = letters[i];
            if (!node.children[char]) {
                return null;
            }
            node = node.children[char];
        }
        return node;
    }

    _allWordsHelper(node, path, allWords) {
        if (node.endOfWord) {
            allWords.push({ word: path, freq: node.frequency || 0 });
        }
        for (const char in node.children) {
            this._allWordsHelper(node.children[char], path + char, allWords);
        }
    }
    _allWordsWithFreq(prefix) {
    const startNode = this._getRemainingTree(prefix);
    if (!startNode) return [];
    const allWords = [];
    this._allWordsHelper(startNode, prefix || "", allWords);
    return allWords;
  }

    predictWords(prefix) {
        if (typeof prefix !== 'string') {
        return [];
    }
        const startNode = this._getRemainingTree(prefix);
        if (!startNode) return [];
        const allWords = [];
        this._allWordsHelper(startNode, prefix, allWords);
        
        allWords.sort((a, b) => b.freq - a.freq);
        return allWords.map(obj => obj.word);
    }


    //I took this "printTree" function from GPT for testing purposes :)
    printTree(node = this.root, prefix = "", isLast = true) {
        if (!node) return;

        const connector = isLast ? "└── " : "├── ";
        console.log(prefix + connector + (node.value ?? "ROOT") + (node.endOfWord ? " *" : ""));

        const childrenKeys = Object.keys(node.children);
        childrenKeys.forEach((key, index) => {
            const child = node.children[key];
            const isLastChild = index === childrenKeys.length - 1;
            this.printTree(child, prefix + (isLast ? "    " : "│   "), isLastChild);
        });
    }
}


module.exports = { AutoCompleteTrie };




