function wave(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    result.push(Array.from(str, (el, idx) => (i === idx ? el.toUpperCase() : el)).join(""));
  }
  return result;
}


console.log(wave("hello"));
console.log(wave("codewars"));
console.log(wave(""));
console.log(wave("two words"));
console.log(wave(" gap "));

//---------------------------------------------------------------------------------------------------------------------
/*
Introduction
The wave (known as the Mexican wave in the English-speaking world outside North America) 
is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, 
yell, and raise their arms. 
Immediately upon stretching to full height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, 
even though individual spectators never move away from their seats. 
In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, 
and so the wave is able to travel continuously around the arena; 
in discontiguous seating arrangements, 
the wave can instead reflect back and forth through the crowd. 
When the gap in seating is narrow, the wave can sometimes pass through it. 
Usually only one wave crest will be present at any given time in an arena, 
although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
Good luck and enjoy!
*/
/*
Хвиля (відома як мексиканська хвиля в англомовному світі за межами Північної Америки) 
є прикладом метахронального ритму, досягнутого на переповненому стадіоні, 
коли послідовні групи глядачів на короткий час стоять, кричать і піднімають руки. 
Відразу після розтягування на повний зріст глядач повертається у звичайне сидяче положення.

Результатом є хвиля стоячих глядачів, яка проходить крізь натовп, 
хоча окремі глядачі ніколи не відходять від своїх місць. 
На багатьох великих аренах натовп сидить по безперервному колу по всьому спортивному майданчику, 
тому хвиля може безперервно подорожувати навколо арени; 
у несумісних розташуваннях сидінь хвиля може замість цього відбиватися вперед і назад крізь натовп. 
Коли проміжок у сидіннях вузький, хвиля іноді може пройти через нього. 
Зазвичай на арені в будь-який момент часу буде присутній лише один гребінь хвилі, 
хоча були створені одночасні хвилі, що обертаються протилежно. (Джерело Вікіпедія)
Завдання
У цій простій ката ваше завдання — створити функцію, яка перетворює рядок на мексиканську хвилю. Вам буде переданий рядок, 
і ви повинні повернути цей рядок у масиві, де велика літера означає людину, яка стоїть.
правила
 1. Рядок введення завжди буде написаний у нижньому регістрі, але, можливо, порожнім.

 2. Якщо символ у рядку є пробілом, перейдіть через нього, як ніби це порожнє місце
Приклад
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hello"]
*/
