// Problem 2:

// Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator. The function should return the sum of all the numbers.
 
// Sample Input:
// sumNumbers(1, 2, 3, 4, 5);

// Sample Output:
// 15

function sumNumbers(...num) {
    let total = 0;
    for (let i = 0; i < num.length; i++) {
        total = total + num[i];
    }
    console.log(total)
}  
const result = sumNumbers(1, 2, 3, 4, 5);