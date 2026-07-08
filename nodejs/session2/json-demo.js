const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'data.json')

// Read JSON file
const raw = fs.readFileSync(filePath, 'utf8')

// Convert JSON string into JavaScript array
const users = JSON.parse(raw)

console.log('All users:', users)
console.log('Total:', users.length)

// Find users with score >= 90
const top = users.filter(u => u.score >= 90)
console.log('Top scorers:', top.map(u => u.name))

// Calculate average score
const avg = users.reduce((sum, u) => sum + u.score, 0) / users.length
console.log('Average score:', avg.toFixed(1))

// ----------------------------
// Add a new user
// ----------------------------
const newUser = {
  id: 5,
  name: 'Vikram',
  role: 'intern',
  score: 88
}

users.push(newUser)

// Write updated data back to file
const updated = JSON.stringify(users, null, 2)

fs.writeFileSync(filePath, updated)

console.log('User added and file updated')

// Verify update
const verify = JSON.parse(fs.readFileSync(filePath, 'utf8'))

console.log('Total after update:', verify.length)

// ----------------------------
// Update Amit's score
// ----------------------------

const currentData = JSON.parse(fs.readFileSync(filePath, 'utf8'))

const index = currentData.findIndex(u => u.name === 'Amit')

if (index !== -1) {

  currentData[index].score = 90

  fs.writeFileSync(
    filePath,
    JSON.stringify(currentData, null, 2)
  )

  console.log('Amit score updated to 90')
}

/*
JSON.parse()

Converts JSON text into JavaScript objects.

Without JSON.parse(), the data would remain a plain string
and we could not use methods like filter(), map(), or reduce().

JSON.stringify(users, null, 2)

null = don't modify object keys

2 = indent each level with 2 spaces to make the JSON file readable.

Without it, the JSON would be written on one long line.

find()
Returns the object itself.

findIndex()
Returns the position (index) of the object.
Use findIndex() when you want to update or remove an element.
*/