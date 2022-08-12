function processData(data) {
  return result = data.map(el => el.reduce((a, b) => a - b)).reduce((a, b) => a * b);
}
console.log(processData([[2, 5], [3, 4], [8, 7]])); //3
console.log(processData([[2, 9], [2, 4], [7, 5]])); //28

//---------------------------------------------------------------------------------------------------------------------
/*
You have a two-dimensional list in the following format:

data = [[2, 5], [3, 4], [8, 7]]
Each sub-list contains two items, and each item in the sub-lists is an integer.

Write a function process_data()/processData() that processes each sub-list like so:

[2, 5] --> 2 - 5 --> -3
[3, 4] --> 3 - 4 --> -1
[8, 7] --> 8 - 7 --> 1
and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.

For input, you can trust that neither the main list nor the sublists will be empty.
*/
/*
У вас є двовимірний список у такому форматі:

дані = [[2, 5], [3, 4], [8, 7]]
Кожен підсписок містить два елементи, і кожен елемент у підсписках є цілим числом.

Напишіть функцію process_data()/processData(), яка обробляє кожен підсписок так:

[2, 5] --> 2-5 --> -3
[3, 4] --> 3 - 4 --> -1
[8, 7] --> 8-7 --> 1
а потім повертає добуток усіх оброблених підсписків: -3 * -1 * 1 --> 3.

Для введення можна довіряти, що ні основний список, ні підсписки не будуть порожніми.
*/
