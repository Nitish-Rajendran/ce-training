function greetUser(name: string, title?: string): string {
    return title ? `Hello ${title} ${name}` : `Hello ${name}`;
}

greetUser("Alice");
greetUser("Alice", "Dr.");

function createAccount(email: string, role: string = "user"): object {
    return { email, role };
}

createAccount("alice@example.com");
createAccount("bob@example.com", "admin");
