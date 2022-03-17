const value = 37155;
let sum = 0;
let array = value.toString(10).split("").map((int) => parseInt(int, 10));
for (let i = 0; i < array.length; i++) {
    sum += Math.pow(array[i], array.length);
}
//console.log(array.length, typeof array);
if (sum == value){
    console.log(true);
} else {
    console.log(false);
}
console.log(sum);
//---------------------------------------------------------------------------------------------------------------------
/*
A Narcissistic Number is a positive number which is the sum of its own digits, 
each raised to the power of the number of digits in a given base. 
In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic 
number in base 10. 
This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, 
only valid positive non-zero integers will be passed into the function.
*/
/*
Нарцисичне число — це додатне число, яке є сумою його власних цифр, 
кожна з яких приведена в степені числа цифр у даній основі. 
У цьому ката ми обмежимося десятковим числом (основа 10).

Наприклад, візьмемо 153 (3 цифри), що є нарцистичним:

     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
і 1652 (4 цифри), що не є:

     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
Змагання:

Ваш код має повертати true чи false (не 'true' та false') залежно від того, 
чи є дане число нарцисичним числом у основі 10. 
Це може бути True та False у вашій мові, наприклад. PHP.

Перевірка помилок на наявність текстових рядків або інших недійсних введених даних не потрібна, 
у функцію будуть передані лише дійсні позитивні ненульові цілі числа.
*/
//---------------------------------------------------------------------------------------------------------------------
