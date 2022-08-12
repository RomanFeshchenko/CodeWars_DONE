function twinPrime(n) {
    if (n < 4) return 0;
    let r = 1;
    for (let i = 5; i < n; i += 6) {
        if (underFunction(i) && underFunction(i + 2)) { r++; }
    }
    return r;
}
function underFunction(n) {
    for (let j = 3; j <= n ** 0.5; j += 2) { 
        if (n % j === 0) return false; 
    }
    return true;
}

console.log(twinPrime(-25), 0);
console.log(twinPrime(0), 0);
console.log(twinPrime(1), 0);
console.log(twinPrime(2), 0);
console.log(twinPrime(10), 2);
console.log(twinPrime(11), 2);
console.log(twinPrime(12), 3);
console.log(twinPrime(15), 3);
console.log(twinPrime(25), 4);
console.log(twinPrime(100), 8);


//---------------------------------------------------------------------------------------------------------------------
/*
A twin prime is a prime number that is either 2 less or 2 more than another prime number—for example, 
either member of the twin prime pair (41, 43). 
In other words, a twin prime is a prime that has a prime gap of two. 
Sometimes the term twin prime is used for a pair of twin primes; 
an alternative name for this is prime twin or prime pair. (from wiki https://en.wikipedia.org/wiki/Twin_prime)

Your mission, should you choose to accept it, is to write a function that counts the number of sets of twin primes from 1 to n.

If n is wrapped by twin primes (n-1 == prime && n+1 == prime) then that should also count even though n+1 is outside the range.

Ex n = 10

Twin Primes are (3,5) (5,7) so your function should return 2!
*/
/*
Подвійне просте число — це просте число, яке або на 2 менше, або на 2 більше, 
ніж інше просте число, наприклад будь-який член пари простих чисел-близнюків (41, 43). 
Іншими словами, подвійне просте число — це просте число, яке має двійковий простий розрив. 
Іноді термін подвійне простих чисел використовується для пари простих близнюків; 
альтернативна назва цього - простий близнюк або проста пара. (з вікі https://en.wikipedia.org/wiki/Twin_prime)

Ваша місія, якщо ви вирішите це прийняти, полягає в тому, щоб написати функцію, 
яка підраховує кількість наборів простих чисел-близнюків від 1 до n.

Якщо n обгорнуто подвійними простими числами (n-1 == просте число && n+1 == просте число), 
то це також має враховуватися, навіть якщо n+1 знаходиться за межами діапазону.

Приклад n = 10

Подвійні прості числа дорівнюють (3,5) (5,7), тому ваша функція має повернути 2!
*/
