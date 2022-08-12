function digital_root(n) {
    let result = 0;
    String(n).split('').map(num => {result += Number(num);});
    return result >= 10 ? digital_root(result) : result;
}




console.log(digital_root(16), 7)
console.log(digital_root(456), 6)

//---------------------------------------------------------------------------------------------------------------------
/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. 
If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
The input will be a non-negative integer.

Examples
16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

*/
/*
Цифровий корінь — це рекурсивна сума всіх цифр числа.

Дано n, візьміть суму цифр числа n. 
Якщо це значення містить більше однієї цифри, продовжуйте скорочувати таким чином, доки не вийде однозначне число. 
Вхідними даними буде невід’ємне ціле число.

Приклади
16 --> 1 + 6 = 7
942 --> 9 + 4 + 2 = 15 --> 1 + 5 = 6
132189 --> 1 + 3 + 2 + 1 + 8 + 9 = 24 --> 2 + 4 = 6
493193 --> 4 + 9 + 3 + 1 + 9 + 3 = 29 --> 2 + 9 = 11 --> 1 + 1 = 2
*/
