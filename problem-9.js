// Problem 9: 

// Write a function named filterEvenNumbers that takes in an array of numbers and returns a new array with only the even numbers using the array filter method.

// Sample Input:
// filterEvenNumbers([1, 2, 3, 4, 5]);

// Sample Output:
// [2, 4]

function filterEvenNumbers(arr) {
    const result = arr.filter((x)=> x%2==0)
    console.log(result)
}
filterEvenNumbers([1, 2, 3, 4, 5])