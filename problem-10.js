// Problem 10

// Write a function named sumArray that takes in an array of numbers and returns the sum of all the numbers using the array reduce method.

// Sample Input:
// sumArray([1, 2, 3, 4, 5]);

// Sample Output:
// 15

function sumArray(arr) {
    const output = arr.reduce((total, current) => {
        return total + current
    }, 0)
    console.log(output)
}
sumArray([1, 2, 3, 4, 5])
