// The following TypeScript code is intended to create an array of numbers and then filter the even numbers from it. 
// However, it contains a logical error and doesn’t produce the correct result. Identify the error and fix the code.
var numbers = [1, 2, 3, 4, 5];
var evenNumbers = numbers.filter(function (num) { return !(num % 2); });
console.log(evenNumbers);
