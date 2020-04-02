// In order to help us create more flexible functions, ES6 introduces default parameters for functions.

// EX. 1
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous

// EX. 2
const increment = (number, value = 1) => number + value;

