let array = [1,2,3,4,5,6,7,8,9,10];
let oddArray = array.filter(num => num % 2 !== 0);
let divBy2Or5 = array.filter(num => (num % 2 === 0) || (num % 5 === 0));
let divBy3Squared = array.filter(num => num % 3 === 0).map(num => num * num)
let sumOfSquaresDivBy5 = array.filter(num => num % 5 === 0).map(num => num * num).reduce((a, b) => a + b);

console.log("Original array:", array);
console.log("Odd Numbers:", oddArray);
console.log("Numbers that are divisible by 2 or 5", divBy2Or5);
console.log("Numbers divisible by 3 and squared", divBy3Squared);
console.log("Sum of squares for numbers divisible by 5", sumOfSquaresDivBy5);