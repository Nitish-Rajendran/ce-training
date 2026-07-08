const fs = require('fs')
const path = require('path')

// Create the full path for output.txt
const filePath = path.join(__dirname, 'output.txt')

// Write text to the file (overwrites if the file already exists)
fs.writeFileSync(filePath, 'Line 1 — written by Node.js')
console.log('File written')

// Read the file
const content = fs.readFileSync(filePath, 'utf8')
console.log('Content:', content)

// Append new lines to the file
fs.appendFileSync(filePath, '\nLine 2 — appended')
fs.appendFileSync(filePath, '\nLine 3 — appended again')

// Read the updated file
const updated = fs.readFileSync(filePath, 'utf8')
console.log('Updated:\n', updated)

// Check if another file exists
const checkPath = path.join(__dirname, 'missing.txt')

if (fs.existsSync(checkPath)) {
  console.log('File exists')
} else {
  console.log('File does not exist — creating it')
  fs.writeFileSync(checkPath, 'Created because it was missing')
}

/*
Difference:

writeFileSync()
- Creates a new file or replaces all existing content.

appendFileSync()
- Adds new content to the end of the existing file without deleting old content.

If readFileSync() is called on a file that doesn't exist,
Node.js throws an ENOENT error.
In real projects we use existsSync() or try...catch to handle this safely.
*/