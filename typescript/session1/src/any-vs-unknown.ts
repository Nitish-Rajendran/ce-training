//any

let dangerousValue: any = "hello";

dangerousValue = 42;
dangerousValue = { name: "Alice" };

console.log(dangerousValue.foo.bar);

// unknown

let safeValue: unknown = "hello";
if (typeof safeValue === "string") {
    console.log(safeValue.toUpperCase());
}
