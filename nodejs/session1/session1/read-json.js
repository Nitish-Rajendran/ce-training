const fs = require("fs");

const raw = fs.readFileSync("data.json", "utf8");

const data = JSON.parse(raw);

console.log("All users:", data.users);

console.log("First user:", data.users[0].name);

const interns = data.users.filter(user => user.role === "intern");

console.log("Interns:", interns.map(user => user.name));

// JSON.parse() converts JSON text into a JavaScript object.
// Invalid JSON throws a SyntaxError.