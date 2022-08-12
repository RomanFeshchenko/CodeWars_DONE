function sumDigPow(a, b) {
    let res = [];
    for (let i = a; i <= b; i++) if (digit(i) === i) res.push(i);
    return res;
}
function digit(number) {
    let figures = "" + number,
        sum = 0;
    for (var i = 0; i < figures.length; i++) { sum += +(figures[i] ** (i + 1)); }
    return sum;
}
console.log(sumDigPow(1, 10))//, [1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(sumDigPow(1, 100))//, [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
console.log(sumDigPow(10, 100))//, [89])
console.log(sumDigPow(90, 100))//, [])
console.log(sumDigPow(90, 150))//, [135])
console.log(sumDigPow(50, 150))//, [89, 135])
console.log(sumDigPow(10, 150))//, [89, 135])


//---------------------------------------------------------------------------------------------------------------------
/*
The number 89 is the first integer with more than one digit that fulfills 
the property partially introduced in the title of this kata. 
What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b]
(inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases (input -> output):

1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

90, 100 --> []
Enjoy it!!
*/
/*
Число 89 є першим цілим числом з більш ніж однією цифрою, яке відповідає властивості, 
частково представленій у назві цієї ката. 
Який сенс говорити «Еврика»? Тому що ця сума дає те саме число.

Фактично: 89 = 8^1 + 9^2

Наступним числом, що володіє цією властивістю, є 135.

Перегляньте цю властивість ще раз: 135 = 1^1 + 3^2 + 5^3

Нам потрібна функція для збору цих чисел, яка може отримати два цілих числа a, b, які визначають діапазон [a, b] 
(включно) і виводять список відсортованих чисел у діапазоні, який відповідає властивості, описаній вище.

Давайте розглянемо деякі випадки (введення -> вихід):

1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
Якщо в діапазоні [a, b] таких чисел немає, функція має вивести порожній список.

90, 100 --> []
Насолоджуйся цим!!
*/
