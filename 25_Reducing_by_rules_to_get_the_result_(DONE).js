function reduceByRules(numbers, rules) {
    let result = rules[0](numbers[0], numbers[1]);
    for (let i = 2; i < numbers.length; i++) {
        result = rules[(i - 1) % rules.length](result, numbers[i]);
    }
    return result;
}

let rules = [(a, b) => a + b, (a, b) => a - b];
console.log(reduceByRules([2.0, 2.0, 3.0, 4.0], rules), 5.0);

rules = [(a, b) => a + b];
console.log(reduceByRules([2.0, 2.0, 2.0], rules), 6.0);
console.log(reduceByRules([2.0, 2.0, 2.0, 2.0], rules), 8.0);
console.log(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0], rules), 10.0);
console.log(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0, 2.0], rules), 12.0);

rules = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b];
console.log(reduceByRules([2.0, 2.0, 2.0], rules), 2.0);
console.log(reduceByRules([2.0, 2.0, 2.0, 2.0], rules), 4.0);
console.log(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0], rules), 6.0);
console.log(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0, 2.0], rules), 4.0);

rules = [(a, b) => Math.min(a, b), (a, b) => Math.max(a, b)];
console.log(reduceByRules([1.3, 2.0, 3.3], rules), 3.3);
console.log(reduceByRules([4.1, 2.2, 2.1, 2.5], rules), 2.2);
console.log(reduceByRules([8.0, 8.1, 4.1, 12.0, 2.0], rules), 8.0);
console.log(reduceByRules([2.9, 2.8, 2.7, 2.6, 2.5, 2.4], rules), 2.4);

//---------------------------------------------------------------------------------------------------------------------
/*
#Reducing by rules to get the result

Your task is to reduce a list of numbers to one number.
For this you get a list of rules, how you have to reduce the numbers.
You have to use these rules consecutively. 
So when you get to the end of the list of rules, you start again at the beginning.

An example is clearer than more words...

numbers: [ 2.0, 2.0, 3.0, 4.0 ]
rules: [ (a,b) => a + b, (a,b) => a - b ]
result: 5.0

You get a list of four numbers.
There are two rules. First rule says: Sum the two numbers a and b. Second rule says: Subtract b from a.

The steps in progressing:
1. Rule 1: First number + second number -> 2.0 + 2.0 = 4.0
2. Rule 2: result from step before - third number -> 4.0 - 3.0 = 1.0
3. Rule 1: result from step before + forth number -> 1.0 + 4.0 = 5.0
Both lists/arrays are never null and will always contain valid elements.
The list of numbers will always contain more than 1 numbers.
In the list of numbers will only be values greater than 0.
Every rule takes always two input parameter.
*/
/*
#Зведення за правилами для отримання результату

Ваше завдання скоротити список чисел до одного числа.
Для цього ви отримуєте список правил, як зменшити кількість.
Ви повинні використовувати ці правила послідовно. 
Отже, коли ви дійдете до кінця списку правил, ви почнете знову з початку.

Приклад зрозуміліший, ніж багато слів...

числа: [ 2.0, 2.0, 3.0, 4.0 ]
правила: [ (a,b) => a + b, (a,b) => a - b ]
результат: 5.0

Ви отримуєте список із чотирьох чисел.
Є два правила. Перше правило говорить: підсумуйте два числа a і b. Друге правило говорить: відніміть b від a.

Етапи прогресу:
1. Правило 1: перше число + друге число -> 2,0 + 2,0 = 4,0
2. Правило 2: результат із попереднього кроку - третє число -> 4,0 - 3,0 = 1,0
3. Правило 1: результат із попереднього кроку + четверте число -> 1,0 + 4,0 = 5,0
Обидва списки/масиви ніколи не є нульовими і завжди містять дійсні елементи.
Список номерів завжди буде містити більше ніж 1 номер.
У списку чисел будуть тільки значення, більші за 0.
Кожне правило завжди приймає два вхідних параметра.
*/
