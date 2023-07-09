// Problem 3:

// Write a function named createGreeting that takes in a name as a parameter and returns a greeting message using template literals. The message should be in the format: "Hello, [name]! Welcome to our website."

// Sample Input:
// createGreeting('Alice');

// Sample Output:
// "Hello, Alice! Welcome to our website."

function createGreeting(name) {
    const result = `Hello, ${name}! Welcome to our website.`
    console.log(result)
}
createGreeting('Alice')