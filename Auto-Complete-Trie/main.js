import { AutoCompleteTrie } from './app.js';

const trie = new AutoCompleteTrie();

[
  'apple', 'application', 'appetite',
  'banana', 'band', 'bank',
  'cat', 'car', 'carbon',
  'dog', 'door', 'dormitory'
].forEach(word => trie.addWord(word));

trie.useWord('application'); // freq = 1
trie.useWord('application'); // freq = 2
trie.useWord('apple'); // freq = 1
trie.useWord('apple'); // freq = 2
trie.useWord('apple'); // freq = 3
trie.useWord('appetite'); // freq = 1
trie.useWord('appetite'); // freq = 2
trie.useWord('appetite'); // freq = 3
trie.useWord('appetite'); // freq = 4

const searchBox = document.getElementById('searchBox');
const suggestions = document.getElementById('suggestions');

function clearSuggestions() {
  suggestions.innerHTML = '';
}

function showSuggestions(prefix) {
  clearSuggestions();
  if (!prefix) return;
  const matches = trie.predictWords(prefix.toLowerCase());
  matches.forEach(word => {
    const li = document.createElement('li');
    li.textContent = word;
    li.tabIndex = 0;
    li.onclick = () => {
      searchBox.value = word;
      trie.useWord(word);
      clearSuggestions();
    };
    li.onkeydown = (e) => {
      if (e.key === 'Enter') {
        searchBox.value = word;
        trie.useWord(word);
        clearSuggestions();
      }
    }
    suggestions.appendChild(li);
  });
}

searchBox.addEventListener('input', () => {
  showSuggestions(searchBox.value.trim());
});

searchBox.addEventListener('blur', () => {
  setTimeout(clearSuggestions, 150);
});
