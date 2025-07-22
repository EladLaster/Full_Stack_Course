// const readline = require('readline');
// const { AutoCompleteTrie } = require('./app.js');
import readline from 'node:readline';
import { AutoCompleteTrie } from "./app.js";

const trie = new AutoCompleteTrie();

console.log("=== AutoComplete Trie Console ===");
console.log("Type 'help' for commands\n");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

rl.prompt();

rl.on('line', (line) => {
  const input = line.trim();
  if (!input) {
    rl.prompt();
    return;
  }

  const [command, ...args] = input.split(' ');

  switch (command.toLowerCase()) {
    case 'add':
      if (args.length === 0) {
        console.log("Please provide a word to add.");
      } else {
        const word = args[0];
        trie.addWord(word);
        console.log(`✓ Added '${word}' to dictionary\n`);
      }
      break;

    case 'find':
      if (args.length === 0) {
        console.log("Please provide a word to find.");
      } else {
        const word = args[0];
        const found = trie.findWord(word);
        if (found) {
          console.log(`✓ '${word}' exists in dictionary\n`);
        } else {
          console.log(`✗ '${word}' not found in dictionary\n`);
        }
      }
      break;

    case 'complete':
      if (args.length === 0) {
        console.log("Please provide a prefix.");
      } else {
        const prefix = args[0];
        const allWords = trie._allWordsWithFreq(prefix);
        if (allWords.length === 0) {
          console.log(`No suggestions found for '${prefix}'\n`);
        } else {
          allWords.sort((a, b) => b.freq - a.freq);
          const detailedSuggestions = allWords.map(({ word, freq }) => `${word} (${freq})`);
          console.log(`Suggestions for '${prefix}': ${detailedSuggestions.join(", ")}\n`);
        }
      }
      break;

    case 'use':
      if (args.length === 0) {
        console.log("Please provide a word to increment usage.");
      } else {
        const word = args[0];
        const newFreq = trie.useWord(word);
        if (newFreq === false) {
          console.log(`✗ '${word}' not found in dictionary\n`);
        } else {
          console.log(`✓ Incremented usage for '${word}' (now ${newFreq})\n`);
        }
      }
      break;

    case 'help':
      console.log("Commands:");
      console.log("  add <word>        - Add word to dictionary");
      console.log("  find <word>       - Check if word exists");
      console.log("  complete <prefix> - Get completions");
      console.log("  use <word>        - Increment usage count for a word");
      console.log("  help              - Show this message");
      console.log("  exit              - Quit program\n");
      break;

    case 'exit':
      rl.close();
      break;

    default:
      console.log(`Unknown command: ${command}`);
      console.log(`Type 'help' to see the list of commands.\n`);
  }

  rl.prompt();
  
}).on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
});
