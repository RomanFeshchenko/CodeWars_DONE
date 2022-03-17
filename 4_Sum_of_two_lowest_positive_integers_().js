//https://gist.github.com/briancbarrow/df81c7e6a24ed4708f25f6b373e232a9
function sumTwoSmallestNumbers(numbers) {
  var longestArr = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < longestArr[0] || longestArr[0] == null) {
      if (longestArr[0] < longestArr[1] || longestArr[1] == null) {
        longestArr[1] = longestArr[0];
      }
      longestArr[0] = numbers[i];
    } else if (numbers[i] < longestArr[1] || longestArr[1] == null) {
      longestArr[1] = numbers[i];
    }
  }
  return longestArr[0] + longestArr[1];
}
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
