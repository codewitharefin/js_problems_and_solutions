// Problem 4: 

// Write a function named isEven that takes in a number as a parameter and returns the string "Even" if the number is even, and "Odd" if the number is odd. Use a ternary operator instead of an if/else statement.

// Sample Input:
// isEven(7);

// Sample Output:
// "Odd"

function isEven(num) {
    const result = num%2==0 ? "Even" : "Odd"
    console.log(result)
}
isEven(7)