function logEvent(event: string): void {
    console.log(`[LOG] ${event}`);
}

const result = logEvent("user_login");

console.log(result);

function fail(message: string): never {
    throw new Error(message);
}
function doSomething(): void {
    console.log("hello");
}

function infiniteLoop(): never {
    while (true) {
        // runs forever
    }
}