// const { AutoCompleteTrie } = require('./app.js');
import { AutoCompleteTrie } from "./app.js";

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
    newTrie.addWord("cat");
    expect(newTrie.findWord("cat")).toBe(true);
  });

  test('should ignore non-string inputs', () => {
    const newTrie = new AutoCompleteTrie();
    newTrie.addWord(123);
    newTrie.addWord(null);
    newTrie.addWord(undefined);
    expect(newTrie.findWord("123")).toBe(false);
  });

  test('addWord should treat "Dog" and "dog" the same', () => {
    const testTrie = new AutoCompleteTrie();
    testTrie.addWord("Dog");
    expect(testTrie.findWord("dog")).toBe(true);
    expect(testTrie.findWord("DOG")).toBe(true);
    expect(testTrie.predictWords("do")).toEqual(expect.arrayContaining(["dog"]));
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
    expect(trie.findWord("ca")).toBe(false);
    expect(trie.findWord("d")).toBe(false);
    expect(trie.findWord("catt")).toBe(false);
  });

  test('should return false for empty/null/invalid types', () => {
    expect(trie.findWord("")).toBe(false);
    expect(trie.findWord()).toBe(false);
    expect(trie.findWord(null)).toBe(false);
    expect(trie.findWord(5)).toBe(false);
    expect(trie.findWord({})).toBe(false);
  });

  test('should be case-insensitive (accept Cat as cat)', () => {
    expect(trie.findWord("Cat")).toBe(true);
    expect(trie.findWord("CAR")).toBe(true);
    expect(trie.predictWords("CA")).toEqual(expect.arrayContaining(["cat", "car"]));
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
    testTrie.addWord('alpsa');
    testTrie.addWord('alps');
    testTrie.addWord('alpine');

    testTrie.useWord('alpine'); // freq = 1
    testTrie.useWord('alpine'); // freq = 2
    testTrie.useWord('alpsa');  // freq = 1

    const predictions = testTrie.predictWords('alps');
    expect(predictions).toEqual(['alpsa','alps']); // alpsa=1, alps=0

    const allPredictions = testTrie.predictWords('alp');
    expect(allPredictions).toEqual(['alpine', 'alpsa', 'alps']); // alpine=2, alpsa=1, alps=0
  });

  test('predictWords should ignore case in prefix', () => {
    const trie = new AutoCompleteTrie();
    trie.addWord('cat');
    trie.addWord('car');
    expect(trie.predictWords('CA')).toEqual(expect.arrayContaining(['cat', 'car']));
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
  test('useWord should work regardless of letter casing', () => {
    const testTrie = new AutoCompleteTrie();
    testTrie.addWord("hello");
    expect(testTrie.useWord("HELLO")).toBe(1);
    expect(testTrie.useWord("Hello")).toBe(2);
    expect(testTrie.useWord("hello")).toBe(3);
  });
});

describe('deleteWord function', () => {
  let trie;

  beforeEach(() => {
    trie = new AutoCompleteTrie();
    trie.addWord('cat');
    trie.addWord('car');
    trie.addWord('dog');
  });

  test('should delete an existing word', () => {
    expect(trie.findWord('cat')).toBe(true);
    const deleted = trie.deleteWord('cat');
    expect(deleted).toBe(true);
    expect(trie.findWord('cat')).toBe(false);
  });

  test('should return false when deleting a non-existing word', () => {
    const deleted = trie.deleteWord('horse');
    expect(deleted).toBe(false);
  });

  test('should be case-insensitive when deleting', () => {
    expect(trie.findWord('dog')).toBe(true);
    const deleted = trie.deleteWord('DOG');
    expect(deleted).toBe(true);
    expect(trie.findWord('dog')).toBe(false);
  });

  test('should not delete partial matches', () => {
    const deleted = trie.deleteWord('ca'); // partial prefix, not a full word
    expect(deleted).toBe(false);
    expect(trie.findWord('car')).toBe(true);
    expect(trie.findWord('cat')).toBe(true);
  });

  test('should return false when deleting invalid inputs', () => {
    expect(trie.deleteWord('')).toBe(false);
    expect(trie.deleteWord(null)).toBe(false);
    expect(trie.deleteWord(undefined)).toBe(false);
    expect(trie.deleteWord(123)).toBe(false);
  });
});

