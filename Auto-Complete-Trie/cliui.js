export function setupCLI(trie) {
  const input = document.getElementById('cliInput');
  const output = document.getElementById('cliOutput');
  const runButton = document.getElementById('cliRun');
  const status = document.getElementById('cliStatus');
  const cliContainer = document.querySelector('.cli-container');
  status.textContent = '💡 Type commands like: add apple, use apple, complete ap, help, exit';

  let commandHistory = [];
  let historyIndex = -1;

  function runCLI() {
    const lines = input.value.trim().split('\n');
    const results = [];

    for (const line of lines) {
      if (!line.trim()) continue;

      commandHistory.push(line);
      historyIndex = commandHistory.length;

      const [command, ...args] = line.trim().split(' ');
      const param = args.join(' ').trim();

      switch (command.toLowerCase()) {
        case 'add':
          if(param.length === 0) {
            results.push('❌ Please provide a word to add');
          } else {
            trie.addWord(param);
            results.push(`✅ added "${param}"`);
          }
          break;

        case 'use':
          if(param.length === 0) {
            results.push('❌ Please provide a word to use');
          } else {
            const freq = trie.useWord(param);
            if (freq === false) {
              results.push(`❌ word "${param}" not found`);
            } else {
              results.push(`🔁 used "${param}", freq now ${freq}`);
            }
          }
          break;

        case 'find':
          if(param.length === 0) {
            results.push('❌ Please provide a word to find');
          } else {
            results.push(`🔎 exists: ${trie.findWord(param)}`);
          }
          break;

        case 'complete':
            if(param.length === 0) {
                results.push('❌ Please provide a prefix for complete');
            } else {
                // שימוש בפונקציה _allWordsWithFreq שמחזירה מערך של {word, freq}
                const suggestionsWithFreq = trie._allWordsWithFreq(param);
                if (suggestionsWithFreq.length === 0) {
                results.push(`✨ no suggestions for "${param}"`);
                } else {
                // למיין לפי freq יורד (כבר ממוין בדרך כלל אבל לוודא)
                suggestionsWithFreq.sort((a,b) => b.freq - a.freq);
                // להרכיב מחרוזת עם מילה ותדירות בצד
                const detailed = suggestionsWithFreq.map(({word, freq}) => `${word}(${freq})`);
                results.push(`✨ suggestions for "${param}": ${detailed.join(', ')}`);
                }
            }
            break;

        case 'delete':
            if(param.length === 0) {
                results.push('❌ Please provide a word to delete');
            } else {
                const deleted = trie.deleteWord(param);
                if (deleted) {
                results.push(`🗑️ Word "${param}" deleted`);
                } else {
                results.push(`❌ Word "${param}" not found`);
                }
            }
            break;


        case 'clear':
          output.textContent = '';
          results.push('🧹 Output cleared.');
          break;

        case 'help':
            results.push(`Commands:
            add <word>       - Add word to dictionary
            use <word>       - Increment usage count for a word
            find <word>      - Check if word exists
            complete <pref>  - Get completions with frequency
            delete <word>    - Delete word from dictionary
            clear            - Clear output
            exit             - Close admin console
            `);
            break;


        case 'exit':
          results.push('👋 Closing Admin Console...');
          cliContainer.classList.add('hidden');
          break;

        default:
          results.push(`❌ Unknown command: "${command}"`);
      }
    }

    output.textContent += results.join('\n') + '\n';
    input.value = '';
  }

  runButton.addEventListener('click', runCLI);

  input.addEventListener('keydown', (e) => {
    // Run on Enter (without Shift)
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      runCLI();
    }

    // History navigation
    if (e.key === 'ArrowUp') {
      if (historyIndex > 0) {
        historyIndex--;
        input.value = commandHistory[historyIndex];
      }
    }
    if (e.key === 'ArrowDown') {
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        input.value = commandHistory[historyIndex];
      } else {
        input.value = '';
      }
    }
  });
}
