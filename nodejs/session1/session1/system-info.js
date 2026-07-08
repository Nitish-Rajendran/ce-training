const os = require("os");

console.log("Platform:", os.platform());

console.log("Architecture:", os.arch());

console.log("Hostname:", os.hostname());

console.log("Home Directory:", os.homedir());

console.log("CPU Cores:", os.cpus().length);

console.log("Total Memory (MB):", Math.round(os.totalmem() / 1024 / 1024));

console.log("Free Memory (MB):", Math.round(os.freemem() / 1024 / 1024));

// Real applications can use this information to monitor system resources.