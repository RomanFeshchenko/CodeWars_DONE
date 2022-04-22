function findOutlier(integers) {
  let even = [],
    add = [],
    result = 0;
  for (let i = 0; i < integers.length; i++) {
    integers[i] % 2 == 0 ? even.push(integers[i]) : add.push(integers[i]);
    //if (integers[i] % 2 == 0) {
    //  even.push(integers[i]);
    //} else {
    //  add.push(integers[i]);
    //}
  }
  even.length > add.length ? (result = add[0]) : (result = even[0]);
  //if (even.length > add.length) {
  //  result = add[0];
  //} else {
  //  result = even[0];
  //}
  return result;
}

console.log(findOutlier([0, 1, 2])); //1
console.log(findOutlier([1, 2, 3])); //2
console.log(findOutlier([2, 6, 8, 10, 3])); //3
console.log(findOutlier([0, 0, 3, 0, 0])); //3
console.log(findOutlier([1, 1, 0, 1, 1])); //0

//---------------------------------------------------------------------------------------------------------------------
/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or 
entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/
/*
Вам надається масив (який матиме довжину щонайменше 3, але може бути дуже великим), що містить цілі числа. 
Масив або повністю складається з непарних цілих чисел, або 
повністю складається з парних чисел, за винятком одного цілого числа N. 
Напишіть метод, який приймає масив як аргумент і повертає цей «неповний» N.

Приклади
[2, 4, 0, 100, 4, 11, 2602, 36]
Повинно повернути: 11 (єдине непарне число)

[160, 3, 1719, 19, 11, 13, -21]
Повинно повернути: 160 (єдине парне число)
*/
