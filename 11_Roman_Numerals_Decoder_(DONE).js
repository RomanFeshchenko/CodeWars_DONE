function solution(roman) {
  let values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 },
  digits = Object.keys(values),
  result = 0;
  for (let symbol = 0; symbol < roman.length; ++symbol) {
    if (digits.indexOf(roman[symbol]) < digits.indexOf(roman[symbol + 1])) {
      result -= values[roman[symbol]];
    } else {
      result += values[roman[symbol]];
    }
  }
  return result;
}
console.log(solution('XXI'));//21
console.log(solution('I'));//1
console.log(solution('IV'));//4
console.log(solution('MMVIII'));//2008
console.log(solution('MDCLXVI'));//1666

//---------------------------------------------------------------------------------------------------------------------
/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. 
You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, 
starting with the leftmost digit and skipping any 0s. 
So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). 
The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000*/
/*
Створіть функцію, яка приймає римське число як аргумент і повертає його значення у вигляді десяткового числа. 
Вам не потрібно перевіряти форму римської цифри.

Сучасні римські цифри записуються шляхом вираження кожної десяткової цифри числа, яке потрібно кодувати окремо, 
починаючи з крайньої лівої цифри і пропускаючи будь-які 0. 
Отже, 1990 рік позначається як «MCMXC» (1000 = M, 900 = CM, 90 = XC), а 2008 — «MMVIII» (2000 = MM, 8 = VIII). 
Римська цифра 1666 року «MDCLXVI» використовує кожну літеру в порядку спадання.

приклад:
solution('XXI'); // should return 21
Довідка:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/
