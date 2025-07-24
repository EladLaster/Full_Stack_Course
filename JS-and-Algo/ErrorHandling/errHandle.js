//Exercise 1
function safeJsonParse(string){
  try {
    const result = JSON.parse(string);
    return result;
  } catch(err) {
    return "Invalid JSON format";
  }
}

console.log(safeJsonParse('{"name": "John"}')); 
// Output: { name: "John" }
console.log(safeJsonParse('invalid json')); 
// Output: "Invalid JSON format"

//Exercise 2
const fs = require('fs');
function readFileWithErrorHandling(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        callback(`File not found: ${filePath}`);
      } else if (err.code === 'EISDIR') {
        callback(`Expected a file but found a directory: ${filePath}`);
      } else {
        callback(`Error reading file: ${err.message}`);
      }
    } else {
      callback(`File read successfully. Size: ${data.length} bytes`);
    }
  });
}

readFileWithErrorHandling('existing.txt', (result) => {
  console.log(result);
  // Success: "File read successfully. Size: 150 bytes"
  // Or error: "File not found: existing.txt"
});

