
function getFirstWord(sentence: string | null): string {
    if (sentence === null) {
        return "";
    }

    return sentence;
}


function getUserAge(user: { name: string; age?: number }): string {
    if (user.age === undefined) {
        return `${user.name} age not provided`;
    }

    return `${user.name} is ${user.age.toString()} years old`;
}


const config = {
    database: {
        host: "localhost",
        port: 5432
    }
};

function getDbPort(): number {
    return config.database.port;
}

const users = ["Alice", "Bob", "Charlie"];

function findUser(name: string): string {
    const found = users.find((u) => u === name);

    if (found === undefined) {
        return "User not found";
    }

    return found.toUpperCase();
}

