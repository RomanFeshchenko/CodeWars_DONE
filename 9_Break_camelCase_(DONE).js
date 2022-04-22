function solution(string) {
    return string.split(/(?=[A-Z])/).join(" ");
}
console.log(solution('camelCasing'));
console.log(solution('camelCasingTest'));
//---------------------------------------------------------------------------------------------------------------------
/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/
/*
Доповніть розв’язання так, щоб функція розбивала оболонку верблюда, використовуючи пробіл між словами.

Приклад
"camelCasing" => "верблюжий корпус"
"identifier" => "identifier"
"" => ""
*/