console.log("Node version:", process.version); // Current Node version
console.log("Platform:", process.platform); // Operating system
console.log("Current directory:", process.cwd()); // Current working directory
console.log("Memory usage:", process.memoryUsage()); // Memory statistics

const args = process.argv;
console.log("All arguments:", args);
console.log("Your input:", args[2]);

console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("HOME:", process.env.HOME || process.env.USERPROFILE);

// Command line arguments are useful for passing user input.
// Environment variables store secrets like API keys and DB URLs.