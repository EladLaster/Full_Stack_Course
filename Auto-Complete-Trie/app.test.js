const { AutoCompleteTrie } = require('./app.js');

const trie = new AutoCompleteTrie();
trie.addWord("cat");
trie.addWord("car");
trie.addWord("dog");

describe('build trie', () => {
  test('should create an instance of AutoCompleteTrie', () => {
    expect(trie).toBeInstanceOf(AutoCompleteTrie);
  });
});

describe('addWord function', () => {
  test('should add words to the trie correctly', () => {
    const newTrie = new AutoCompleteTrie();
    newTrie.addWord("hello");
    expect(newTrie.findWord("hello")).toBe(true);
  });

  test('should handle adding duplicate word', () => {
    const newTrie = new AutoCompleteTrie();
    newTrie.addWord("cat");
    newTrie.addWord("cat"); // should not throw or change state
    expect(newTrie.findWord("cat")).toBe(true);
  });

  test('should ignore non-string inputs', () => {
    const newTrie = new AutoCompleteTrie();
    newTrie.addWord(123);
    newTrie.addWord(null);
    newTrie.addWord(undefined);
    expect(newTrie.findWord("123")).toBe(false);
  });
});

describe('findWord function', () => {
  test('should return true if word exists in trie', () => {
    expect(trie.findWord("cat")).toBe(true);
    expect(trie.findWord("car")).toBe(true);
    expect(trie.findWord("dog")).toBe(true);
  });

  test('should return false if word does not exist', () => {
    expect(trie.findWord("horse")).toBe(false);
    expect(trie.findWord("ca")).toBe(false);  // prefix only
    expect(trie.findWord("d")).toBe(false);
    expect(trie.findWord("catt")).toBe(false);  // close miss
  });

  test('should return false for empty/null/invalid types', () => {
    expect(trie.findWord("")).toBe(false);
    expect(trie.findWord()).toBe(false);
    expect(trie.findWord(null)).toBe(false);
    expect(trie.findWord(5)).toBe(false);
    expect(trie.findWord({})).toBe(false);
  });

  test('should be case-sensitive', () => {
    expect(trie.findWord("Cat")).toBe(false); // 'C' != 'c'
  });
});

describe('predictWords function', () => {
  test('should return words with given prefix', () => {
    expect(trie.predictWords("ca")).toEqual(expect.arrayContaining(["cat", "car"]));
    expect(trie.predictWords("c")).toEqual(expect.arrayContaining(["cat", "car"]));
    expect(trie.predictWords("d")).toEqual(["dog"]);
  });

  test('should return empty array for unknown prefix', () => {
    expect(trie.predictWords("z")).toEqual([]);
    expect(trie.predictWords("doe")).toEqual([]);
  });

  test('should return all words for empty prefix', () => {
    const words = trie.predictWords("");
    expect(words).toEqual(expect.arrayContaining(["cat", "car", "dog"]));
  });

  test('should handle invalid input types gracefully', () => {
    expect(trie.predictWords()).toEqual([]);
    expect(trie.predictWords(null)).toEqual([]);
    expect(trie.predictWords(123)).toEqual([]);
    expect(trie.predictWords({})).toEqual([]);
  });

  test('should return words sorted by frequency descending', () => {
    const testTrie = new AutoCompleteTrie();
    testTrie.addWord('alpha');
    testTrie.addWord('alps');
    testTrie.addWord('alpine');

    // שימושים שונים
    testTrie.useWord('alpine'); // freq = 1
    testTrie.useWord('alpine'); // freq = 2
    testTrie.useWord('alpha');  // freq = 1

    const predictions = testTrie.predictWords('alp');
    expect(predictions).toEqual(['alpine', 'alpha','alps']); // alps freq=0, alpine=2

    const allPredictions = testTrie.predictWords('al');
    expect(allPredictions).toEqual(['alpine', 'alpha', 'alps']); // alpine=2, alpha=1, alps=0
  });
});

describe('useWord function', () => {
  test('should increment usage count for existing word', () => {
    const testTrie = new AutoCompleteTrie();
    testTrie.addWord('apple');
    expect(testTrie.useWord('apple')).toBe(1);
    expect(testTrie.useWord('apple')).toBe(2);
  });

  test('should return false for non-existing word', () => {
    const testTrie = new AutoCompleteTrie();
    expect(testTrie.useWord('banana')).toBe(false);
  });
});
