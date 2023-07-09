// Problem 6: 

// Write a function named getLargestNumber that takes in two numbers as parameters. The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).


// Sample Input:
// getLargestNumber(10, 5);

// Sample Output:
// 10

function getLargestNumber(num1,num2) {
    const result = num1 > num2 ? num1 : num2
    console.log(result)
}
getLargestNumber(10, 5)