function toCamelCase(str) {
  return str
    .replace(/([.*+-?^=_!:${}()|\[\]\/\\])/g, " ")
    //.replace(/_/g, " ")
    .split(" ")
    //.map((el) => el.charAt(0).toUpperCase() + el.slice(1));
    .map((el, idx) => idx === 0 ? el : el.charAt(0).toUpperCase() + el.slice(1))
  .join("");
}

console.log(toCamelCase("")); //''
console.log(toCamelCase("the_stealth_warrior")); //"theStealthWarrior"
console.log(toCamelCase("The-Stealth-Warrior")); //"TheStealthWarrior"
console.log(toCamelCase("A-B-C")); //"ABC"


//---------------------------------------------------------------------------------------------------------------------
/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/
/*
Завершіть метод/функцію, щоб вона перетворила слова, розділені тире/підчеркивання, у верблюжий корпус. 
Перше слово у вихідних даних має бути написане з великої літери, лише якщо вихідне слово було написано з великої літери 
(відоме як Верблюжий регістр, також часто згадується як регістр Паскаля).

Приклади
"the-stealth-warrior" перетворюється на "theStealthWarrior"
"The_Stealth_Warrior" перетворюється на "TheStealthWarrior"
*/
