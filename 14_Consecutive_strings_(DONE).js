function longestConsec(strarr, k) {
  let result = "";
  if (k > strarr.length || k <= 0) {
    return "";
  }
  for (let i = 0; i <= strarr.length - k; i++) {
    let newArr = strarr.slice(i, i + k).join("");
    if (newArr.length > result.length) {
      result = newArr;
    }
  }
  return result;
}

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
); //"abigailtheta"
console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1
  )
); //"oocccffuucccjjjkkkjyyyeehh"
console.log(longestConsec([], 3)); // ""
console.log(
  longestConsec(
    [
      "itvayloxrp",
      "wkppqsztdkmvcuwvereiupccauycnjutlv",
      "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
    ],
    2
  )
); //"wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
console.log(
  longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2)
); //"wlwsasphmxxowiaxujylentrklctozmymu"
console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)
); //""
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)); //"ixoyx3452zzzzzzzzzzzz"
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15)
); //""
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0)); //""

//---------------------------------------------------------------------------------------------------------------------
/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first 
longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm).

Note
consecutive strings : follow one after another without an interruption
*/
/*
Вам надано масив (список) рядків і ціле число k. Ваше завдання полягає в тому, щоб повернути перший 
найдовший рядок, що складається з k послідовних рядків, взятих у масиві.

Приклади:
strarr = ["дерево", "фолинг", "смітник", "синій", "abcdef", "uvwxyz"], k = 2

Об’єднавши послідовні рядки strrr на 2, ми отримаємо:

дереволист (довжина 10) конкатенація strarr[0] і strarr[1]
folingtrashy (" 12) конкатенація strarr[1] і strarr[2]
trashyblue (" 10) конкатенація strarr[2] і strarr[3]
blueabcdef (" 10) конкатенація strarr[3] і strarr[4]
abcdefuvwxyz (" 12) конкатенація strarr[4] і strarr[5]

Дві струни є найдовшими: "folingtrashy" і "abcdefuvwxyz".
Перше, що прийшло, це "фолінгтраш" так
longest_consec(strarr, 2) має повернути "folingtrashy".

Таким же чином:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n — довжина масиву рядків, якщо n = 0 або k > n або k <= 0 повертає "" (повертає Nothing у Elm).

Примітка
послідовні струни: слідуйте одна за одною без перерви
*/
