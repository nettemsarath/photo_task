// The following TypeScript code is intended to create an array of numbers and then filter the even numbers from it. 
// However, it contains a logical error and doesn’t produce the correct result. Identify the error and fix the code.

const numbers: number[] = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => !(num % 2));
console.log(evenNumbers);
