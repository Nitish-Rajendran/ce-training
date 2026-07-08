const path = require("path");

console.log("Directory:", __dirname);

console.log("Filename:", __filename);

const joined = path.join(__dirname, "data", "users.json");

console.log("Joined Path:", joined);

console.log("Extension:", path.extname("index.html"));

console.log("Basename:", path.basename("/users/rahul/notes.txt"));

console.log("Dirname:", path.dirname("/users/rahul/notes.txt"));

// path.join() creates platform-independent file paths.