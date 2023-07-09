// Problem 8: 

// Write a function named doubleNumbers that takes in an array of numbers and returns a new array with each number doubled using the array map method.


// Sample Input:
// doubleNumbers([1, 2, 3, 4, 5]);

// Sample Output:
// [2, 4, 6, 8, 10]

function doubleNumbers(arr) {
    const result = arr.map((x)=>x*2)
    console.log(result)
}
doubleNumbers([1, 2, 3, 4, 5])