//const names = ["Alex", "Jacob", "Mark", "Max"];
//const names = ["Alex", "Jacob", "Mark"];
//const names = ["Alex", "Jacob"];
//const names = ["Alex"];
function likes(names) {
    if (names.length == 0) {
      return `no one likes this`;
    }
    if (names.length == 1) {
        return (`${names[0]} likes this`);
    }
    if (names.length == 2) {
        return (`${names[0]} and ${names[1]} like this`);
    }
    if (names.length == 3) {
        return (`${names[0]}, ${names[1]} and ${names[2]} like this`);
    }
    if (names.length >= 4) {
        return (`${names[0]}, ${names[1]} and ${names.length - 2} others like this`);
    }
    
    }
  console.log(likes);

//---------------------------------------------------------------------------------------------------------------------
/*
You probably know the "like" system from Facebook and other pages. 
People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. 
It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/
/*
Ви напевно знаєте систему «подобається» з Facebook та інших сторінок. 
Люди можуть «лайкнути» публікації блогу, зображення чи інші елементи. 
Ми хочемо створити текст, який має відображатися поруч із таким елементом.

Реалізуйте функцію, яка приймає масив, що містить імена людей, яким подобається елемент. 
Він повинен повернути відображений текст, як показано в прикладах:

[] --> "це нікому не подобається"
["Пітер"] --> "Пітер любить це"
["Jacob", "Alex"] --> "Jacob and Alex like this"
["Макс", "Джон", "Марк"] --> "Макс, Джон і Марк такі"
["Alex", "Jacob", "Mark", "Max"] --> "Alex, Jacob and 2 other like this"
*/
//---------------------------------------------------------------------------------------------------------------------
