function josephusSurvivor(n, k) {
	const result = [];
	let counter = 0,
		el = 0,
		arr = [];
	for (i=1; i<=n;i++){
		arr.push(i);
	}
	while (arr.length > 0) {
	  el = el % arr.length;
	  if (++counter === k) {
		result.push(arr.splice(el, 1)[0]);
		counter = 0;
		el--;
	  }
	  el++;
	}
	return result.pop();
}

console.log(josephusSurvivor(7, 3), 4);
console.log(josephusSurvivor(11, 19), 10);
console.log(josephusSurvivor(1, 300), 1);
console.log(josephusSurvivor(14, 2), 13);
console.log(josephusSurvivor(100, 1), 100);


//---------------------------------------------------------------------------------------------------------------------
/*
In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, 
like this:

josephus_survivor(7,3) => means 7 people in a circle;
one every 3 is eliminated until one remains
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out
[1,2,4,5,7] => 6 is counted out
[1,4,5,7] => 2 is counted out
[1,4,5] => 7 is counted out
[1,4] => 5 is counted out
[4] => 1 counted out, 4 is the last element - the survivor!
The above link about the "base" kata description will give you a more thorough 
insight about the origin of this kind of permutation, 
but basically that's all that there is to know to solve this kata.

Notes and tips: using the solution to the other kata to check your function may be helpful, 
but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; 
you may assume that both n and k will always be >=1.
*/
/*
У цьому ката ви повинні правильно повернути, хто є «вижилим», тобто: останній елемент перестановки Йосипа Флавія.

В основному ви повинні припустити, що n людей поміщені в коло і що вони вилучаються кроками з k елементів, наприклад:

josephus_survivor(7,3) => означає 7 людей у ​​колі;
один кожні 3 вилучається, поки один не залишиться
[1,2,3,4,5,6,7] - початкова послідовність
[1,2,4,5,6,7] => 3 відраховується
[1,2,4,5,7] => 6 відраховано
[1,4,5,7] => 2 відраховується
[1,4,5] => 7 відраховано
[1,4] => 5 відраховується
[4] => 1 відраховано, 4 є останнім елементом - вижив!
Наведене вище посилання на опис «базового» ката дасть вам більш повне уявлення про походження такого роду перестановок,
але в основному це все, що потрібно знати, щоб розв’язати цю ката.

Примітки та поради: використання рішення для іншої ката для перевірки вашої функції може бути корисним, 
але оскільки будуть використовуватися набагато більші числа, використання масиву/списку для обчислення кількості тих, 
хто вижив, може бути занадто повільним; ви можете припустити, що і n, і k завжди будуть >=1.
*/
