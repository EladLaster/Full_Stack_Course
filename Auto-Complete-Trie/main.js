import { AutoCompleteTrie } from './app.js';
import { setupCLI } from './cliui.js';

const trie = new AutoCompleteTrie();

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

setupCLI(trie);
