/*
const str = "How can mirrors be real if our eyes aren't real";
let arr = str.split(" ");
let arr1 = arr.map((el) => el.charAt(0).toUpperCase() + el.slice(1));
let newString = arr1.join(" ");

console.log(arr);
console.log(arr1);
console.log(newString);
*/
let str = "How can mirrors be real if our eyes aren't real";
let newString = str.split(" ")
  .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
  .join(" ");
console.log(newString);

//---------------------------------------------------------------------------------------------------------------------
/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
Jaden is also known for some of his philosophy that he delivers via Twitter. 
When writing on Twitter, he is known for almost always capitalizing every word. 
For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. 
The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/
/*
Джейден Сміт, син Вілла Сміта, є зіркою таких фільмів, як The Karate Kid (2010) і After Earth (2013). 
Джейден також відомий своєю філософією, яку він передає через Twitter. 
Пишучи в Twitter, він відомий тим, що майже завжди пише кожне слово з великої літери. 
Для простоти вам доведеться писати кожне слово з великої літери, перевірте, як очікуються скорочення у прикладі нижче.

Ваше завдання — перетворити рядки на те, як їх писав Джейден Сміт. 
Рядки є справжніми цитатами з Джейдена Сміта, але вони не пишуться з великої літери так, як він їх спочатку надрукував.

приклад:

Not Jaden-Cased: «Як дзеркала можуть бути справжніми, якщо наші очі не справжні»
Джейден-Кейсед: «Як дзеркала можуть бути справжніми, якщо наші очі не справжні»
*/
//---------------------------------------------------------------------------------------------------------------------
