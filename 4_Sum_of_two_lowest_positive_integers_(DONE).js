function sumTwoSmallestNumbers(numbers) {  
  let result;
  result = numbers.sort((a, b) => a - b);
  //result = result[0]+result[1];
  //return result;
  return result[0]+result[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));//13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));//6
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));//10
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));//24
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));//16
//---------------------------------------------------------------------------------------------------------------------
/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/
/* 
Створіть функцію, яка повертає суму двох найменших додатних чисел із масивом мінімум 4 натуральних чисел. 
Жодні з плаваючою чи непозитивними цілими числами передаватися не будуть.

Наприклад, коли масив передається, як [19, 5, 42, 2, 77], на виході має бути 7.

[10, 343445353, 3453445, 3453545353453] має повернути 3453455.
*/
//---------------------------------------------------------------------------------------------------------------------
