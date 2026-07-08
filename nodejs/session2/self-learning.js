const fs = require('fs').promises
const path = require('path')

async function demo() {
  const filePath = path.join(__dirname, 'demo.txt')

  // Write using fs.promises
  await fs.writeFile(filePath, 'Hello from fs.promises!')

  // Read using fs.promises
  const content = await fs.readFile(filePath, 'utf8')

  console.log(content)
}

demo().catch(console.error)
const fsSync = require('fs')

const files = fsSync.readdirSync(__dirname)

console.log('\nJavaScript Files:\n')

files.forEach(file => {
  if (file.endsWith('.js')) {
    const stats = fsSync.statSync(path.join(__dirname, file))
    console.log(
      `${file} - ${(stats.size / 1024).toFixed(2)} KB`
    )
  }
})

// fs.promises allows asynchronous file operations using async/await.
// It is preferred in modern Node.js applications because it doesn't block the event loop.