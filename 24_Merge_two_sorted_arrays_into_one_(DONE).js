//function mergeArrays(arr1, arr2) {
//  let newArray = arr1.concat(arr2);
//  newArray.sort((a, b) => a - b);
//  result = new Set(newArray);
//  return [...result];
//}

//function mergeArrays(arr1, arr2) {
//  let newArray = (arr1.concat(arr2)).sort((a, b) => a - b);
//  result = new Set(newArray);
//  return [...result];
//}

//function mergeArrays(arr1, arr2) {
//  result = new Set((arr1.concat(arr2)).sort((a, b) => a - b));
//  return [...result];
//}

function mergeArrays(arr1, arr2) {
  return [...result= new Set((arr1.concat(arr2)).sort((a, b) => a - b))];
}


console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]));// [1,2,3,4,5,6,7,8]
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2])); //[1,2,3,4,5,6,7,8,9,10]
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));// [1,2,3,4,5,7,9,10,11,12]


//---------------------------------------------------------------------------------------------------------------------
/*
You are given two sorted arrays that both only contain integers. 
Your task is to find a way to merge them into a single one, sorted in asc order. 
Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. 
If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. 
Also arr1 and arr2 may have same integers. 
Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
*/
/*
Вам надано два відсортовані масиви, які містять лише цілі числа. 
Ваше завдання полягає в тому, щоб знайти спосіб об'єднати їх в одну, відсортовану за зростанням. 
Завершіть функцію mergeArrays(arr1, arr2), де arr1 і arr2 — вихідні відсортовані масиви.

Вам не потрібно турбуватися про перевірку, оскільки arr1 і arr2 мають бути масивами з 0 або більше цілими числами. 
Якщо arr1 і arr2 порожні, тоді просто повертається порожній масив.

Примітка: arr1 і arr2 можуть бути відсортовані в різному порядку. 
Також arr1 і arr2 можуть мати однакові цілі числа. 
Видалити дублікат у поверненому результаті.

Приклади (введення -> вихід)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10 , 11, 12]
*/
