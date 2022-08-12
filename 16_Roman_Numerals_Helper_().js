//function RomanNumerals(simbol) {
//  if (typeof simbol === Number) return toRoman(simbol);
//  else return fromRoman(simbol);
//}

function toRoman(ArabicNum) {
  let values = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XV: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  },
    resRomanNum = "",
    a;
  for (let key in values) {
    a = Math.floor(ArabicNum / values[key]);
    if (a >= 0) {
      for (let i = 0; i < a; i++) {
        resRomanNum += key;
      }
    }
    ArabicNum = ArabicNum % values[key];
  }
  return resRomanNum;
}

function fromRoman(RomanNum) {
  let values = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XV: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  },
    digits = Object.keys(values),
    resArabicNum = 0;
  for (let symbol = 0; symbol < RomanNum.length; ++symbol) {
    if (
      digits.indexOf(RomanNum[symbol]) < digits.indexOf(RomanNum[symbol + 1])
    ) {
      resArabicNum -= values[RomanNum[symbol]];
    } else {
      resArabicNum += values[RomanNum[symbol]];
    }
  }
  return resArabicNum;
}

//console.log(RomanNumerals.toRoman(1000), "M");
//console.log(RomanNumerals.fromRoman("XXI"), 21);
console.log(toRoman(1000), "M");
console.log(toRoman(4), "IV");
console.log(toRoman(1), "I");
console.log(toRoman(1990), "MCMXC");
console.log(toRoman(2008), "MMVIII");

console.log(fromRoman("XXI"), 21);
console.log(fromRoman("I"), 1);
console.log(fromRoman("IV"), 4);
console.log(fromRoman("MMVIII"), 2008);
console.log(fromRoman("MDCLXVI"), 1666);

//---------------------------------------------------------------------------------------------------------------------
/*
Create a RomanNumerals class that can convert a roman numeral to and from an integer value. 
It should follow the API demonstrated in the examples below. 
Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and 
skipping any digit with a value of zero. 
In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; 
resulting in MCMXC. 
2008 is written as 2000=MM, 8=VIII; or MMVIII. 
1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

Examples
RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000
Help
Symbol	Value
I	1
IV	4
V	5
X	10
L	50
C	100
D	500
M	1000
*/
/*
Створіть клас RomanNumerals, який може перетворювати римську цифру в ціле значення та з нього. 
Він повинен відповідати API, показаному в прикладах нижче. 
Для кожного допоміжного методу буде перевірено кілька значень римських цифр.

Сучасні римські цифри записуються, виражаючи кожну цифру окремо, починаючи з крайньої лівої цифри і 
пропускаючи будь-яку цифру зі значенням нуля. 
Римськими цифрами 1990 передається: 1000=M, 900=CM, 90=XC; в результаті чого утворюється MCMXC. 
2008 записується як 2000=ММ, 8=VIII; або MMVIII. 
1666 використовує кожен римський символ у порядку спадання: MDCLXVI.

Діапазон введення: 1 <= n < 4000

У цьому ката 4 має бути представлено як IV, а НЕ як IIII («четвірка годинникарів»).

Приклади
римські цифри.до римських(1000); // має повертати 'M'
RomanNumerals.fromRoman('M'); // має повернути 1000
Допоможіть
Значення символу
I	1
IV	4
V	5
X	10
L	50
C	100
D	500
M	1000
*/
