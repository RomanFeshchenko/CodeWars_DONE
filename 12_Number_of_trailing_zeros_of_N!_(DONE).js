function zeros(n) {
  let result = 0;
  while (n) {
    n = (n / 5) | 0;
    result += n;
  }
  return result;
}
console.log(zeros(0)); //0
console.log(zeros(5)); //1
console.log(zeros(6)); //1
console.log(zeros(30)); //7

//---------------------------------------------------------------------------------------------------------------------
/*
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
*/
/*
Напишіть програму, яка обчислюватиме кількість кінцевих нулів у факторіалі даного числа.

N! = 1 * 2 * 3 * ... * N

Обережно 1000! має 2568 цифр...

Для отримання додаткової інформації див.: http://mathworld.wolfram.com/Factorial.html

Приклади
нулі (6) = 1
№ 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 кінцевий нуль

нулі (12) = 2
№ 12! = 479001600 --> 2 кінцевих нулі
Підказка: Ви не призначені для обчислення факторіала. Знайдіть інший спосіб знайти кількість нулів.
*/
