const number = 0;
function solution(number) {
  let result = 0;
  if (number <= 0) {
    result = 0;
  } else {
    for (let i = 0; number > i; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        result += i;
      }
    }
  }
  return result;
}
console.log(result);
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/
/*
Якщо перерахувати всі натуральні числа нижче 10, які кратні 3 або 5, то отримаємо 3, 5, 6 і 9. 
Сума цих кратних дорівнює 23.

Завершіть розв’язання так, щоб воно повернуло суму всіх кратних 3 або 5 нижче переданого числа. 
Крім того, якщо число від’ємне, поверніть 0 (для мов, у яких вони є).

Примітка: якщо число кратне 3 і 5, порахуйте його лише один раз. 
*/
