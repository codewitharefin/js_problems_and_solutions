// Problem 11

// Write a function named sortNumbers that takes in an array of numbers and returns a new array with the numbers sorted in ascending order using the array sort method.

// Sample Input:
// sortNumbers([5, 2, 8, 1, 4]);

// Sample Output:
// [1, 2, 4, 5, 8]

function sortNumbers(arr) {
    const arr2 = [...arr].sort()
    console.log(arr2)
}
sortNumbers([5, 2, 8, 1, 4])