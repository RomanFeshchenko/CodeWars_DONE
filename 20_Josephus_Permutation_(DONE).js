function josephus(items, k) {
  const result = [];
  let counter = 0,
      el = 0;
  while (items.length > 0) {
    el = el % items.length;
    if (++counter === k) {
      result.push(items.splice(el, 1)[0]);
      counter = 0;
      el--;
    }
    el++;
  }
  return result;
}

console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))// [2, 4, 6, 8, 10, 3, 7, 1, 9, 5]
console.log(josephus(["C", "o", "d", "e", "W", "a", "r", "s"], 4))// ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']
console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3))// [3, 6, 2, 7, 5, 1, 4]
console.log(josephus([], 3))// []

//---------------------------------------------------------------------------------------------------------------------
/*
This problem takes its name by arguably the most important event in the life of the ancient historian Josephus: 
according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.

Refusing to surrender to the enemy, they instead opted for mass suicide, 
with a twist: they formed a circle and proceeded to kill one man every three, 
until one last man was left (and that it was supposed to kill himself to end the act).

Well, Josephus and another man were the last two and, as we now know every detail of the story, 
you may have correctly guessed that they didn't exactly follow through the original idea.

You are now to create a function that returns a Josephus permutation, 
taking as parameters the initial array/list of items to be permuted as if they were in a circle and counted out 
every k places until none remained.

Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0..n-1; k will always be >=1.

For example, with n=7 and k=3 josephus(7,3) should act this way.

[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
[1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
[1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
[1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
[1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
[4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
[] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
So our final result is:

josephus([1,2,3,4,5,6,7],3)==[3,6,2,7,5,1,4]
*/
/*
Эта проблема получила свое название от, пожалуй, самого важного события в жизни древнего историка Иосифа Флавия: 
согласно его рассказу, он и его 40 солдат были заперты в пещере римлянами во время осады.

Отказавшись сдаться врагу, они вместо этого выбрали массовое самоубийство с изюминкой: 
они образовали круг и продолжали убивать одного человека каждые три, 
пока не остался последний человек (и что он должен был убить себя, чтобы закончить действие).

Что ж, Иосиф Флавий и еще один человек были последними двумя, и, 
поскольку мы теперь знаем каждую деталь этой истории, вы, возможно, правильно догадались, 
что они не совсем следовали первоначальной идее.

Теперь вам нужно создать функцию, которая возвращает перестановку Иосифа Флавия, 
принимая в качестве параметров исходный массив/список элементов, подлежащих перестановке, как если бы они были в круге, 
и подсчитывая каждые k мест, пока не останется ни одного.

Советы и примечания: помогает начать считать от 1 до n вместо обычного диапазона 0..n-1; k всегда будет >=1.

Например, при n=7 и k=3 так должен действовать джозеф (7,3).

[1,2,3,4,5,6,7] - начальная последовательность
[1,2,4,5,6,7] => 3 отсчитывается и входит в результат [3]
[1,2,4,5,7] => 6 отсчитывается и входит в результат [3,6]
[1,4,5,7] => 2 отсчитывается и переходит в результат [3,6,2]
[1,4,5] => 7 отсчитывается и переходит в результат [3,6,2,7]
[1,4] => 5 отсчитывается и переходит в результат [3,6,2,7,5]
[4] => 1 отсчитывается и переходит в результат [3,6,2,7,5,1]
[] => 4 отсчитывается и входит в результат [3,6,2,7,5,1,4]
Итак, наш окончательный результат:

Иосиф ([1,2,3,4,5,6,7],3)==[3,6,2,7,5,1,4]
*/
