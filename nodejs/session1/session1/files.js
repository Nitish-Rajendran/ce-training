const fs = require("fs");

// Write a file
fs.writeFileSync("output.txt", "Hello from Node.js file system!");

// Read it
const content = fs.readFileSync("output.txt", "utf8");
console.log("File content:", content);

// Append
fs.appendFileSync("output.txt", "\nThis line was appended.");

// Read again
const updated = fs.readFileSync("output.txt", "utf8");
console.log("Updated content:", updated);

// writeFileSync() creates/overwrites a file.
// appendFileSync() adds content without deleting existing data.