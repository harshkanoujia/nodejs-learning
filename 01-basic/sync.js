// Tasks are executed sequentially, one at a time. Each task must complete before the next one can begin. 
// This can cause performance issues, especially for large files or when reading multiple files sequentially

const fs = require('fs');

// Read a file synchronously
const data = fs.readFileSync('example.txt', 'utf8'); // Blocks execution until the file is read
console.log('File Content (Sync):', data);

console.log('This comes after reading the file (Sync).');
