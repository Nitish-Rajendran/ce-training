const os = require('os')

// Returns the operating system platform (win32, linux, darwin)
console.log('Platform:     ', os.platform())

// Returns the CPU architecture (x64, arm64, etc.)
console.log('Architecture: ', os.arch())

// Returns the computer hostname
console.log('Hostname:     ', os.hostname())

// Returns the current user's home directory
console.log('Home dir:     ', os.homedir())

// Returns CPU information array; length = number of CPU cores
console.log('CPU cores:    ', os.cpus().length)

// Total memory in MB
const totalMB = Math.round(os.totalmem() / 1024 / 1024)

// Free memory in MB
const freeMB = Math.round(os.freemem() / 1024 / 1024)

// Displays available memory
console.log(`Memory: ${freeMB}MB free of ${totalMB}MB`)

console.log("--------------------------------")

// Store the current platform
const platform = os.platform()

// Check which operating system is running
if (platform === 'win32') {
  console.log('Running on Windows')
} else if (platform === 'darwin') {
  console.log('Running on Mac')
} else {
  console.log('Running on Linux')
}

// Calculate free memory percentage
const freePercent = Math.round((os.freemem() / os.totalmem()) * 100)

// Warn if memory is low
if (freePercent < 20) {
  console.log('Warning: Low memory —', freePercent + '% free')
} else {
  console.log('Memory OK —', freePercent + '% free')
}

/*
Real-world example:
A Node.js application checks the platform to run platform-specific commands.
Example:
Windows uses "dir" while Linux/macOS use "ls".
*/